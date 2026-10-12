# OFFBEAT — a listening club, out of the ordinary

An original responsive website for a fictional travelling listening club. Inspired by La Revoltosa’s theatrical pacing, contrasting typography, tightly controlled palette and large-scale visual motifs. OFFBEAT establishes its own music-poster identity with acid yellow, ink, paper, vinyl geometry, ticket edges and editorial compositions.

## Run locally

Requirements: Python 3. Node 18+ is needed only for the optional build and JavaScript check. No package installation is required.

```sh
npm run dev
```

Open http://localhost:5173. Alternatively run `python3 -m http.server 5173` from this directory. Stop the server with Ctrl+C.

```sh
npm run check
npm run build
```

The production build is written to `dist/`; serve or deploy that directory on any static host. To preview it: `python3 -m http.server 5174 --directory dist`.

## Files and customization

- `index.html`: semantic page content and five art-directed sections.
- `style.css`: palette, type, responsive layouts, hover states, CSS animation and reduced-motion rules.
- `app.js`: modal navigation, session details, journal articles, contact draft and scroll reveals.
- `assets/*.svg`: original labelled image placeholders and favicon. Replace the three image placeholders with photographs and update their alt text and captions. The vinyl hero is CSS, not a placeholder photo.
- `assets/session-*.ics`: downloadable fictional calendar events; UTC times account for London daylight saving on 24 October.
- `DESIGN-ANALYSIS.md`: findings from direct desktop/mobile inspection of the reference.
- `screenshots/`: desktop hero, full desktop page, mobile hero and full tablet page.

Fonts are Barlow Condensed, Libre Caslon Display and DM Sans from Google Fonts, with local system fallbacks. For an offline deployment, self-host those fonts and replace the font stylesheet link. All illustrations and local functionality work without third-party JavaScript.

## Interactions

Full-screen navigation, section anchors, record rotation and scroll drift, staggered section reveals, programme hover treatments, readable journal dialogs, downloadable calendars and a validated contact form. Escape closes dialogs; native modal focus trapping and focus restoration support keyboard use. The pause button stops decorative animations and scroll drift. System `prefers-reduced-motion` disables animations, reveal transitions and smooth scrolling.

The brand, programme, venues and stories are fictional. Session selection is a demo, not ticket booking. Contact creates a mailto draft addressed to `hello@offbeat.example`; replace this address in `app.js` before real use. There is no backend, payment processing, data storage or email sending. Opening the email draft depends on a configured email app.

## Review and validation

Reviewed in the real browser at 1440×900, 768×1024, 390×844 and 320×800. Fixed excessive hero overlap, ticker overflow, mobile heading wrapping, tablet decorative clipping, and paused-record displacement. Verified session and journal dialogs, Escape/focus restoration, menu anchors, required contact-field validation, all image loading, the motion pause state, and a real calendar file download. JavaScript syntax and static build pass. No browser console warnings/errors were observed in the final review.

Accessibility basics checked: one h1, labelled controls, image alt text, native form labels, skip link, focus outlines and modal focus handling. Reduced-motion CSS was inspected and the equivalent manual pause behavior was tested; OS reduced-motion emulation was unavailable. This is a browser review, not a formal WCAG certification or Lighthouse audit. Local HTML/CSS/JS/SVG/calendar payload is about 36KB before external fonts; images are SVG, journal assets lazy-load, and scroll effects use requestAnimationFrame and IntersectionObserver.
