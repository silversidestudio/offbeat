import { mkdir, copyFile, cp, rm, readFile } from 'node:fs/promises';
import { basename } from 'node:path';
// dist is disposable build output; rebuild it so obsolete demo assets are not shipped.
await rm('dist', { recursive: true, force: true });
await mkdir('dist/assets', { recursive: true });
for (const file of ['index.html', 'style.css', 'app.js', 'robots.txt', 'sitemap.xml']) {
  await copyFile(file, `dist/${file}`);
}
await copyFile('assets/favicon.svg', 'dist/assets/favicon.svg');
const fontFiles = new Set([...((await readFile('assets/fonts/fonts.css', 'utf8')).matchAll(/url\(([^)]+)\)/g))].map(match => match[1]));
for (const directory of ['images', 'fonts']) {
  await cp(`assets/${directory}`, `dist/assets/${directory}`, {
    recursive: true,
    filter: path => !path.endsWith('.ttf') && (!path.endsWith('.woff2') || fontFiles.has(basename(path)))
  });
}
console.log('Portfolio production site built in dist/');
