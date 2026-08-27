import { Quote, ArrowUpRight, Armchair, Bike, Wallet } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { reviews, site } from "../data/siteConfig";

const pillars = [
  { icon: Armchair, label: "Indoor Seating" },
  { icon: Bike, label: "Home Delivery" },
  { icon: Wallet, label: "Digital Payments" },
];

export default function Reviews() {
  return (
    <section id="reviews" data-testid="reviews" className="bg-latte/60 py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-16 flex flex-col items-center gap-6 border border-espresso/10 bg-cream px-6 py-10 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-mocha">Loved by Café Guests</p>
              <p className="mt-2 font-display text-2xl font-light text-espresso">
                A neighbourhood favourite on <em className="italic text-mocha">Satara Road.</em>
              </p>
            </div>
            <ul className="flex flex-wrap justify-center gap-3">
              {pillars.map((p) => (
                <li
                  key={p.label}
                  className="inline-flex items-center gap-2 border border-espresso/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-espresso/70"
                >
                  <p.icon size={14} className="text-caramel" />
                  {p.label}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <SectionHeading
          chapter="06"
          eyebrow="Reviews"
          title={<>Word Around the <em className="italic text-mocha">Café.</em></>}
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={(i % 3) * 0.08}>
              <figure
                data-testid={`review-card-${i}`}
                className="flex h-full flex-col border border-espresso/10 bg-cream p-7 transition-colors duration-300 hover:border-caramel/50"
              >
                <Quote size={22} className="text-caramel" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 font-display text-lg font-light leading-relaxed text-espresso">
                  "{r.text}"
                </blockquote>
                <figcaption className="mt-5 text-[11px] font-bold uppercase tracking-[0.25em] text-espresso/50">
                  Guest Review · {r.tag}
                </figcaption>
              </figure>
            </Reveal>
          ))}
          <Reveal delay={0.16}>
            <a
              href={site.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="see-more-reviews-btn"
              className="group flex h-full min-h-[180px] flex-col items-start justify-between bg-espresso p-7 transition-colors duration-300 hover:bg-roast"
            >
              <span className="font-display text-2xl font-light leading-snug text-cream">
                Read what guests say on <em className="italic text-honey">Google</em>
              </span>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-caramel transition-colors group-hover:text-honey">
                See More Reviews
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 text-xs leading-relaxed text-espresso/45">
            Excerpts reflect recurring themes from public guest reviews of Express Brews. Ratings
            and review counts are shown only from a single verified source once configured.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
