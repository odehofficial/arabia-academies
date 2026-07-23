# CLAUDE.md

Static, self-hosted marketing site for Arabia Academies, deployed via GitHub
Pages (see `CNAME` + `.nojekyll`). No build step — plain HTML, CSS, and vanilla
JS served as-is.

## Repository map

| Path | Purpose |
|------|---------|
| `index.html` | Homepage (all sections) |
| `ar/index.html` | Arabic entry point — sets `aa-lang=ar`, redirects to `/` |
| `privacy.html`, `terms.html` | Bilingual, own lang toggle, linked only from footer |
| `dash/` | Owner analytics dashboard (password-gated, `noindex`, unlinked) |
| `css/style.css` | Single stylesheet (self-hosted `@font-face` block prepended) |
| `js/data.js` | ALL content + I18N dictionary + `COUNTRIES` data |
| `js/main.js` | Homepage behaviour, Meta Pixel loader |
| `js/track.js` | Umami analytics — on every page |
| `js/chrome.js` | Shared header/footer injector — on every page except homepage |
| `js/vendor/` | d3-geo UMD (local, no CDN) |
| `assets/` | Fonts, logos, testimonials, avatars, titles, og, mentor, data |
| `tools/globe/` | Tool 1 — Planet E-commerce |
| `tools/camera/` | Tool 2 — Camera Movement AI Prompts |
| `tools/colors/` | Tool 3 — Movie Color Palettes |
| `CNAME`, `.nojekyll` | Pages config |

## Conventions

- **No build/bundler.** Edit files directly; there is nothing to compile.
- **Content lives in `js/data.js`** — copy, the I18N dictionary, and
  `COUNTRIES` data are all centralized there rather than hardcoded in markup.
- **Every page loads `js/track.js`** (Umami). Every page except the homepage
  also loads `js/chrome.js`, which injects the shared header and footer.
- **No CDNs.** Fonts are self-hosted via an `@font-face` block prepended to
  `css/style.css`; vendor libraries (d3-geo) live in `js/vendor/`.
- **Language:** `ar/index.html` sets `aa-lang=ar` then redirects to `/`; the
  homepage and tools switch language client-side. `privacy.html` and
  `terms.html` carry their own independent language toggle.
