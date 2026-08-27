import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { galleryImages } from "../data/siteConfig";

export default function Gallery() {
  const [active, setActive] = useState(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir) => setActive((a) => (a === null ? null : (a + dir + galleryImages.length) % galleryImages.length)),
    []
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close, step]);

  return (
    <section id="gallery" data-testid="gallery" className="bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          chapter="05"
          eyebrow="The Space"
          title={<>Step <em className="italic text-mocha">Inside.</em></>}
          text="Corners for conversations, counters for quick cups — a look around the café."
        />

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {galleryImages.map((img, i) => (
            <Reveal key={img.src + i} delay={(i % 3) * 0.08} className="mb-5 break-inside-avoid">
              <button
                type="button"
                data-testid={`gallery-item-${i}`}
                onClick={() => setActive(i)}
                aria-label={`Open photo: ${img.caption}`}
                className="group relative block w-full overflow-hidden"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${img.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}
                />
                <span className="absolute inset-0 bg-espresso/0 transition-colors duration-500 group-hover:bg-espresso/30" aria-hidden="true" />
                <span className="absolute bottom-4 left-4 font-display text-lg italic text-cream opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {img.caption}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            data-testid="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Photo lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-espresso/95 p-4"
            onClick={close}
          >
            <button
              type="button"
              data-testid="lightbox-close"
              aria-label="Close lightbox"
              onClick={close}
              className="absolute right-5 top-5 p-2 text-cream/80 transition-colors hover:text-caramel"
            >
              <X size={28} />
            </button>
            <button
              type="button"
              data-testid="lightbox-prev"
              aria-label="Previous photo"
              onClick={(e) => { e.stopPropagation(); step(-1); }}
              className="absolute left-3 sm:left-6 p-2 text-cream/80 transition-colors hover:text-caramel"
            >
              <ChevronLeft size={36} />
            </button>
            <motion.figure
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[active].src}
                alt={galleryImages[active].alt}
                className="max-h-[80vh] w-auto max-w-full object-contain"
              />
              <figcaption className="mt-3 text-center font-display text-lg italic text-latte/80">
                {galleryImages[active].caption}
              </figcaption>
            </motion.figure>
            <button
              type="button"
              data-testid="lightbox-next"
              aria-label="Next photo"
              onClick={(e) => { e.stopPropagation(); step(1); }}
              className="absolute right-3 sm:right-6 p-2 text-cream/80 transition-colors hover:text-caramel"
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
