# Kesoniti LLC — website

Static marketing site for Kesoniti LLC, built with [Astro](https://astro.build).
Six pages × three languages (EN / TR / ES) = 19 static HTML files, zero client-side
JavaScript except a mobile menu toggle and the root language redirect.

## Commands

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # static output into dist/
npm run preview  # serve the built dist/ locally
```

## Project structure

```
src/
  i18n/
    en.ts            All English copy. The reference language — its shape is the
                     TypeScript contract the other two are checked against.
    tr.ts            Turkish copy.
    es.ts            Spanish copy.
    index.ts         Language list + content lookup helper.
  layouts/
    Base.astro       <head>, meta tags, hreflang, header + footer wrapper.
  components/
    Header.astro     Sticky nav, mobile menu, language switcher.
    Footer.astro     Footer columns.
    FlowDiagram.astro  Inline SVG production-flow schematic (home hero).
  pages/
    index.astro           Root: redirects to the visitor's language.
    [lang]/index.astro    Home
    [lang]/about.astro
    [lang]/services.astro
    [lang]/methodology.astro
    [lang]/industries.astro
    [lang]/contact.astro
  styles/global.css  Design tokens and shared component styles.
public/              favicon.svg, robots.txt — copied verbatim to dist/.
```

### Editing content

All visible text lives in `src/i18n/{en,tr,es}.ts`. Nothing in the page templates
needs to change to update copy. Because `tr.ts` and `es.ts` are typed as `Content`
(the shape of `en.ts`), adding a field to English and forgetting to translate it
is a build error rather than a silent gap.

### Placeholders

Anything not yet supplied is written in `[BRACKETS]` and rendered with a hatched
orange outline (the `.placeholder` style in `global.css`) so unfinished content is
impossible to miss in review. Search the repo for `[` inside the i18n files to find
them all. Remove the `placeholder` class handling once real values are in — the
`isPlaceholder()` helpers in the templates drop the styling automatically as soon
as a value no longer starts with `[`.

## Deployment

The build produces plain static files in `dist/` — deploy anywhere:

- **Netlify / Vercel / Cloudflare Pages**: build command `npm run build`, publish
  directory `dist`.
- **Traditional hosting** (the current kesoniti.com setup): upload the contents of
  `dist/` to the web root.

Set the real domain in `astro.config.mjs` (`site`) if it ever changes — it drives
canonical URLs, hreflang tags and the sitemap.

### Note on the local build environment

The project sits in a OneDrive-synced folder, where OneDrive locks
`node_modules/.vite` and breaks Vite's cache. `astro.config.mjs` therefore points
Vite's `cacheDir` at the system temp directory. If the project is ever moved out of
OneDrive, that override can be deleted.

## Before launch — required

1. **Contact form backend.** `src/pages/[lang]/contact.astro` has `action="#"`.
   Point it at Formspree, Netlify Forms, or a mail endpoint, and delete the
   `configNote` placeholder line from all three i18n files.
2. **Company details.** Address, contact email and LinkedIn URL (in the `footer`
   and `contact.info` sections of each i18n file).
3. **Founder bio.** `about.leadership` — name and biography.
4. **Credibility numbers.** `home.credibility` — years of experience and number of
   S/4HANA programs. If any figure cannot be stated accurately, delete that item
   from the array rather than approximating it.
5. **Logo.** `public/favicon.svg` is a geometric placeholder mark. Replace with the
   real logo, and add an Open Graph image (`public/og.png`, 1200×630) referenced
   from `Base.astro`.
