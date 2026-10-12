# OFFBEAT portfolio upload package

`offbeat-website.zip` contains the completed static portfolio concept. No server runtime or database is required.

After deployment is explicitly approved:

1. Back up the existing hosted files.
2. Extract the ZIP and upload its contents to the website document root (`public_html`, `www`, or `htdocs`). `index.html` must sit directly in the intended public directory, beside `style.css`, `app.js`, `robots.txt`, `sitemap.xml` and `assets/`.
3. Preserve all font-license files in `assets/fonts/`.
4. Refresh the site and verify the menu, three session dialogs, both journal articles, paused-motion behavior, concept enquiry and Silverside disclosure link.

Use HTTPS. Canonical, social URLs, sitemap and robots.txt are configured for https://offbeat.silverside.co/. Change them if using a different production hostname. Assets use relative paths and work from a subfolder.

The imagery and public content are finished. Offbeat is a fictional design concept; do not add real booking/payment facilities without revising that scope. Enquiries currently lead to https://www.silverside.co/ rather than collecting visitor information. Fonts and images are served locally.

The ZIP excludes source documentation, screenshots, unused legacy placeholders and fictional calendar files. Genuine portfolio screenshots are separately stored in `portfolio-assets/`.

This package was prepared locally. Its creation does not deploy the site or modify the hosted Offbeat or Silverside websites.
