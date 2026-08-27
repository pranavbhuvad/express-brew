import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, ArrowDown } from "lucide-react";
import { images, site } from "../data/siteConfig";

const lines = [
  <>Good Coffee.</>,
  <>Good Food.</>,
  <>Good <em className="italic font-light text-honey">Moments.</em></>,
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.muted = true;
      v.play().catch(() => {});
    }
  }, []);

  return (
    <section id="home" ref={ref} data-testid="hero" className="relative flex min-h-[100svh] items-end overflow-hidden bg-espresso">
      <motion.div style={{ y: imgY }} className="absolute inset-0" aria-hidden="true">
        {prefersReduced ? (
          <img src={images.hero.src} alt="" className="h-full w-full object-cover" />
        ) : (
          <motion.video
            ref={videoRef}
            data-testid="hero-video"
            poster={images.hero.src}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            initial={{ scale: 1.18 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
            className="h-full w-full object-cover"
            style={{ filter: "blur(1.5px) saturate(1.05)" }}
          >
            <source src="/videos/hero-cafe-loop.webm" type="video/webm" />
            <source src="/videos/hero-cafe-loop.mp4" type="video/mp4" />
          </motion.video>
        )}
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/45 to-espresso/25" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/60 via-transparent to-transparent" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 pb-28 pt-40 md:pb-32">
        <motion.p
          data-testid="hero-eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3 text-[11px] sm:text-xs font-bold uppercase tracking-[0.4em] text-honey"
        >
          <span className="h-px w-10 bg-honey/70" aria-hidden="true" />
          Express Brews • Pune
        </motion.p>

        <h1 data-testid="hero-headline" className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.06] text-cream">
          {lines.map((line, i) => (
            <span key={i} className="block overflow-hidden pb-1">
              <motion.span
                className="block"
                initial={{ y: "112%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.05, delay: 0.4 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          data-testid="hero-subtext"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.0 }}
          className="mt-6 max-w-xl text-sm sm:text-base leading-relaxed text-latte/85"
        >
          Your neighbourhood café on Satara Road, Pune — serving coffee, refreshing beverages and
          comforting food in a warm, welcoming space.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.15 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href={site.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-directions-btn"
            className="inline-flex items-center gap-2 bg-caramel px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-espresso transition-colors duration-300 hover:bg-honey"
          >
            <MapPin size={15} strokeWidth={2.5} />
            Get Directions
          </a>
          <Link
            to="/menu"
            data-testid="hero-menu-btn"
            className="inline-flex items-center gap-2 border border-cream/40 px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-cream transition-colors duration-300 hover:border-cream hover:bg-cream hover:text-espresso"
          >
            Explore the Menu
          </Link>
        </motion.div>

        <motion.div
          data-testid="hero-info-strip"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-14 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-cream/15 pt-5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-latte/70"
        >
          <span>Satara Road</span>
          <span className="text-caramel" aria-hidden="true">•</span>
          <span>Parvati Paytha</span>
          <span className="text-caramel" aria-hidden="true">•</span>
          <span>11 AM – 11 PM</span>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        data-testid="hero-scroll-indicator"
        aria-label="Scroll to learn more"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-7 right-7 z-10 hidden md:flex h-12 w-12 flex-col items-center justify-center gap-1.5 border border-cream/25 text-cream/70 transition-colors hover:border-caramel hover:text-caramel"
      >
        <span className="animate-scroll-dot block h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
        <ArrowDown size={16} />
      </motion.a>
    </section>
  );
}
