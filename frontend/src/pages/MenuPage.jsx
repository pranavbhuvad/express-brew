import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Search, X, MapPin, Phone, MessageCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MobileCTABar from "../components/MobileCTABar";
import { menuCategoriesFull, menuItems, featuredLabel, menuJsonLd } from "../data/menuData";
import { images, site } from "../data/siteConfig";

const VegBadge = ({ large = false }) => (
  <span
    className={`inline-flex shrink-0 items-center gap-1.5 border border-green-700 px-1.5 py-0.5 ${large ? "text-xs" : "text-[10px]"} font-bold uppercase tracking-wider text-green-800`}
    title="Vegetarian"
  >
    <span className="h-1.5 w-1.5 rounded-full bg-green-700" aria-hidden="true" />
    Veg
  </span>
);

const priceText = (p) => `₹${p}`;

export default function MenuPage() {
  const [query, setQuery] = useState("");
  const [veg, setVeg] = useState("all");
  const [activeCat, setActiveCat] = useState("all");
  const [modalItem, setModalItem] = useState(null);

  useEffect(() => {
    document.title = "Express Brews Menu | Coffee, Food & Beverages in Pune";
    const meta = document.querySelector('meta[name="description"]');
    const prev = meta?.getAttribute("content");
    meta?.setAttribute(
      "content",
      "Explore the Express Brews menu in Pune featuring coffee, beverages, café food, pizza, burgers, sandwiches and more. Visit us on Satara Road, Parvati Paytha."
    );
    return () => {
      document.title = "Express Brews Pune | Cafe & Coffee Shop on Satara Road";
      if (meta && prev) meta.setAttribute("content", prev);
    };
  }, []);

  const q = query.trim().toLowerCase();
  const filtered = useMemo(
    () =>
      menuItems.filter((i) => {
        if (veg === "veg" && !i.vegetarian) return false;
        if (veg === "nonveg" && i.vegetarian) return false;
        if (q && !`${i.name} ${i.description} ${i.category}`.toLowerCase().includes(q)) return false;
        return true;
      }),
    [q, veg]
  );

  const visibleCats = menuCategoriesFull
    .filter((c) => c.id !== "all")
    .map((c) => ({ ...c, items: filtered.filter((i) => i.category === c.label) }))
    .filter((c) => c.items.length > 0);

  const featured = menuItems.filter((i) => i.tags.includes("featured"));

  useEffect(() => {
    const sections = visibleCats
      .map((c) => document.getElementById(`menu-cat-${c.id}`))
      .filter(Boolean);
    if (!sections.length) return undefined;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveCat(e.target.id.replace("menu-cat-", ""));
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [visibleCats.map((c) => c.id).join(",")]);

  useEffect(() => {
    if (!modalItem) return undefined;
    const onKey = (e) => e.key === "Escape" && setModalItem(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalItem]);

  const scrollToCat = (id) => {
    setActiveCat(id);
    if (id === "all") {
      document.getElementById("menu-list")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    document.getElementById(`menu-cat-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-cream font-body text-espresso" data-testid="menu-page">
      <script type="application/ld+json">{JSON.stringify(menuJsonLd)}</script>
      <Navbar />

      <main id="main">
        {/* HERO */}
        <section data-testid="menu-hero" className="relative flex min-h-[52vh] items-end overflow-hidden bg-espresso pt-28">
          <img
            src="/images/gallery-coffee-crew.jpg"
            alt="Cold coffees and café food on a table at Express Brews, Pune"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/60 to-espresso/40" aria-hidden="true" />
          <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-10 sm:px-8">
            <Link
              to="/"
              data-testid="menu-back-home"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-latte/70 transition-colors hover:text-caramel"
            >
              <ArrowLeft size={14} />
              Back to Home
            </Link>
            <p className="mt-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.4em] text-honey">
              <span className="h-px w-10 bg-honey/70" aria-hidden="true" />
              Express Brews • Pune
            </p>
            <h1 className="mt-4 font-display text-4xl font-light leading-[1.05] text-cream sm:text-5xl lg:text-6xl">
              Express Brews <em className="italic text-honey">Menu</em>
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-latte/85 sm:text-base">
              Fresh coffee, refreshing beverages and café favourites made for every kind of craving.
            </p>

            <div className="relative mt-8 max-w-xl">
              <Search size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-latte/60" aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search dishes or drinks..."
                aria-label="Search the menu"
                data-testid="menu-search-input"
                className="w-full border border-cream/25 bg-espresso/60 py-3.5 pl-11 pr-11 text-sm text-cream placeholder:text-latte/45 backdrop-blur-sm focus:border-caramel focus:outline-none"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  data-testid="menu-search-clear"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-latte/60 transition-colors hover:text-caramel"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>
        </section>

        {/* STICKY CATEGORY BAR */}
        <div data-testid="menu-category-bar" className="sticky top-16 z-30 border-b border-espresso/10 bg-cream/95 backdrop-blur-md md:top-20">
          <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-5 py-3 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {menuCategoriesFull.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => scrollToCat(c.id)}
                data-testid={`menu-cat-${c.id}`}
                aria-current={activeCat === c.id ? "true" : undefined}
                className={`shrink-0 whitespace-nowrap px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] transition-colors duration-300 ${
                  activeCat === c.id
                    ? "bg-espresso text-cream"
                    : "border border-espresso/20 text-espresso/70 hover:border-caramel hover:text-espresso"
                }`}
              >
                {c.label}
              </button>
            ))}
            <span className="mx-1 hidden h-6 w-px shrink-0 bg-espresso/15 sm:block" aria-hidden="true" />
            <div className="flex shrink-0 gap-1" role="group" aria-label="Dietary filter">
              {[
                { id: "all", label: "All" },
                { id: "veg", label: "Veg" },
                { id: "nonveg", label: "Non-Veg" },
              ].map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setVeg(f.id)}
                  data-testid={`menu-filter-${f.id}`}
                  aria-pressed={veg === f.id}
                  className={`whitespace-nowrap px-3 py-2 text-[11px] font-bold uppercase tracking-[0.15em] transition-colors duration-300 ${
                    veg === f.id
                      ? f.id === "veg"
                        ? "bg-green-800 text-cream"
                        : f.id === "nonveg"
                          ? "bg-red-900 text-cream"
                          : "bg-espresso text-cream"
                      : "text-espresso/60 hover:text-espresso"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FEATURED */}
        {!q && veg !== "nonveg" && (
          <section data-testid="menu-featured" className="mx-auto max-w-7xl px-5 pt-12 sm:px-8">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-mocha">
              <span className="h-px w-8 bg-mocha/50" aria-hidden="true" />
              {featuredLabel}
            </p>
            <div className="mt-6 flex gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {featured.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setModalItem(item)}
                  data-testid={`featured-${item.id}`}
                  className="group relative h-52 w-44 shrink-0 overflow-hidden bg-espresso text-left"
                >
                  {item.image ? (
                    <img src={item.image} alt={`${item.name} at Express Brews Pune`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  ) : (
                    <div className="grain h-full w-full bg-roast" aria-hidden="true" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/20 to-transparent" aria-hidden="true" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="font-display text-lg font-light leading-tight text-cream">{item.name}</p>
                    <p className="mt-1 font-display text-base text-honey">{priceText(item.price)}</p>
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* MENU LIST */}
        <div id="menu-list" className="mx-auto max-w-7xl scroll-mt-32 px-5 pb-8 pt-12 sm:px-8">
          {visibleCats.length === 0 && (
            <div className="py-20 text-center" data-testid="menu-empty-state">
              <p className="font-display text-2xl font-light text-espresso/70">
                No dishes found. Try another search.
              </p>
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  data-testid="menu-empty-clear"
                  className="mt-6 inline-flex items-center gap-2 border border-espresso/30 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-espresso transition-colors hover:bg-espresso hover:text-cream"
                >
                  <X size={14} />
                  Clear Search
                </button>
              )}
            </div>
          )}

          {visibleCats.map((cat) => (
            <section key={cat.id} id={`menu-cat-${cat.id}`} data-testid={`menu-section-${cat.id}`} className="scroll-mt-36 py-10 first:pt-4">
              <h2 className="flex items-baseline gap-4 font-display text-3xl font-light text-espresso sm:text-4xl">
                {cat.label}
                <span className="h-px flex-1 bg-espresso/15" aria-hidden="true" />
                <span className="text-sm font-body font-semibold uppercase tracking-[0.2em] text-espresso/40">
                  {cat.items.length} item{cat.items.length !== 1 ? "s" : ""}
                </span>
              </h2>

              <ul className="mt-8 grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-2">
                {cat.items.map((item) => (
                  <li key={item.id} data-testid={`menu-item-${item.id}`}>
                    {item.image ? (
                      <button
                        type="button"
                        onClick={() => setModalItem(item)}
                        className="group flex w-full items-center gap-5 text-left"
                        aria-label={`View ${item.name}`}
                      >
                        <span className="block h-24 w-24 shrink-0 overflow-hidden sm:h-28 sm:w-28">
                          <img
                            src={item.image}
                            alt={`${item.name} at Express Brews Pune`}
                            loading="lazy"
                            width="112"
                            height="112"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="flex items-baseline gap-3">
                            <span className="font-display text-xl font-light text-espresso group-hover:text-mocha transition-colors">{item.name}</span>
                            <span className="menu-leader" aria-hidden="true" />
                            <span className="font-display text-lg text-mocha">{priceText(item.price)}</span>
                          </span>
                          <span className="mt-1.5 flex items-center gap-3">
                            {item.vegetarian && <VegBadge />}
                            {item.description && <span className="truncate text-sm text-espresso/55">{item.description}</span>}
                          </span>
                        </span>
                      </button>
                    ) : (
                      <div>
                        <div className="flex items-baseline gap-3">
                          <h3 className="font-display text-xl font-light text-espresso">{item.name}</h3>
                          <span className="menu-leader" aria-hidden="true" />
                          <span className="font-display text-lg text-mocha">{priceText(item.price)}</span>
                        </div>
                        <div className="mt-1.5 flex items-center gap-3">
                          {item.vegetarian && <VegBadge />}
                          {item.description && <p className="text-sm text-espresso/55">{item.description}</p>}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              {cat.foot && (
                <p className="mt-8 border-t border-espresso/10 pt-4 text-[11px] font-semibold uppercase leading-relaxed tracking-[0.15em] text-mocha/80">
                  {cat.foot}
                </p>
              )}
            </section>
          ))}

          <p className="mt-6 text-xs leading-relaxed text-espresso/45">
            Prices from the official Express Brews menu board (introductory prices). The entire menu
            is vegetarian.
          </p>
        </div>

        {/* MENU FOOTER CTA */}
        <section data-testid="menu-cta" className="grain relative overflow-hidden bg-espresso py-20 md:py-28">
          <img src={images.cta.src} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-espresso/80 via-espresso/60 to-espresso/85" aria-hidden="true" />
          <div className="relative z-10 mx-auto max-w-2xl px-5 text-center sm:px-8">
            <h2 className="font-display text-3xl font-light text-cream sm:text-4xl">
              Can't <em className="italic text-honey">decide?</em>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-latte/75">
              Come by Express Brews and discover your favourite — Satara Road, Parvati Paytha, Pune.
              Open daily 11 AM – 11 PM.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
              <a href={site.googleMapsUrl} target="_blank" rel="noopener noreferrer" data-testid="menu-cta-directions" className="inline-flex items-center gap-2 bg-caramel px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-espresso transition-colors duration-300 hover:bg-honey">
                <MapPin size={15} strokeWidth={2.5} />
                Get Directions
              </a>
              <a href={site.phoneLink} data-testid="menu-cta-call" className="inline-flex items-center gap-2 border border-cream/40 px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-cream transition-colors duration-300 hover:bg-cream hover:text-espresso">
                <Phone size={15} strokeWidth={2.5} />
                Call Us
              </a>
              <a href={site.whatsappLink} target="_blank" rel="noopener noreferrer" data-testid="menu-cta-whatsapp" className="inline-flex items-center gap-2 border border-cream/40 px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-cream transition-colors duration-300 hover:bg-cream hover:text-espresso">
                <MessageCircle size={15} strokeWidth={2.5} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileCTABar />

      {/* ITEM MODAL */}
      <AnimatePresence>
        {modalItem && (
          <motion.div
            data-testid="menu-item-modal"
            role="dialog"
            aria-modal="true"
            aria-label={modalItem.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-espresso/90 p-4"
            onClick={() => setModalItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-lg bg-cream"
              onClick={(e) => e.stopPropagation()}
            >
              {modalItem.image && (
                <img src={modalItem.image} alt={`${modalItem.name} at Express Brews Pune`} className="aspect-[4/3] w-full object-cover" />
              )}
              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-light text-espresso">{modalItem.name}</h3>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-mocha">{modalItem.category}</p>
                  </div>
                  <p className="font-display text-2xl text-mocha">{priceText(modalItem.price)}</p>
                </div>
                {modalItem.description && <p className="mt-4 text-sm leading-relaxed text-espresso/65">{modalItem.description}</p>}
                <div className="mt-5 flex items-center justify-between">
                  {modalItem.vegetarian ? <VegBadge large /> : <span />}
                  <button
                    type="button"
                    onClick={() => setModalItem(null)}
                    data-testid="menu-item-modal-close"
                    className="inline-flex items-center gap-2 bg-espresso px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-cream transition-colors hover:bg-roast"
                  >
                    <X size={14} />
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
