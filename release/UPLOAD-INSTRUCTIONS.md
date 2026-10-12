# Uploading OFFBEAT

`offbeat-website.zip` contains the ready-to-serve website. It is a static site: the server does not need Node.js, Python, npm, a database, or a build step.

1. Download and extract `offbeat-website.zip` on your computer, or upload it and extract it using your hosting control panel.
2. Place its contents in your website's document root, usually `public_html`, `www`, or `htdocs`. Upload `index.html`, `style.css`, `app.js`, and the entire `assets` folder together. Back up any existing website before replacing files.
3. Open your domain. If uploading into a subfolder, open that subfolder's URL instead. The site's relative asset paths support both locations.
4. Check the menu, both journal articles, session calendar downloads and contact dialog. If replacing an older copy, refresh your browser cache.

Do not upload the surrounding project directory or the ZIP itself as the website. `index.html` should be directly inside the intended public directory. Use HTTPS provided by your hosting service.

## Before a real launch

- The brand, events and venue details are fictional demo content. Replace them as appropriate.
- Replace the clearly labelled SVG image placeholders and update their alt text/captions in `index.html`.
- Contact creates an email draft, rather than submitting to a server. Replace `hello@offbeat.example` in `app.js` with your actual address. Visitors need an email app configured to use that action.
- Fonts load from Google Fonts. The website has system-font fallbacks, but self-host the fonts if you require completely offline operation.

## Updating

Edit the source project, run `npm run check` and `npm run build`, then upload the contents of `dist/`. After changing CSS or JavaScript, update their version query strings in `index.html` to prevent visitors seeing cached files.

This package includes only public website files, with no development files, screenshots, credentials or server configuration.
