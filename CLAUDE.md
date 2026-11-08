# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A single-page personal portfolio website for Val Moratalla (Software Engineer). It is a static site with no build pipeline or package manager beyond a `composer.json` shell. The site is hosted on GitHub Pages at `https://aakocval.github.io/portfolio/`.

## Development

There is no build system. To preview locally, serve the root directory with any static file server:

```bash
npx serve .
# or
python3 -m http.server
```

`index.php` simply includes `index.html`, so `index.html` is the real entry point.

### Styles

CSS is authored in SCSS under `css/scss/`. The compiled output is `css/style.min.css`. After editing SCSS, recompile with:

```bash
sass css/scss/style.scss css/style.min.css --style compressed
```

The SCSS is split into partials: `_variables.scss` (color tokens), `_base.scss` (main layout/component styles), `_media-query.scss` (responsive breakpoints), `_mixins.scss`, `_reset.scss`, `_external.scss` (not currently imported by `style.scss`). `style.scss` imports the rest.

## Architecture

### UI Interaction Model

The page is a single vertically-scrolling document, not a set of sliding panels. Plain (no-framework) JavaScript in `js/app.js` drives everything:

- **`#site-topbar`** — fixed top bar with the logo and nav links (`#hero-nav`) to About/Work/Contact. `initNavHighlight()` highlights the link for whichever `.section` is in view; `initTopbarAutoHide()` hides the bar on downward scroll on narrow viewports; `initLogoScrollRotate()` spins the logo based on scroll progress toward the Work section.
- **`.site-panel`** — fixed side panel (dark, right-hand rail) showing rotating one-line copy (`panelCopy` in `js/app.js`, keyed by section id) that changes as each section scrolls into view, plus a copyright line that only shows while the Contact section is visible (`initCopyrightVisibility()`).
- **`main#main`** — the actual content: `.section` elements (`#about`, `#work`, `#contact`) each fade in via a `.reveal`/`.is-visible` class pair toggled by an `IntersectionObserver` in `initReveal()`. There is no separate hero header — `#about` is the first section and doubles as the landing view (name and rotating role), so it's what's visible on load with no scrolling needed.
- **`#scroll-progress`** — a top progress bar tracking overall page scroll (`initScrollProgress()`).
- **Dot field** — `canvas.dot-field` (fixed, behind all content in the light area; `body` is transparent so it shows through) draws a V-shaped dot grid via `initDotField()`; dots are pushed away from the cursor and spring back. The V's size, position, stroke `thick`ness and dot `RADIUS` are constants in that function, and the dot color is the canvas's `data-dot-color`. Static when `prefers-reduced-motion` is set.
- **Cursor ring** — `initCursorRing()` hides the native cursor on fine-pointer devices and shows a transparent ring with a white border (`mix-blend-mode: difference`, so it inverts over white areas); it grows over links and buttons.
- **Rotating role text** — `#about` shows "Val Moratalla" / "`<span class="hero-role">` who ships products people actually use.". Any element with class `.hero-role` is kept in sync by `initHeroRoleRotation()`, which cycles through the `heroRoles` array in `js/app.js` every 6s. The first entry of `heroRoles` is the role shown on load, so keep the initial text of `#hero-role` in `index.html` identical to it.

### Chat Widget (FolioBot)

The chat widget is **not in this repo**: it is the separate open-source project [aakocval/foliobot](https://github.com/aakocval/foliobot) (Shadow DOM widget mounted as `#foliobot`, fixed, z-index 200 so the cursor ring at 9999 stays on top). `index.html` loads `widget/foliobot.js` and `widget/profile-engine.js` from jsDelivr, **pinned to an exact commit SHA with `integrity` hashes**, so foliobot changes can never alter this site until the pin is bumped deliberately. To upgrade: push to foliobot, take the new commit SHA, change it in both script URLs and in the `$schema` URL in `profile.json`, and regenerate each hash with `openssl dgst -sha384 -binary <file> | openssl base64 -A` (prefix `sha384-`). Verify the CDN serves the file first (`curl` the URL and `cmp` against the local file).

Everything the bot knows lives in `profile.json` (repo root; shape defined by foliobot's `schema/profile.schema.json`). `js/chat-init.js` fetches it and mounts the widget; if the CDN or the profile fails to load, the chat silently doesn't appear. **`profile.json` duplicates the project facts in `js/app.js`'s `projects` array** (it was generated from it); when you add or change a project, update both. The widget reads `--fb-cursor` so it follows the custom-cursor rule in `_base.scss`; `initCursorRing()` uses `composedPath()` so the ring still grows over widget buttons. Currently scripted (no AI, no network); the owner is building a Python backend in the foliobot repo as a learning project, so don't implement the AI steps unasked.

### Project Data

There is no Angular/jQuery layer. `js/app.js` defines a plain `projects` array at module scope — the source of truth for all project data — and `renderProjects()` renders it into `#projects-list` on `DOMContentLoaded`.

**To add or update a project:** edit the `projects` array in `js/app.js`. Each project object has:
- `name`, `description`, `link` (optional — omit to render a non-link card), `screenshots` (array of image paths, rendered as a lazy-loaded gallery), `landscape` (optional bool for landscape-cropped screenshots), `misc` (maps to a CSS class `one`–`six` controlling the card's accent color). `responsibilities`, `technology` and `icon` may also appear on older entries as notes, but `renderProjects()` does not read them, so they are optional and never displayed. Optional `rating: { score, count }` and `downloads` render as pill badges on the card; `wide: true` makes the card span the full row in a 2:1 landscape format (used for websites, with a desktop screenshot).

Cards are sorted at render time by rating count (score as tiebreaker), with unrated projects last in array order — so the array order only matters among unrated entries (apps first, then `wide` website cards).

Screenshots live under `images/work/<ProjectName>/N.jpg`; a logo (when set) goes under `images/logos/<name>.png`.

Note: `initProjectColorShuffle()` randomly reassigns each project card's `one`–`five` (not `six`) color class every time the Work section scrolls into view — the `misc` value in the data is only the initial/fallback color, not a fixed per-project color.

### Per-project Theming

Accent colors are defined in `css/scss/_variables.scss` as `$colorOne`–`$colorSix` (`six` is reserved for the mWell brand blue and is not part of the shuffle pool). These colors are applied via the project card's `one`–`six` class to accents like the card name and shade overlay.
