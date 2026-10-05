# Patrizia Märki Pilates — website

Bilingual (Spanish primary, English secondary) Hugo site using the PaperMod theme, for Patrizia Märki's Pilates teaching in Puerto Escondido, Oaxaca, Mexico. Deployed to GitHub Pages by `.github/workflows/hugo.yml` on every push to `main`.

## Who you're working with

Patrizia, the site owner, makes all her changes by asking Claude in the Claude desktop app on her Mac (Code section). She is a beginner, doesn't edit files herself, and has no one else to help her, so you are her support for GitHub and setup questions too.

- Reply in the language she writes in (often Spanish; she also speaks English, Italian, German and French).
- Keep it short, friendly and jargon-free. Give one step at a time when she has to do something herself.
- Before publishing, summarise what changed in everyday terms (e.g. "I changed the single private session price to $900 MXN on the Spanish and English Clases pages").
- Offer a preview (`hugo server`, then open it in her browser) for anything visual. If Hugo isn't installed, install it without admin rights: download `hugo_extended_<version>_darwin-universal.pkg` (same version as `HUGO_VERSION` in `.github/workflows/hugo.yml`) from github.com/gohugoio/hugo/releases, unpack it with `pkgutil --expand-full`, and copy the `hugo` binary into `~/.local/bin`.
- Publish only when she says so: commit with a clear message and push to `main`. Then confirm the GitHub Actions deploy succeeded (`gh run list` / `gh run watch`) and tell her when it's live: https://david-williston.github.io/patrizia-pilates/
- If she asks to undo something, use `git revert` (never rewrite history or force-push).
- Never ask her for passwords or tokens. For GitHub sign-in, use the browser flow (e.g. `gh auth login --web`) and guide her through it.

## Rules for edits

- **Always update both languages.** Spanish pages are in `content/es/`, English in `content/en/`. Translations are linked by `translationKey` in front matter, so it must match across languages and should never be changed.
  | Page | Spanish | English |
  |---|---|---|
  | Method | `metodo.md` | `method.md` |
  | Classes & prices | `clases.md` | `classes.md` |
  | Studio | `estudio.md` | `studio.md` |
  | About | `sobre-mi.md` | `about.md` |
  | Contact | `contacto.md` | `contact.md` |
  | Photo credits | `creditos.md` | `credits.md` |
- **Homepage hero** text, button and menus are in `hugo.toml` under `[languages.es...]` / `[languages.en...]`.
- **Contact details** (email, WhatsApp, Instagram, location) are in `hugo.toml` `[params]` and rendered by `layouts/_shortcodes/contact.html`.
- **Links:** the site is served under the subpath `/patrizia-pilates/`. Never hard-code root-relative URLs like `/contacto/` in templates. In Markdown, link to page paths (`[text](/contacto)`); the embedded link render hook resolves them. In templates, use `site.GetPage` + `.RelPermalink`, or `relLangURL` without a leading slash.
- **Prices** are in MXN, in Markdown tables on the Clases/Classes pages.
- `<!-- TODO: ... -->` comments mark information Patrizia still needs to provide. When she asks what's missing, list these.

## Photos

- Page photos are in `assets/images/` and set through front-matter `cover.image` (e.g. `images/clases.jpg`). The homepage hero is `assets/images/hero.jpg`. Hugo creates the responsive sizes automatically.
- She'll usually save photos in `~/Downloads` or `~/Desktop` and tell you the file name.
- Resize photos to max 2000px wide, save them under the matching name, and write alt text in both languages.
- The current photos are temporary Wikimedia Commons images. Their attributions are in `data/photo_credits.json` (rendered by the `photo-credits` shortcode). When one is replaced with her own photo, remove its entry; once all are replaced, offer to remove the credits pages and the footer link (`copyright` in `hugo.toml`).

## Design

- All custom styling and animations are in `assets/css/extended/theme.css`, with palette tokens at the top (ocean blues, jacaranda purple, bougainvillea magenta, sand). Animations respect `prefers-reduced-motion`.
- The homepage hero and cards are in `layouts/_partials/home_info.html`. Scroll reveal is in `assets/js/reveal.js`.
- Don't edit `themes/PaperMod/` (git submodule); override via `layouts/` instead.

## Commands

- Preview: `hugo server` (if port 1313 is busy, use `--port 1314`)
- Production-like build check: `hugo --gc --minify --baseURL "https://david-williston.github.io/patrizia-pilates/"`
- Fresh clone needs the theme: `git submodule update --init`

## Hidden guide

`content/en/guide.md` is Patrizia's beginner guide (unlisted, noindex). If you change how she works with the site, update the guide too.
