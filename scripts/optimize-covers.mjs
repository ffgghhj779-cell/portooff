import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, '../public/projects/covers');

const files = fs.readdirSync(dir).filter((f) => f.endsWith('.png'));

for (const file of files) {
  const src = path.join(dir, file);
  const dest = path.join(dir, file.replace('.png', '.webp'));
  const before = fs.statSync(src).size;
  await sharp(src)
    .resize(1920, 1080, { fit: 'cover', position: 'top' })
    .webp({ quality: 88, effort: 4 })
    .toFile(dest);
  const after = fs.statSync(dest).size;
  fs.unlinkSync(src);
  console.log(`${file} → ${file.replace('.png', '.webp')} (${Math.round(before / 1024)}KB → ${Math.round(after / 1024)}KB)`);
}

console.log('Optimized.');
