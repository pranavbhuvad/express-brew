# Express Brews — Café Website

Premium marketing website for **Express Brews**, a café in Parvati Paytha, Satara Road, Pune.

- Home page: `/` — hero video, story, guest favourites, menu teaser, gallery, reviews, location, FAQ
- Full menu: `/menu` — searchable, filterable first-party digital menu
- All business info: `frontend/src/data/siteConfig.js`
- All menu items & prices: `frontend/src/data/menuData.js`

## Project Structure

```
/app
├── frontend/          # React 19 + Tailwind + framer-motion + lenis (craco build)
│   ├── public/        # images/, videos/, index.html (SEO meta + JSON-LD), robots.txt, sitemap.xml
│   └── src/
│       ├── data/      # siteConfig.js (business info) · menuData.js (official menu)
│       ├── pages/     # HomePage.jsx · MenuPage.jsx
│       └── components/
├── backend/           # FastAPI stub (NOT required — the site is fully static)
├── tests/
└── README.md
```

## Run Locally (Windows / Mac / Linux)

Prerequisite: Node.js 18+ from https://nodejs.org

```bash
cd frontend
yarn install        # or: npm install
yarn start          # or: npm start
```

Opens at http://localhost:3000 — the menu is at http://localhost:3000/menu

Production build (static files in `frontend/build/`):

```bash
cd frontend && yarn build
```

## Notes

- The site is 100% static — no backend or database is needed to run it. The `backend/` folder is an optional FastAPI stub.
- This project was built with **yarn** (`yarn.lock` included, no `package-lock.json`). npm works too, but yarn is recommended for identical dependency versions.
- Copy `.env.example` to `.env` if you need environment variables; the site runs fine without any.
- When deploying to static hosting (Netlify/Vercel/Hostinger), add an SPA rewrite rule (`/* → /index.html`) so the `/menu` route loads directly.
- `index.html` contains Emergent platform analytics scripts — safe to keep or remove for production.
- Photography in `public/images` is authentic Express Brews material provided by the owner.

## Updating Content

| What | Where |
|---|---|
| Address, phone, hours, links, socials | `frontend/src/data/siteConfig.js` |
| Menu items, prices, veg flags, tags | `frontend/src/data/menuData.js` |
| Photos | `frontend/public/images/` (update path in siteConfig/menuData) |
| SEO meta, schema | `frontend/public/index.html` |

© Express Brews. All rights reserved.
