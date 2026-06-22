// Verifies every internal href/src in the built site resolves to a real file.
//   node scripts/check-links.mjs
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SITE } from "../src/config.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "..", "dist");
const BASE = SITE.base.replace(/\/$/, "");

async function walk(dir) {
  const out = [];
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (e.name.endsWith(".html")) out.push(p);
  }
  return out;
}

async function exists(p) {
  try { await fs.access(p); return true; } catch { return false; }
}

async function resolves(url) {
  // strip query/hash
  let u = url.split("#")[0].split("?")[0];
  if (!u.startsWith(BASE + "/") && u !== BASE) return null; // not internal
  let rel = u.slice(BASE.length);
  if (rel === "" || rel === "/") return await exists(path.join(DIST, "index.html"));
  const target = path.join(DIST, rel);
  if (await exists(target)) {
    const st = await fs.stat(target);
    if (st.isDirectory()) return await exists(path.join(target, "index.html"));
    return true;
  }
  // directory-style route without trailing slash
  if (await exists(path.join(target, "index.html"))) return true;
  if (await exists(target + ".html")) return true;
  return false;
}

const files = await walk(DIST);
const broken = [];
let checked = 0;
const attrRe = /(?:href|src)="([^"]+)"/g;
for (const f of files) {
  const html = await fs.readFile(f, "utf8");
  let m;
  while ((m = attrRe.exec(html))) {
    const url = m[1];
    if (!url.startsWith(BASE)) continue; // external / mailto / data / anchors handled elsewhere
    checked++;
    const ok = await resolves(url);
    if (ok === false) broken.push(`${path.relative(DIST, f)}  ->  ${url}`);
  }
}

console.log(`Checked ${checked} internal links across ${files.length} HTML files.`);
if (broken.length) {
  console.log(`\n❌ ${broken.length} broken internal link(s):`);
  for (const b of broken) console.log("  " + b);
  process.exit(1);
} else {
  console.log("✅ No broken internal links.");
}
