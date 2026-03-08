# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website (GitHub Pages) using plain HTML + Tailwind CSS, served via Jekyll.

## Development Commands

**Compile Tailwind CSS (with watch):**
```sh
npx @tailwindcss/cli -i ./src/input.css -o ./dist/output.css --watch
```

**Serve locally with Jekyll:**
```sh
jekyll serve
```

Both processes typically run concurrently during development — Tailwind watches for class changes and recompiles `dist/output.css`, while Jekyll serves the static site.

## Architecture

- `index.html` — Main single-page portfolio, links to `dist/output.css` for styles
- `src/input.css` — Tailwind v4 entry point (`@import "tailwindcss"` + `@theme {}` config + `@font-face`)
- `dist/output.css` — Compiled Tailwind output (generated, do not edit manually)
- `image/` — Static assets (background image `tearmatt.jpg` — Kimi no Na wa comet scene)
- `fonts/` — Custom fonts (`A-OTF Futo Min A101 Pro Bold.otf`, `KozMinPro-Bold.otf`)
- `_config.yml` — Jekyll config; applies a default layout and excludes build/config files from the Jekyll build

## Key Notes

- **Tailwind CSS v4** — config is CSS-based inside `src/input.css` via `@theme {}`. No `tailwind.config.js`.
- Plugins declared in CSS: `@plugin "@tailwindcss/typography"` and `@plugin "@tailwindcss/forms"`.
- `line-clamp` and `aspect-ratio` are built into Tailwind v4 core — no separate plugins needed.
- Fonts referenced with standard `url('/fonts/...')` — no Rails/Jekyll `font-url()` helper.
- `dist/output.css` is committed to the repo (required for GitHub Pages to serve styles without a CI build step).
