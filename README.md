# Finca Verde

A clean, responsive website for a family-owned, licensed cannabis producer microbusiness in Taos, New Mexico.

Live site: [fincaverdetaos.com](https://fincaverdetaos.com)

---

## What it is

A single-page marketing site that introduces the farm, tells the story behind it, showcases their cannabis strains, covers legal compliance, and gives customers a way to get in touch. It includes an age gate on entry, as required for cannabis businesses.

---

## Tech stack

No frameworks, no build tools, no dependencies. Just the basics — written from scratch.

- **HTML** — structure and content
- **CSS** — custom styling, fully responsive for mobile and desktop
- **JavaScript** — age gate logic, mobile nav menu
- **Netlify** — hosting and continuous deployment (auto-deploys on every push to `main`)

---

## Project structure

```
FincaVerde/
├── index.html        # The entire site — single page
├── styles.css        # All styling
├── script.js         # Age gate and nav behavior
├── robots.txt        # Tells search engines how to crawl the site
├── sitemap.xml       # Helps Google index the site faster
└── assets/
    ├── images/       # Strain and farm photos
    ├── logo/         # Finca Verde logo
    └── heroImage/    # Hero and contact section backgrounds
```

---

## Deployment

The site is connected to this GitHub repo via Netlify. Any push to the `main` branch automatically triggers a new deploy — no manual steps needed. Build time is about 6 seconds.

---

## SEO setup

- Meta description and canonical URL
- Open Graph and Twitter Card tags for social sharing previews
- JSON-LD structured data so Google understands this is a local business in Taos, NM
- `robots.txt` and `sitemap.xml` submitted to Google Search Console
- Google Business Profile set up separately for local map search

---

## Making updates

Since there's no build step, editing the site is straightforward:

1. Edit `index.html`, `styles.css`, or `script.js` directly
2. Commit and push to `main`
3. Netlify picks up the change and redeploys automatically

---

## Client

Built for Finca Verde LLC — a licensed cannabis producer microbusiness operating under the New Mexico Cannabis Regulation Act.
