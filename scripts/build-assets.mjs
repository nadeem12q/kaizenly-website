// ---------------------------------------------------------------------------
// Generates the OpenGraph image and PNG icons from monochrome SVG sources.
//   node scripts/build-assets.mjs
// ---------------------------------------------------------------------------

import sharp from "sharp";
import path from "node:path";
import { promises as fs } from "node:fs";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.resolve(__dirname, "..", "public");

// Sprout-K mark (white on transparent) — same geometry as the launcher icon.
const markStroke = `
  <g fill="none" stroke="#f4f4f4" stroke-width="72" stroke-linecap="round" stroke-linejoin="round">
    <path d="M 365 392 A 230 230 0 1 0 762 482"/>
    <path d="M 415 356 L 415 613"/>
    <path d="M 416 613 L 678 355"/>
    <path d="M 542 626 L 682 766"/>
  </g>
  <circle cx="697" cy="462" r="28" fill="#f4f4f4"/>`;

const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0f0f0f"/>
  <rect x="0.5" y="0.5" width="1199" height="629" fill="none" stroke="#333333"/>
  <g transform="translate(90,150) scale(0.30)">${markStroke}</g>
  <text x="92" y="360" font-family="Georgia, 'EB Garamond', serif" font-size="92" fill="#f4f4f4" letter-spacing="-2">KaiZenly+</text>
  <text x="96" y="430" font-family="Inter, sans-serif" font-size="33" fill="#a0a0a0">Improve your life calmly, one small step at a time.</text>
  <text x="96" y="492" font-family="Inter, sans-serif" font-size="25" fill="#6b6b6b">Habits · Focus · Journal · Mood · Insights — privacy-first for Android</text>
  <g font-family="Inter, sans-serif" font-size="22" fill="#a0a0a0">
    <text x="96" y="560">Local-first</text>
    <text x="280" y="560">No server</text>
    <text x="450" y="560">No tracking</text>
    <text x="650" y="560">No mandatory login</text>
  </g>
</svg>`;

const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 1024 1024">
  <rect width="1024" height="1024" rx="220" fill="#000000"/>${markStroke}</svg>`;

async function main() {
  await fs.mkdir(PUBLIC, { recursive: true });

  await sharp(Buffer.from(ogSvg)).png().toFile(path.join(PUBLIC, "og-image.png"));
  console.log("wrote og-image.png (1200x630)");

  await sharp(Buffer.from(iconSvg)).resize(180, 180).png().toFile(path.join(PUBLIC, "icon-180.png"));
  console.log("wrote icon-180.png");

  await sharp(Buffer.from(iconSvg)).resize(512, 512).png().toFile(path.join(PUBLIC, "icon-512.png"));
  console.log("wrote icon-512.png");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
