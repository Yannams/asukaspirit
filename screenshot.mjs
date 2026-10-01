import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const outDir = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\402355f6-752d-47d9-bfd9-4ca2caaaf4f1\\scratch\\screenshots';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const pages = [
  '/lunettes/shaka-x4',
  '/montres/as-watch-1',
  '/montres/as-watch-2',
  '/montres/as-watch-3',
  '/ordinateurs',
  '/ordinateurs/revo-free/shango',
  '/contact'
];

const viewports = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 }
];

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (const route of pages) {
    console.log(`Visiting ${route}`);
    try {
      await page.goto(`http://localhost:3000${route}`, { waitUntil: 'networkidle2', timeout: 30000 });
      // Wait a little bit for animations to settle
      await new Promise(r => setTimeout(r, 2000));
      
      for (const vp of viewports) {
        await page.setViewport({ width: vp.width, height: vp.height });
        await new Promise(r => setTimeout(r, 500)); // wait for resize
        const safeRouteName = route.replace(/\//g, '_');
        const filename = `${safeRouteName}_${vp.name}.png`;
        const filepath = path.join(outDir, filename);
        await page.screenshot({ path: filepath, fullPage: true });
        console.log(`Saved ${filename}`);
      }
    } catch (e) {
      console.error(`Failed to screenshot ${route}:`, e.message);
    }
  }

  await browser.close();
}

run();
