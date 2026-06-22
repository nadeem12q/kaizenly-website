// ---------------------------------------------------------------------------
// Copies selected screenshots from the raw library into public/screenshots,
// generating privacy-masked copies for the two shots that exposed a Google
// account email (46, 47). Raw masters in _raw_screens are never modified.
//
//   node scripts/process-screenshots.mjs
// ---------------------------------------------------------------------------

import sharp from "sharp";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { categories } from "../src/data/screenshots.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const RAW = path.join(ROOT, "_raw_screens");
const OUT = path.join(ROOT, "public", "screenshots");

// Email region as fractions of the image [x1, y1, x2, y2]. Tuned per shot.
const MASKS = {
  "46_local_backup_screen_dark.webp": {
    box: [0.08, 0.546, 0.95, 0.59],
    sampleAt: [0.97, 0.566],
  },
  "47_drive_backup_progress.webp": {
    box: [0.18, 0.305, 0.93, 0.36],
    sampleAt: [0.96, 0.333],
  },
};

async function samplePixel(input, fx, fy, W, H) {
  const left = Math.min(W - 1, Math.max(0, Math.round(fx * W)));
  const top = Math.min(H - 1, Math.max(0, Math.round(fy * H)));
  const buf = await sharp(input)
    .extract({ left, top, width: 1, height: 1 })
    .raw()
    .toBuffer();
  return { r: buf[0], g: buf[1], b: buf[2] };
}

async function maskEmail(input, output, spec) {
  const meta = await sharp(input).metadata();
  const W = meta.width;
  const H = meta.height;
  const color = await samplePixel(input, spec.sampleAt[0], spec.sampleAt[1], W, H);
  const [x1, y1, x2, y2] = spec.box;
  const left = Math.round(x1 * W);
  const top = Math.round(y1 * H);
  const width = Math.round((x2 - x1) * W);
  const height = Math.round((y2 - y1) * H);
  const rect = await sharp({
    create: { width, height, channels: 3, background: color },
  })
    .png()
    .toBuffer();
  await sharp(input)
    .composite([{ input: rect, left, top }])
    .webp({ quality: 92 })
    .toFile(output);
  return { W, H, left, top, width, height, color };
}

async function main() {
  await fs.mkdir(OUT, { recursive: true });

  const files = new Set();
  for (const c of categories) for (const s of c.shots) files.add(s.file);

  let copied = 0;
  let masked = 0;
  for (const file of files) {
    const src = path.join(RAW, file);
    const dest = path.join(OUT, file);
    try {
      await fs.access(src);
    } catch {
      console.warn(`!! missing raw screenshot: ${file}`);
      continue;
    }
    if (MASKS[file]) {
      const info = await maskEmail(src, dest, MASKS[file]);
      masked++;
      console.log(
        `masked ${file}  (${info.W}x${info.H}) box=${info.left},${info.top} ${info.width}x${info.height} fill=rgb(${info.color.r},${info.color.g},${info.color.b})`
      );
    } else {
      await fs.copyFile(src, dest);
      copied++;
    }
  }
  console.log(`\nDone. Copied ${copied}, masked ${masked}. Output: public/screenshots`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
