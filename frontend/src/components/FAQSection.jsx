import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { faqs } from "../data/siteConfig";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section data-testid="faq-section" className="bg-cream pb-24 md:pb-36">
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          center
          chapter="08"
          eyebrow="Good to Know"
          title={<>Questions, <em className="italic text-mocha">Answered.</em></>}
        />

        <div className="mt-14 border-t border-espresso/15">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 0.04}>
                <div className="border-b border-espresso/15">
                  <button
                    type="button"
                    data-testid={`faq-question-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className={`font-display text-lg sm:text-xl font-light transition-colors ${isOpen ? "text-mocha" : "text-espresso"}`}>
                      {f.q}
                    </span>
                    <Plus
                      size={20}
                      className={`shrink-0 text-caramel transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${i}`}
                        data-testid={`faq-answer-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-7 text-base leading-relaxed text-espresso/65">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
