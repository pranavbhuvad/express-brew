import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { Link } from "react-router-dom";
import { menuCategoriesFull, menuItems } from "../data/menuData";

const menuTabs = menuCategoriesFull.filter((c) => c.id !== "all");

export default function MenuSection() {
  const [active, setActive] = useState(menuTabs[0].id);
  const activeTab = menuTabs.find((c) => c.id === active);
  const category = {
    ...activeTab,
    items: menuItems
      .filter((i) => i.category === activeTab.label)
      .map((i) => ({ name: i.name, price: i.price, note: i.description })),
  };

  return (
    <section id="menu" data-testid="menu-section" className="bg-espresso py-24 md:py-36 text-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          dark
          chapter="04"
          eyebrow="The Menu"
          title={<>Something for <em className="italic text-honey">Every Craving.</em></>}
          text="From ₹29 teas to loaded grilled sandwiches — the complete Express Brews menu, straight from the café board. Coffee, mojitos, thickshakes, fries, Maggi, pizzas, burgers and more."
        />

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-wrap gap-2" role="tablist" aria-label="Menu categories">
            {menuTabs.map((c) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={active === c.id}
                data-testid={`menu-tab-${c.id}`}
                onClick={() => setActive(c.id)}
                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] transition-colors duration-300 ${
                  active === c.id
                    ? "bg-caramel text-espresso"
                    : "border border-cream/20 text-latte/70 hover:border-caramel hover:text-cream"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="mt-10 grid grid-cols-1 gap-x-14 gap-y-7 md:grid-cols-2">
              {category.items.map((item) => (
                <li key={item.name} data-testid={`menu-item-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                  <div className="flex items-baseline">
                    <h3 className="font-display text-xl font-light text-cream">{item.name}</h3>
                    <span className="menu-leader border-cream/25" aria-hidden="true" />
                    <span className="font-display text-lg text-honey">₹{item.price}</span>
                  </div>
                  {item.note && <p className="mt-1 text-sm text-latte/55">{item.note}</p>}
                </li>
              ))}
            </ul>
            {category.foot && (
              <p className="mt-10 border-t border-cream/10 pt-5 text-[11px] font-semibold uppercase tracking-[0.15em] leading-relaxed text-honey/70">
                {category.foot}
              </p>
            )}
          </motion.div>
        </AnimatePresence>

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-cream/10 pt-8">
            <p className="max-w-xl text-xs leading-relaxed text-latte/50">
              Prices from the official Express Brews menu board (introductory prices). The menu
              lives in one central data file, so updates are quick whenever the café menu changes.
            </p>
            <Link
              to="/menu"
              data-testid="view-full-menu-btn"
              className="inline-flex items-center gap-2 bg-caramel px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-espresso transition-colors duration-300 hover:bg-honey"
            >
              View Full Menu
              <ArrowUpRight size={15} strokeWidth={2.5} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
