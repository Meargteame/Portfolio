import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How does pricing work?",
    a: "I work primarily on milestone-based fixed project pricing for clearly scoped builds (websites, MVPs, integrations), so you know the exact cost before work begins. For ongoing engineering partnerships or evolving products, we can also agree on sprint-based weekly rates. No hidden fees or surprise invoices.",
  },
  {
    q: "How long does a typical build take?",
    a: "A focused 0-to-1 MVP or custom web application typically ships in 2 to 4 weeks. Standard business websites and landing page builds usually take 1 to 2 weeks. Before starting, we lock in milestones and delivery dates so you always know what to expect.",
  },
  {
    q: "Who owns the code and intellectual property?",
    a: "You do — 100%. Upon completion and milestone settlement, the full GitHub repository, database schemas, hosting accounts, and documentation are transferred completely to you. I retain no claim on your IP.",
  },
  {
    q: "Do I need a finished design or technical specification first?",
    a: "Not necessarily. If you already have Figma designs, I will implement them cleanly. If you only have a rough concept, notes, or an existing manual process, we will scope the requirements together during the discovery phase before writing any code.",
  },
  {
    q: "What happens after launch?",
    a: "Every build includes post-launch warranty and bug-fix support to ensure your application runs smoothly in production with real users. If you need ongoing maintenance, new features, or server monitoring, we can set up an ongoing support arrangement.",
  },
];

export const HomeFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 sm:py-28 border-t border-border/60">
      <div className="max-w-[840px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-bricolage text-foreground tracking-tight">
            Frequently asked questions.
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Clear, candid answers to common questions about working together.
          </p>
        </div>

        {/* Clean Hairline Accordion (No Heavy Rounded Cards) */}
        <div className="border-t border-border/60 divide-y divide-border/60">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.q} className="py-5">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between text-left gap-4 cursor-pointer group"
                >
                  <span className="text-base sm:text-lg font-bold font-bricolage text-foreground group-hover:text-foreground/80 transition-colors">
                    {faq.q}
                  </span>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors shrink-0">
                    {isOpen ? <Minus className="w-4 h-4 stroke-[2]" /> : <Plus className="w-4 h-4 stroke-[2]" />}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 text-sm leading-relaxed text-muted-foreground max-w-2xl">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
