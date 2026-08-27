import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { signatureItems } from "../data/siteConfig";

const spans = [
  "md:col-span-7 aspect-[16/10]",
  "md:col-span-5 aspect-[16/10] md:aspect-auto",
  "md:col-span-5 aspect-[16/10] md:aspect-auto",
  "md:col-span-7 aspect-[16/10]",
  "md:col-span-4 aspect-[4/3]",
  "md:col-span-4 aspect-[4/3]",
  "md:col-span-4 aspect-[4/3]",
];

export default function SignaturePicks() {
  return (
    <section id="specials" data-testid="signature-picks" className="bg-latte/60 py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            chapter="02"
            eyebrow="Guest Favourites"
            title={<>Things Worth <em className="italic text-mocha">Trying.</em></>}
            text="The dishes and drinks guests keep mentioning in public reviews — not a ranking, just a very good place to start."
          />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-12">
          {signatureItems.map((item, i) => (
            <Reveal key={item.id} delay={(i % 3) * 0.08} className={`group relative overflow-hidden bg-espresso ${spans[i]}`}>
              <div className="relative h-full w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${item.pos === "top" ? "object-top" : item.pos === "bottom" ? "object-bottom" : "object-center"}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/25 to-transparent" aria-hidden="true" />
                <span className="absolute left-5 top-5 font-display text-3xl font-light italic text-cream/80" aria-hidden="true">
                  {item.id}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-honey">{item.category}</p>
                  <h3 data-testid={`signature-item-${item.id}`} className="mt-1.5 font-display text-xl sm:text-2xl font-light text-cream">
                    {item.name}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-latte/75 opacity-0 transition-opacity duration-500 group-hover:opacity-100 max-h-0 group-hover:max-h-24 overflow-hidden">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
