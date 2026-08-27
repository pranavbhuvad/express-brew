import { Phone, MessageCircle, Navigation } from "lucide-react";
import { site } from "../data/siteConfig";

export default function MobileCTABar() {
  return (
    <div
      data-testid="mobile-cta-bar"
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-cream/10 bg-espresso/95 backdrop-blur-md md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={site.phoneLink}
        data-testid="mobile-bar-call"
        className="flex items-center justify-center gap-2 py-4 text-[11px] font-bold uppercase tracking-[0.15em] text-cream transition-colors hover:text-caramel"
      >
        <Phone size={16} className="text-caramel" />
        Call
      </a>
      <a
        href={site.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="mobile-bar-whatsapp"
        className="flex items-center justify-center gap-2 border-x border-cream/10 py-4 text-[11px] font-bold uppercase tracking-[0.15em] text-cream transition-colors hover:text-caramel"
      >
        <MessageCircle size={16} className="text-caramel" />
        WhatsApp
      </a>
      <a
        href={site.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="mobile-bar-directions"
        className="flex items-center justify-center gap-2 bg-caramel py-4 text-[11px] font-bold uppercase tracking-[0.15em] text-espresso transition-colors hover:bg-honey"
      >
        <Navigation size={16} />
        Directions
      </a>
    </div>
  );
}
