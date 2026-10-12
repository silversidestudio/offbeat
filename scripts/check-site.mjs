import { readFile, access } from 'node:fs/promises';
import assert from 'node:assert/strict';
const html = await readFile('index.html', 'utf8');
const app = await readFile('app.js', 'utf8');
const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]));
for (const [, value] of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
  if (value.startsWith('#')) { assert(ids.has(value.slice(1)), `Broken anchor ${value}`); continue; }
  if (/^https?:/.test(value)) continue;
  await access(value.split('?')[0]);
}
for (const [, sources] of html.matchAll(/\bsrcset="([^"]+)"/g)) {
  for (const source of sources.split(',')) await access(source.trim().split(/\s+/)[0]);
}
for (const [, file] of (await readFile('assets/fonts/fonts.css', 'utf8')).matchAll(/url\(([^)]+)\)/g)) await access(`assets/fonts/${file}`);
assert.equal((html.match(/<h1\b/g) || []).length, 1, 'Exactly one main heading');
assert(!/IMAGE PLACEHOLDER|offbeat\.example|DOWNLOAD CALENDAR|CREATE EMAIL DRAFT/.test(html+app), 'Unfinished public copy');
assert(html.includes('https://www.silverside.co/'), 'Studio attribution');
assert(html.includes('href="https://offbeat.silverside.co/"'), 'Canonical URL');
assert(html.includes('content="index,follow"'), 'Explicit indexing intent');
for (const [date,weekday] of [['2026-10-24',6],['2026-11-08',0],['2026-11-21',6]]) assert.equal(new Date(date+'T12:00:00Z').getUTCDay(),weekday,'Session weekday');
await access('assets/images/offbeat-social.jpg');
console.log('Static integrity checks passed: assets, font files, section anchors, concept metadata, demo-copy regressions and date weekdays.');
