# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A single-page personal portfolio website for Val Moratalla (iOS Developer). It is a static site with no build pipeline or package manager beyond a `composer.json` shell. The site is hosted on GitHub Pages at `https://aakocval.github.io/portfolio/`.

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

The SCSS is split into partials: `_variables.scss` (color tokens), `_base.scss` (main layout/component styles), `_media-query.scss` (responsive breakpoints), `_mixins.scss`, `_reset.scss`. `style.scss` just imports them all.

## Architecture

### UI Interaction Model

The page has three mutually exclusive "panels" that slide in/out via CSS transitions triggered by toggling classes:

- **Main wrapper** (`#main-wrapper`) — default landing view with the animated `.v` background and project list
- **Project detail** (`#project-cont`) — slides in from the right when a project is clicked
- **About** (`#about-me`) — slides in from the left when "about" is clicked

jQuery in `js/app.js` manages the panel transitions by toggling `.active`, `.hide`, `.projects`, and `.about` classes on the relevant elements.

### AngularJS Data Layer

`js/app.js` uses AngularJS 1.x for two controllers:

- **`ProjCtrl`** — holds the `projects` array (the source of truth for all project data), manages hover/active states, and handles "next project" navigation logic
- **`AboutCtrl`** — holds personal info and the social links array

**To add or update a project:** edit the `$scope.projects` array in `ProjCtrl` inside `js/app.js`. Each project object requires:
- `index`, `name`, `description`, `position`, `responsibilities`, `technology`, `link`, `delay`, `animName`, `misc` (the `misc` value maps to a CSS class name like `one`–`five` that controls background image and accent color)

A corresponding logo image must be added to `images/logos/<name>.png` and a background image to `images/<misc-value>.png`.

### Per-project Theming

Each project slot (`one` through `five`) has its own accent color defined in `css/scss/_variables.scss` (`$colorOne`–`$colorFive`). These colors are applied to:
- The `hr` divider in `#project-cont`
- The active project name in `#projects-list`
- The `.shade` overlay on the background image
