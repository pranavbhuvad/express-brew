import Reveal from "./Reveal";
import { experiences } from "../data/siteConfig";

export default function FoodExperience() {
  return (
    <section data-testid="food-experience" className="bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-mocha">
            <span className="font-display italic text-sm normal-case tracking-normal">03</span>
            <span className="h-px w-8 bg-mocha/50" aria-hidden="true" />
            The Experience
          </p>
        </Reveal>

        <div className="mt-16 space-y-20 md:space-y-28">
          {experiences.map((exp, i) => (
            <div
              key={exp.id}
              className={`grid grid-cols-1 items-center gap-8 md:grid-cols-12 ${i % 2 ? "" : ""}`}
              data-testid={`experience-${exp.id}`}
            >
              <Reveal className={`md:col-span-7 ${i % 2 ? "md:order-2" : ""}`}>
                <div className="group overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.alt}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </Reveal>
              <div className={`md:col-span-5 ${i % 2 ? "md:order-1 md:pr-6 md:text-right" : "md:pl-6"}`}>
                <Reveal delay={0.1}>
                  <span className="font-display text-5xl font-light italic text-caramel/50" aria-hidden="true">
                    {exp.id}
                  </span>
                  <h3 className="mt-3 font-display text-3xl sm:text-4xl font-light uppercase tracking-wide text-espresso">
                    {exp.title}
                  </h3>
                  <p className={`mt-4 max-w-sm text-base leading-relaxed text-espresso/65 ${i % 2 ? "md:ml-auto" : ""}`}>
                    {exp.text}
                  </p>
                  <span className={`mt-6 block h-px w-16 bg-caramel ${i % 2 ? "md:ml-auto" : ""}`} aria-hidden="true" />
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
