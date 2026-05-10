import { readdir, mkdir, copyFile, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const SRC_DIR = path.resolve('public/images');
const BACKUP_DIR = path.resolve('public/images-original');
const OUT_DIR = SRC_DIR;

// Two output sizes per image. Components reference the regular name; modal uses -large.
// Standard = grid thumbnails (rendered ~430px wide, 2x for retina = ~860px).
// Large = modal / hero (rendered up to viewport width).
const SIZES = [
  { suffix: '', width: 900, quality: 72 },
  { suffix: '-large', width: 1920, quality: 78 },
];

const SKIP = new Set(['.gitkeep']);

async function backupOriginals(files) {
  if (!existsSync(BACKUP_DIR)) await mkdir(BACKUP_DIR, { recursive: true });
  for (const f of files) {
    const dest = path.join(BACKUP_DIR, f);
    if (!existsSync(dest)) {
      await copyFile(path.join(SRC_DIR, f), dest);
    }
  }
}

function targetName(file, suffix) {
  const base = path.basename(file, path.extname(file)).replaceAll(/\s+/g, '_');
  return `${base}${suffix}.webp`;
}

async function processOne(file) {
  const input = path.join(BACKUP_DIR, file);
  const before = (await stat(input)).size;
  const results = [];
  for (const { suffix, width, quality } of SIZES) {
    const out = path.join(OUT_DIR, targetName(file, suffix));
    await sharp(input)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality })
      .toFile(out);
    const after = (await stat(out)).size;
    results.push({ out: path.basename(out), after });
  }
  return { file, before, results };
}

function fmt(bytes) {
  return (bytes / 1024).toFixed(0) + ' KB';
}

const files = (await readdir(SRC_DIR))
  .filter(f => /\.(jpe?g|png)$/i.test(f) && !SKIP.has(f));

console.log(`Found ${files.length} images. Backing up originals to ${BACKUP_DIR}…`);
await backupOriginals(files);

let totalBefore = 0;
let totalAfter = 0;

for (const f of files) {
  const { before, results } = await processOne(f);
  totalBefore += before;
  const afterSum = results.reduce((s, r) => s + r.after, 0);
  totalAfter += afterSum;
  const summary = results.map(r => `${r.out} ${fmt(r.after)}`).join(', ');
  console.log(`  ${f}  ${fmt(before)}  ->  ${summary}`);
}

console.log(`\nTotal: ${fmt(totalBefore)}  ->  ${fmt(totalAfter)}  (${(100 - (totalAfter / totalBefore) * 100).toFixed(1)}% smaller)`);
console.log(`\nNote: WebP files are written with underscores instead of spaces in filenames.`);
console.log(`Update component <img src> paths to match (e.g. "/images/Project_2.webp").`);
