# OFFBEAT — Silverside portfolio concept

A completed fictional music and culture website concept by Silverside Web Solutions. The original acid-yellow, paper and ink identity, expressive type, vinyl hero, ticket programme and staggered editorial compositions are preserved.

## Local preview

Python 3 is required for the preview. Node 18+ runs the optional build and integrity checks. There are no npm dependencies to install.

```sh
npm run dev
```

Open http://localhost:5173/. If an existing preview is running, refresh it after changing source files.

```sh
npm run check
npm run build
```

`dist/` is a clean, static production build. Node, Python and a database are not needed on the hosting server. Upload only its contents when deployment is approved. All assets use relative paths, so a subfolder works too. The canonical URL and sitemap target https://offbeat.silverside.co/.

## Portfolio completion

- Three original atmospheric artworks replace the SVG image stand-ins. Responsive WebP versions, intrinsic dimensions, async decoding and lazy loading keep images efficient and stable.
- Public artwork captions, the fictional season and the studio disclosure identify this as a design concept. No actual customers, bookings, partnerships or venues are claimed.
- Session dialogs describe the imagined experience. Calendar downloads, the fictional accessibility promise and dead email draft have been removed.
- The enquiry dialog explains the concept and provides a meaningful link to Silverside.
- Both journal articles are complete and open with motion running or paused. Dialogs support native keyboard focus trapping, Escape, focus restoration and scrolling on small displays.
- Touch controls are at least 44px. Responsive adjustments protect the hero title and session CTA. Reduced-motion preferences and manual pause suppress decorative motion.
- Fonts are self-hosted Latin WOFF2 files with SIL Open Font Licenses. Shared DM Sans files are deduplicated in the build. No external font service or third-party JavaScript is required.
- Accurate concept title/description, canonical, social metadata, social image, robots.txt and sitemap are included. Indexing is deliberately allowed for an honestly described portfolio concept; no LocalBusiness/Event schema is used.

## Project files

- `index.html`, `style.css`, `app.js`: website source.
- `assets/images/`: final responsive imagery and social crop.
- `assets/fonts/`: font stylesheet, WOFF2 assets and open font licenses.
- `assets/ARTWORK-PROVENANCE.md`: original artwork prompts and source details.
- `portfolio-assets/`: genuine final browser screenshots; see its README for capture sizes.
- `PORTFOLIO-REVIEW.md`: review findings, validation, and remaining verification limits.
- `release/offbeat-website.zip`: current portfolio production package.
- `scripts/check-site.mjs`: checks local assets, font files, section anchors, metadata, dates and unfinished public-copy regressions.

Legacy SVG stand-ins and calendar files remain in source for reference, but the build deliberately excludes them. Earlier screenshots in `screenshots/` are historical; use `portfolio-assets/` for the Silverside portfolio.

## Editing and publishing

Change content in `index.html`, the session/editorial/enquiry text in `app.js`, and the design tokens at the start of `style.css`. Replace the version query strings on CSS/JS after future changes to prevent stale caches. Keep the concept disclosure and font licenses.

The live site and Silverside website have not been changed. No commit, push or deployment is performed by the build. See `release/UPLOAD-INSTRUCTIONS.md` when a manual deployment is approved.
