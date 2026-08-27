import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, MapPin } from "lucide-react";
import { navLinks, site, images } from "../data/siteConfig";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const onMenu = location.pathname === "/menu";

  const go = (e, href) => {
    if (!href.startsWith("/")) return;
    e.preventDefault();
    setOpen(false);
    if (href.startsWith("/#") && location.pathname === "/") {
      document.querySelector(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(href);
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <>
      <header
        data-testid="navbar"
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled ? "bg-cream/90 backdrop-blur-md border-b border-espresso/10" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 h-16 md:h-20" aria-label="Main navigation">
          <a
            href="#home"
            data-testid="nav-logo"
            aria-label="Express Brews — back to top"
            className="flex items-center"
          >
            <img
              src={images.logo.src}
              alt={images.logo.alt}
              className="h-11 w-auto md:h-14 transition-transform duration-300 hover:scale-105"
            />
          </a>

          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => go(e, l.href)}
                  data-testid={`nav-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
                  className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-caramel ${
                    onMenu && l.href === "/menu" ? "text-caramel" : scrolled || onMenu ? "text-espresso/80" : "text-cream/85"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={site.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="nav-directions-btn"
              className="hidden sm:inline-flex items-center gap-2 bg-caramel px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-espresso transition-colors duration-300 hover:bg-honey"
            >
              <MapPin size={14} strokeWidth={2.5} />
              Get Directions
            </a>
            <button
              type="button"
              data-testid="nav-menu-toggle"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className={`lg:hidden p-2 transition-colors ${scrolled || open ? "text-espresso" : "text-cream"}`}
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-espresso flex flex-col justify-center px-8 lg:hidden"
          >
            <ul className="space-y-2">
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a
                    href={l.href}
                    data-testid={`mobile-nav-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
                    onClick={(e) => go(e, l.href)}
                    className={`block font-display text-4xl font-light py-2 transition-colors hover:text-caramel ${
                      onMenu && l.href === "/menu" ? "text-caramel" : "text-cream"
                    }`}
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.a
              href={site.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="mobile-nav-directions-btn"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="mt-10 inline-flex w-fit items-center gap-2 bg-caramel px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-espresso"
            >
              <MapPin size={14} strokeWidth={2.5} />
              Get Directions
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
