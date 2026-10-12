# OFFBEAT portfolio review — 12 October 2026

## Result

The local website is ready to present as a Silverside portfolio concept. Its original visual identity and section structures are retained. No hosted website, commit or remote repository was modified.

## Review findings and changes

The hosted and local versions previously exposed three SVG stand-ins, placeholder captions, a fictitious calendar download, an example mail address, and minimal concept attribution. Those details made an otherwise distinctive design feel unfinished.

- Replaced all three public image stand-ins with original atmospheric concept artwork. All responsive images are local WebP files, with reserved dimensions and useful alt text. Public captions and the footer disclose the invented artwork and spaces.
- Preserved the acid-yellow/ink/paper palette, condensed/serif pairing, animated vinyl hero, angled ticker, torn ticket programme, circular listening ritual and staggered journal. Adjusted wider-phone record placement and capped headline scale; reduced the laptop record footprint to keep the session link clear.
- Added a linked Silverside concept disclosure. The imagined 2026 season is dated consistently and explains that there are no bookings or tickets. Removed calendar downloads and the fictional step-free access promise.
- Completed the journal copy and corrected reading-time labels. Replaced the non-deliverable email draft with a useful studio-introduction dialog linking to the supplied Silverside website.
- Kept native modal navigation and dialogs; improved small-screen scrolling, close-button touch targets, scroll-position reset and focus restoration without an unwanted page jump. Pausing motion no longer hides dialog entrances.
- Self-hosted the existing licensed typefaces as Latin WOFF2 files. The shared DM Sans binary is referenced once in the build. Images and fonts require no third-party runtime requests.
- Added accurate concept title/description, canonical and social metadata, a social image, robots.txt and sitemap. Indexing is allowed for this explicitly disclosed portfolio concept. There is no venue, business or real-event structured data.
- Rebuilt the upload package without old image stand-ins, calendars, source documents or development screenshots.

## Validation

Real browser review covered widths 320, 430, 768, 1280, 1440 and 1920 pixels. Main validation viewports included 320×800, 430×932, 768×1024, 1280×800, 1440×900 and 1920×1080. No horizontal document overflow was observed. Reviewed the hero, About imagery, programme, house rules, journal, concept disclosure and mobile menu.

Verified all four menu destinations, hero links and back-to-top navigation; all three session dialogs; both journal articles with motion paused; the enquiry destination; concept links from session details; Escape dismissal; and Tab/Shift+Tab movement with focus restoration. No broken images, unlabelled buttons, missing image alt attributes or final console errors/warnings were observed. The enquiry link uses the exact Silverside destination supplied in the brief; the Silverside site was not edited.

`npm run check` passes JavaScript syntax plus static integrity checks for asset references, font references, section anchors, metadata, date weekdays and unfinished-copy regressions. `npm run build` passes. ZIP integrity is verified; the package contains 23 public files and is about 792KB.

Primary colour contrasts: ink on acid 13.39:1; ink on paper 14.22:1; ink on orange 5.65:1; paper on ink 14.22:1. Primary text meets WCAG AA contrast thresholds. Decorative outlines and nonessential motifs intentionally use softer contrast.

Production payload: JavaScript 8,502 bytes (3,377 bytes gzipped), HTML/CSS/JS about 40KB uncompressed, fonts 112,280 bytes, all image variants/social artwork 657,934 bytes. A visitor loads only the selected responsive image variants. Images below the hero lazy-load, image dimensions reserve space, font-display is swap, and hero scrolling uses requestAnimationFrame with an offscreen early exit.

## Genuine portfolio captures

The four JPEGs in `portfolio-assets/` are actual browser captures of the completed local website, not generated screenshots or device mockups. They include a desktop hero, mobile hero, complete About composition and full desktop page. See that directory's README for dimensions. The generated editorial artwork is separate from these browser captures.

## Remaining verification limits

No known functional defect remains in the reviewed browser. Lighthouse/axe tooling was not available in the supported browser interface, so no Lighthouse score or automated accessibility certification is claimed. OS reduced-motion emulation, screen-reader testing, other browser engines and physical devices were not exercised. Reduced-motion rules were reviewed; equivalent manual pause behavior and the earlier transparent-dialog regression were verified in the real browser. A hosted Lighthouse run and broader device testing can follow an approved deployment.

Local preview: http://localhost:5173/. Deployment remains unapproved and has not been performed.
