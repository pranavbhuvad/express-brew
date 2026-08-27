import { MapPin, Phone, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import { images, site } from "../data/siteConfig";

export default function CTASection() {
  return (
    <section data-testid="cta-section" className="grain relative overflow-hidden bg-espresso py-28 md:py-40">
      <img
        src={images.cta.src}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/80 via-espresso/60 to-espresso/85" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-honey">Satara Road · Pune</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.1] text-cream">
            Your Next Coffee Break <em className="italic text-honey">Starts Here.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-latte/75 md:text-lg">
            Drop by Express Brews on Satara Road, Pune for coffee, food and a relaxed café
            experience — every day, 11 AM to 11 PM.
          </p>
        </Reveal>
        <Reveal delay={0.26}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <a
              href={site.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="cta-directions-btn"
              className="inline-flex items-center gap-2 bg-caramel px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-espresso transition-colors duration-300 hover:bg-honey"
            >
              <MapPin size={15} strokeWidth={2.5} />
              Get Directions
            </a>
            <a
              href={site.phoneLink}
              data-testid="cta-call-btn"
              className="inline-flex items-center gap-2 border border-cream/40 px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-cream transition-colors duration-300 hover:bg-cream hover:text-espresso"
            >
              <Phone size={15} strokeWidth={2.5} />
              Call Express Brews
            </a>
            <a
              href={site.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="cta-whatsapp-btn"
              className="inline-flex items-center gap-2 border border-cream/40 px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-cream transition-colors duration-300 hover:bg-cream hover:text-espresso"
            >
              <MessageCircle size={15} strokeWidth={2.5} />
              WhatsApp Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
