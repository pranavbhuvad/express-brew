import { MapPin, Phone, MessageCircle, Instagram, Facebook, ArrowUpRight } from "lucide-react";
import { navLinks, site, images } from "../data/siteConfig";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer data-testid="footer" className="bg-espresso pb-24 pt-16 text-cream md:pb-10 md:pt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 border-b border-cream/10 pb-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <img src={images.logo.src} alt={images.logo.alt} className="h-16 w-auto" />
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.3em] text-caramel">{site.tagline}</p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-latte/60">
              Express Brews is a café in Parvati Paytha, Satara Road, Pune serving coffee, beverages
              and café food in a welcoming indoor setting.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-latte/50">Visit</h3>
            <address className="mt-5 text-sm not-italic leading-relaxed text-latte/75">
              {site.address.line1},<br />
              {site.address.line2},<br />
              {site.address.line3},<br />
              {site.address.line4}
            </address>
            <p className="mt-4 text-sm text-latte/75">
              {site.hoursDays}
              <br />
              {site.hoursDisplay}
            </p>
            <a href={site.phoneLink} data-testid="footer-phone-link" className="mt-3 block text-sm font-semibold text-cream hover:text-caramel">
              {site.phoneDisplay}
            </a>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-latte/50">Explore</h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} data-testid={`footer-link-${l.label.toLowerCase().replace(/\s/g, "-")}`} className="text-sm text-latte/75 transition-colors hover:text-caramel">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-latte/50">Connect</h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a href={site.googleMapsUrl} target="_blank" rel="noopener noreferrer" data-testid="footer-maps-link" className="inline-flex items-center gap-2 text-sm text-latte/75 transition-colors hover:text-caramel">
                  <MapPin size={14} className="text-caramel" /> Google Maps
                  <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a href={site.phoneLink} data-testid="footer-call-link" className="inline-flex items-center gap-2 text-sm text-latte/75 transition-colors hover:text-caramel">
                  <Phone size={14} className="text-caramel" /> Call Us
                </a>
              </li>
              <li>
                <a href={site.whatsappLink} target="_blank" rel="noopener noreferrer" data-testid="footer-whatsapp-link" className="inline-flex items-center gap-2 text-sm text-latte/75 transition-colors hover:text-caramel">
                  <MessageCircle size={14} className="text-caramel" /> WhatsApp
                  <ArrowUpRight size={12} />
                </a>
              </li>
              {site.socialLinks.instagram && (
                <li>
                  <a href={site.socialLinks.instagram} target="_blank" rel="noopener noreferrer" data-testid="footer-instagram-link" className="inline-flex items-center gap-2 text-sm text-latte/75 transition-colors hover:text-caramel">
                    <Instagram size={14} className="text-caramel" /> Instagram
                    <ArrowUpRight size={12} />
                  </a>
                </li>
              )}
              {site.socialLinks.facebook && (
                <li>
                  <a href={site.socialLinks.facebook} target="_blank" rel="noopener noreferrer" data-testid="footer-facebook-link" className="inline-flex items-center gap-2 text-sm text-latte/75 transition-colors hover:text-caramel">
                    <Facebook size={14} className="text-caramel" /> Facebook
                    <ArrowUpRight size={12} />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-8 text-xs text-latte/45 sm:flex-row">
          <p data-testid="footer-copyright">© {year} Express Brews. All rights reserved.</p>
          <p>Café &amp; Coffee Shop · Satara Road · Pune</p>
        </div>
      </div>
    </footer>
  );
}
