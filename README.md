# Val Moratalla — Portfolio

Personal portfolio of Val Moratalla, Software Engineer based in Quezon City, PH.

**Live site:** https://aakocval.github.io/portfolio/

A single-page static site: plain HTML, SCSS and vanilla JavaScript. There is no framework, no bundler and no package manager.

## Features

- Single scrolling page with About, Work and Contact sections that fade in as you scroll
- Interactive V-shaped dot field behind the content (dots push away from the cursor)
- Custom cursor ring, scroll progress bar, rotating role text and side-panel copy
- Work section rendered from a plain JavaScript array, sorted by App Store rating count
- [FolioBot](https://github.com/aakocval/foliobot) chat widget that answers questions about my work from `profile.json`

## Run locally

Serve the root directory with any static file server:

```bash
npx serve .
```

or

```bash
python3 -m http.server
```

`index.php` just includes `index.html`, so `index.html` is the real entry point.

## Project layout

```
index.html          Page markup, CSP and script tags
profile.json        Everything the chat bot knows
css/
  scss/             SCSS source (style.scss imports the partials)
  style.min.css     Compiled output (committed)
js/
  app.js            Project data, rendering and all UI behaviour
  chat-init.js      Loads profile.json and mounts the chat widget
images/             Logos and per-project screenshots
```

## Common tasks

### Edit styles

CSS is compiled from SCSS. After editing anything under `css/scss/`, recompile (requires [Dart Sass](https://sass-lang.com/install)):

```bash
sass css/scss/style.scss css/style.min.css --style compressed
```

### Add or update a project

1. Edit the `projects` array in `js/app.js`.
2. Add screenshots under `images/work/<ProjectName>/N.jpg`.
3. Update the matching entry in `profile.json`. It duplicates the project facts so the chat bot can answer about them.

### Upgrade the chat widget

The widget is loaded from jsDelivr, pinned to an exact foliobot commit with SRI hashes. To upgrade, change the commit SHA in both script URLs in `index.html` and in the `$schema` URL in `profile.json`, then regenerate each hash:

```bash
curl -s <script-url> | openssl dgst -sha384 -binary | openssl base64 -A
```

Prefix the result with `sha384-` in the `integrity` attribute.

## Security notes

- A Content-Security-Policy is set through a `<meta>` tag in `index.html` (GitHub Pages cannot send response headers). It allows only this site, jsDelivr scripts and Google Fonts. If the chat widget gets a backend, add that URL to `connect-src`.
- Project data is HTML-escaped before rendering, and project links must be `http(s)`.
- Third-party scripts are pinned and integrity-checked. No secrets belong in this repo.

## Deployment

Hosted on GitHub Pages from the `master` branch (root). Pushing to `master` redeploys the site.
