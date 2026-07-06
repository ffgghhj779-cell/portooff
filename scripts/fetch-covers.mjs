import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '../public/projects/covers');

const projects = [
  { slug: 'afaq', url: 'https://afaq-ivory.vercel.app/' },
  { slug: 'alwafeer', url: 'https://alwafeer-store.web.app/' },
  { slug: 'alrehan-almasi', url: 'https://alrehan-almasi.vercel.app/' },
  { slug: 'arkan', url: 'https://arkan-alpha.vercel.app/' },
  { slug: 'aura', url: 'https://aura-omega-jade.vercel.app/' },
  { slug: 'badeel-alsejad', url: 'https://badeel-alsejad.web.app/' },
  { slug: 'khair-al-jiwar', url: 'https://khair-al-jiwar.web.app/' },
  { slug: 'khair-aljaar', url: 'https://khaireljewar.vercel.app/en' },
  { slug: 'khasstock', url: 'https://khasstock-8833a.web.app/' },
  { slug: 'nodra', url: 'https://nodra-985b0.web.app/' },
  { slug: 'ryadco', url: 'https://ryadco-513b2.web.app/' },
  { slug: 'soul-gold', url: 'https://soul-gold.vercel.app/' },
  { slug: 'soul-gold-trading', url: 'https://soul-ubbd.vercel.app/' },
  { slug: 'tasami-industrial', url: 'https://tasami-klinker.vercel.app/' },
  { slug: 'tasami-alwataniya', url: 'https://tasami-1.vercel.app/' },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function screenshotUrl(targetUrl) {
  const api = new URL('https://api.microlink.io/');
  api.searchParams.set('url', targetUrl);
  api.searchParams.set('screenshot', 'true');
  api.searchParams.set('viewport.width', '1920');
  api.searchParams.set('viewport.height', '1080');
  api.searchParams.set('viewport.deviceScaleFactor', '2');
  api.searchParams.set('meta', 'false');

  const res = await fetch(api.toString());
  if (!res.ok) throw new Error(`Microlink HTTP ${res.status}`);
  const json = await res.json();
  const url = json?.data?.screenshot?.url;
  if (!url) throw new Error('No screenshot URL in response');
  return url;
}

async function downloadImage(imageUrl, dest) {
  const res = await fetch(imageUrl);
  if (!res.ok) throw new Error(`Download HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
  return buf.length;
}

fs.mkdirSync(outDir, { recursive: true });

for (const project of projects) {
  const dest = path.join(outDir, `${project.slug}.png`);
  process.stdout.write(`→ ${project.slug} ... `);
  try {
    const shot = await screenshotUrl(project.url);
    const bytes = await downloadImage(shot, dest);
    console.log(`OK (${Math.round(bytes / 1024)} KB)`);
  } catch (err) {
    console.log(`FAIL: ${err.message}`);
  }
  await sleep(2500);
}

console.log('Done.');
