// 將 raw-images/ 的原始圖檔轉成網頁用 WebP，輸出到 public/images/
// 用法：npm run optimize:images（新增或替換原始圖後再跑一次）
import { readdir, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const SRC = 'raw-images';
const OUT = 'public/images';

// 各檔案的最大寬度（px）；未列出的用 DEFAULT_WIDTH
const DEFAULT_WIDTH = 1200;
const WIDTHS = {
  A_mainview: 1920,
  A_Cat_s_Paw_bg: 1920,
  p4_Boss: 1200,
  p4_Boss_pro: 1200,
  p4_catfish: 900,
  p4_catandpillar: 1000,
};

await mkdir(OUT, { recursive: true });
const files = (await readdir(SRC)).filter((f) => /\.(png|jpe?g|gif)$/i.test(f));

for (const file of files) {
  const name = path.parse(file).name;
  const input = path.join(SRC, file);
  const output = path.join(OUT, `${name}.webp`);
  const animated = /\.gif$/i.test(file);

  await sharp(input, { animated, limitInputPixels: false })
    .resize({ width: WIDTHS[name] ?? DEFAULT_WIDTH, withoutEnlargement: true })
    .webp({ quality: animated ? 75 : 80, effort: 5 })
    .toFile(output);

  const before = (await stat(input)).size;
  const after = (await stat(output)).size;
  console.log(`${file.padEnd(28)} ${(before / 1024).toFixed(0).padStart(7)} KB → ${(after / 1024).toFixed(0).padStart(5)} KB`);
}
