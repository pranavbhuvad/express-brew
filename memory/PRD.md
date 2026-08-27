# PRD — Express Brews Marketing Website

## Original Problem Statement
Build a premium, modern, STATIC marketing website for **Express Brews**, a café in Parvati Paytha, Satara Road, Pune. Inspired by the storytelling/quality of cafedejavu.in (inspiration only — fully original identity). Conversions: Get Directions, Call, WhatsApp, View Menu, Reviews. Verified business info only; everything unverifiable must be configurable in a central data file. Strong local SEO + technical SEO + LocalBusiness JSON-LD, responsive, accessible, performant, no unnecessary backend.

## Verified Business Data (source of truth: src/data/siteConfig.js)
- Name: Express Brews · Café / Coffee Shop / Casual Dining
- Address: Shop No. 1, Parvati Plaza, Taware Colony, Parvati Paytha, Satara Road, Pune, Maharashtra 411009
- Phone: +91 98228 60644 · Hours: Mon–Sun 11:00 AM – 11:00 PM · ~₹500 for two
- Categories: Coffee, Beverages, Cafe, Continental, Pizza, Burger, Sandwich
- Services: Indoor seating, Lunch, Dinner, Home delivery, Digital payments
- Google listing exists (map embed resolves it and shows Google's own rating card)

## User Choices (2026-08-27)
1. Imagery: curated premium stock photos as clearly-marked replaceable placeholders, centralized in config
2. Tech: React JS (kept template stack)
3. Menu: full menu grid with placeholder prices marked configurable (‡ footnote)
4. Ratings: social-proof strip WITHOUT numbers; rating/reviewCount kept as configurable nulls

## Architecture
- Static React SPA (react-scripts/craco), Tailwind + custom CSS vars, framer-motion (reveals, hero parallax, masked line-reveal), lenis (momentum smooth scroll with anchors)
- Central data: `/app/frontend/src/data/siteConfig.js` (business info, images, menu, reviews, FAQs, links, configurable fields)
- Components: Navbar, Hero, Marquee, Intro, SignaturePicks, FoodExperience, MenuSection, Gallery (lightbox), Reviews, LocationSection (Maps embed), FAQSection (FAQ JSON-LD), CTASection, Footer, MobileCTABar, Reveal, SectionHeading
- SEO: /app/frontend/public/index.html (title, meta, canonical, OG/Twitter, CafeOrCoffeeShop JSON-LD — verified fields only), robots.txt, sitemap.xml, favicon.svg
- Images: /app/frontend/public/images/*.jpg (21 local placeholder photos, Unsplash-sourced)
- Backend untouched (static site per brief)

## Implemented (2026-08-27)
- Full single-page site: hero (masked line reveal + parallax), slow marquee, editorial story, numbered Guest Favourites mosaic, food experience rows, tabbed menu grid (placeholder prices, marked), masonry gallery + lightbox, review-theme cards (no fabricated ratings), social proof strip (no numbers), location + Google Maps embed, FAQ accordion, final CTA, footer with consistent NAP, sticky mobile Call/WhatsApp/Directions bar
- Technical SEO: single H1, semantic HTML, JSON-LD (CafeOrCoffeeShop + FAQPage), canonical/OG/Twitter, robots.txt, sitemap.xml, alt texts, lazy loading, reduced-motion support
- Verified: desktop + mobile (390px) screenshots, no horizontal overflow, tel/WhatsApp/Maps hrefs, menu tabs, lightbox, FAQ, mobile nav overlay; zero console errors
- 2026-08-27: Official menu board transcribed (9 categories, ~90 items, real prices, add-ons); placeholder menu removed
- 2026-08-27: Authentic Express Brews hexagon logo integrated (black background removed → transparent PNG) in navbar, footer and favicon
- 2026-08-27: All stock placeholders replaced with 22 authentic owner-provided photos (hero = real interior, real dishes in Guest Favourites, real gallery); Kulfi Falooda/Irish Macchiato picks swapped for items with real photos (Fresh Mojitos, Café Latte, Pizza); images optimized (progressive JPEG q82) with SEO filenames
- 2026-08-27: Hero background is now a muted looping video (es19 clip — Maggi bowl with street bokeh), encoded to MP4 (H.264) + WebM (VP9) at /public/videos/hero-cafe-loop.*, with poster fallback and reduced-motion static image
- 2026-08-27: Dedicated /menu route (react-router): compact hero w/ search, sticky horizontal category bar w/ scroll-spy, VEG/NON-VEG filters, Guest Favourites strip, item lightbox modal, "Can't decide?" CTA, per-page title/meta, Menu JSON-LD, sitemap updated; menu data single-sourced in src/data/menuData.js (structured id/category/name/description/price/image/vegetarian/tags); 11 real dish photos re-encoded as WebP in /public/images/menu/; all View Menu CTAs (hero, homepage teaser, nav, footer) now route to /menu; Google Maps links updated to verified place URL (@18.4883004,73.8541145) + geo + hasMenu added to JSON-LD

## Backlog (prioritized)
- P0: Replace placeholder photography with authentic Express Brews photos (drop files into /public/images or update siteConfig paths)
- P0: Set production domain → update siteUrl, canonical, OG URLs, robots.txt, sitemap.xml
- P1: ~~Replace placeholder menu~~ DONE 2026-08-27 — official menu board transcribed into siteConfig.js (9 categories, ~90 items, flavours/add-ons noted)
- P1: Add verified Google rating/review count to social-proof strip (config fields ready)
- P1: Add verified Instagram/social links + exact Google Business Profile URL
- P2: Add verified geo coordinates to JSON-LD; image WebP/AVIF variants + responsive srcset; Lighthouse audit pass
- P2: Static-hosting export (yarn build → deploy to Netlify/Vercel/Hostinger)

## Next Tasks
1. Swap in real photos when the owner provides them (menu board photos already received)
2. Point canonical/sitemap/schema to production domain at launch
3. Fill rating/reviewCount/socials once verified

## Test Credentials
None — no auth on this site (see /app/memory/test_credentials.md).
