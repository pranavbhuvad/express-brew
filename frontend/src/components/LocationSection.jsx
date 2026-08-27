import { MapPin, Phone, MessageCircle, Clock, Navigation } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { site } from "../data/siteConfig";

export default function LocationSection() {
  return (
    <section id="visit" data-testid="location-section" className="bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          chapter="07"
          eyebrow="Visit Us"
          title={<>Come Say <em className="italic text-mocha">Hello.</em></>}
          text="Find us at Parvati Plaza on Satara Road — easy to reach, easier to stay."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="flex h-full flex-col border border-espresso/10 bg-latte/50 p-8 sm:p-10">
              <h3 className="font-display text-2xl font-light text-espresso">Express Brews</h3>
              <address className="mt-5 not-italic text-base leading-relaxed text-espresso/70">
                {site.address.line1},<br />
                {site.address.line2},<br />
                {site.address.line3},<br />
                {site.address.line4}
              </address>

              <div className="mt-7 space-y-4 text-sm">
                <p className="flex items-center gap-3 text-espresso/75">
                  <Clock size={16} className="shrink-0 text-caramel" aria-hidden="true" />
                  <span>
                    <span className="font-semibold text-espresso">{site.hoursDays}</span>
                    <br />
                    {site.hoursDisplay}
                  </span>
                </p>
                <p className="flex items-center gap-3 text-espresso/75">
                  <Phone size={16} className="shrink-0 text-caramel" aria-hidden="true" />
                  <a href={site.phoneLink} data-testid="location-phone-link" className="font-semibold text-espresso hover:text-mocha">
                    {site.phoneDisplay}
                  </a>
                </p>
                <p className="flex items-center gap-3 text-espresso/75">
                  <Wallet2 />
                  <span>{site.costForTwo}</span>
                </p>
              </div>

              <div className="mt-auto flex flex-col gap-3 pt-10 sm:flex-row sm:flex-wrap">
                <a
                  href={site.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="location-directions-btn"
                  className="inline-flex items-center justify-center gap-2 bg-espresso px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-cream transition-colors duration-300 hover:bg-roast"
                >
                  <Navigation size={14} strokeWidth={2.5} />
                  Get Directions
                </a>
                <a
                  href={site.phoneLink}
                  data-testid="location-call-btn"
                  className="inline-flex items-center justify-center gap-2 border border-espresso/30 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-espresso transition-colors duration-300 hover:bg-espresso hover:text-cream"
                >
                  <Phone size={14} strokeWidth={2.5} />
                  Call Now
                </a>
                <a
                  href={site.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="location-whatsapp-btn"
                  className="inline-flex items-center justify-center gap-2 border border-espresso/30 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-espresso transition-colors duration-300 hover:bg-espresso hover:text-cream"
                >
                  <MessageCircle size={14} strokeWidth={2.5} />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-7">
            <div className="relative h-full min-h-[380px] overflow-hidden border border-espresso/10">
              <iframe
                title="Map — Express Brews, Parvati Plaza, Satara Road, Pune"
                src={site.googleMapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                data-testid="location-map"
                className="absolute inset-0 h-full w-full grayscale-[35%] contrast-[1.05]"
              />
              <a
                href={site.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="map-open-btn"
                className="absolute bottom-4 left-4 inline-flex items-center gap-2 bg-cream/95 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-espresso shadow-md transition-colors hover:bg-cream"
              >
                <MapPin size={13} strokeWidth={2.5} />
                Open in Google Maps
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Wallet2() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C08A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0" aria-hidden="true">
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
    </svg>
  );
}
