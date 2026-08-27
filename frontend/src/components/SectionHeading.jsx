import Reveal from "./Reveal";

export default function SectionHeading({ chapter, eyebrow, title, text, dark = false, center = false }) {
  const tone = dark ? "text-cream" : "text-espresso";
  const subTone = dark ? "text-latte/70" : "text-espresso/65";
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`} data-testid="section-heading">
      <Reveal>
        <p className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] ${dark ? "text-caramel" : "text-mocha"} ${center ? "justify-center" : ""}`}>
          {chapter && <span className="font-display italic text-sm normal-case tracking-normal">{chapter}</span>}
          <span className={`h-px w-8 ${dark ? "bg-caramel/60" : "bg-mocha/50"}`} aria-hidden="true" />
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className={`mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.08] ${tone}`}>{title}</h2>
      </Reveal>
      {text && (
        <Reveal delay={0.18}>
          <p className={`mt-5 text-base md:text-lg leading-relaxed ${subTone}`}>{text}</p>
        </Reveal>
      )}
    </div>
  );
}
