import { MapPin } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { images } from "../data/siteConfig";

const facts = [
  { k: "Open 7 Days", v: "11 AM – 11 PM" },
  { k: "Approx. for Two", v: "₹500" },
  { k: "Setting", v: "Indoor Seating" },
];

export default function Intro() {
  return (
    <section id="about" data-testid="intro" className="relative overflow-hidden bg-cream py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6 lg:pr-8">
          <SectionHeading
            chapter="01"
            eyebrow="Our Story"
            title={<>Your Everyday Café, <em className="italic text-mocha">Done Better.</em></>}
          />
          <Reveal delay={0.22}>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-espresso/70 md:text-lg">
              <p>
                On Satara Road in Parvati Paytha, Express Brews is the kind of café a neighbourhood
                grows around — a warm, welcoming space where the coffee is taken seriously and the
                pace is entirely up to you.
              </p>
              <p>
                Come in for a quick coffee break between errands, settle into comfortable indoor
                seating for lunch or dinner, or bring friends for sandwiches, pizza, burgers and
                long conversations that outlast the cups. Good coffee, good food, and room to
                breathe — that's the whole idea.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-mocha">
              <MapPin size={14} className="text-caramel" />
              Parvati Paytha • Satara Road • Pune
            </p>
          </Reveal>
          <Reveal delay={0.36}>
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-espresso/10 pt-8">
              {facts.map((f) => (
                <div key={f.k}>
                  <dt className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-espresso/50">{f.k}</dt>
                  <dd className="mt-2 font-display text-lg sm:text-2xl font-light text-espresso">{f.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal delay={0.15} className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full border border-caramel/50" aria-hidden="true" />
            <div className="grain relative overflow-hidden">
              <img
                src={images.about.src}
                alt={images.about.alt}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover sm:aspect-[5/5]"
              />
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.25em] text-espresso/45">
              The room where Satara Road slows down
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
