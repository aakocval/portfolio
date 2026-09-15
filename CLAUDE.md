# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A single-page personal portfolio website for Val Moratalla (Software Developer). It is a static site with no build pipeline or package manager beyond a `composer.json` shell. The site is hosted on GitHub Pages at `https://aakocval.github.io/portfolio/`.

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

- **`#site-topbar`** — fixed top bar with the logo and nav links (`#hero-nav`) to About/Work/Skills/Contact. `initNavHighlight()` highlights the link for whichever `.section` is in view; `initTopbarAutoHide()` hides the bar on downward scroll on narrow viewports; `initLogoScrollRotate()` spins the logo based on scroll progress toward the Work section.
- **`.site-panel`** — fixed side panel (dark, right-hand rail) showing rotating one-line copy (`panelCopy` in `js/app.js`, keyed by section id) that changes as each section scrolls into view, plus a copyright line that only shows while the Contact section is visible (`initCopyrightVisibility()`).
- **`main#main`** — the actual content: `.section` elements (`#about`, `#work`, `#skills`, `#contact`) each fade in via a `.reveal`/`.is-visible` class pair toggled by an `IntersectionObserver` in `initReveal()`. There is no separate hero header — `#about` is the first section and doubles as the landing view (name, rotating role, and stats), so it's what's visible on load with no scrolling needed.
- **`#scroll-progress`** — a top progress bar tracking overall page scroll (`initScrollProgress()`).
- **Rotating role text** — `#about` shows "Michael Val Moratalla" / "a `<span class="hero-role">`" / a static bio line / the stats row. Any element with class `.hero-role` is kept in sync by `initHeroRoleRotation()`, which cycles through the `heroRoles` array in `js/app.js` every 4s.

### Project Data

There is no Angular/jQuery layer. `js/app.js` defines a plain `projects` array at module scope — the source of truth for all project data — and `renderProjects()` renders it into `#projects-list` on `DOMContentLoaded`.

**To add or update a project:** edit the `projects` array in `js/app.js`. Each project object has:
- `name`, `description`, `responsibilities`, `technology`, `link` (optional — omit to render a non-link card), `icon` (optional logo path), `screenshots` (array of image paths, rendered as a lazy-loaded gallery), `landscape` (optional bool for landscape-cropped screenshots), `misc` (maps to a CSS class `one`–`six` controlling the card's accent color).

Screenshots live under `images/work/<ProjectName>/N.jpg`; a logo (when set) goes under `images/logos/<name>.png`.

Note: `initProjectColorShuffle()` randomly reassigns each project card's `one`–`five` (not `six`) color class every time the Work section scrolls into view — the `misc` value in the data is only the initial/fallback color, not a fixed per-project color.

### Per-project Theming

Accent colors are defined in `css/scss/_variables.scss` as `$colorOne`–`$colorSix` (`six` is reserved for the mWell brand blue and is not part of the shuffle pool). These colors are applied via the project card's `one`–`six` class to accents like the card name and shade overlay.

### Skills Section

Skills are static markup in `index.html` (`#skills`), grouped into `.skill-group` blocks of pill-shaped `<li>` tags. A skill can optionally start with a `<span class="skill-icon">` wrapping an inline brand SVG (see existing Swift/React/Firebase/GitHub/Figma entries) for recognizable logos; most skills are plain text pills.
