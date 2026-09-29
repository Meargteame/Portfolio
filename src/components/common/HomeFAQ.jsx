import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How long does it take to build the web app?",
    a: "Most 0-to-1 production web MVPs are built and shipped in 2 to 4 weeks. Before starting, we lock in scope, wireframes, and architecture milestones so you have a crystal-clear delivery timeline with zero surprises.",
  },
  {
    q: "Can you start right away?",
    a: "Yes. I intentionally take on only 1 or 2 builds simultaneously under Leons Lab to give each project complete engineering dedication. After our 15-minute discovery call, we can kick off within 48 to 72 hours.",
  },
  {
    q: "Will I own 100% of the code and intellectual property?",
    a: "Absolutely. You retain full ownership of the GitHub codebase, database schemas, API credentials, and all assets. Upon milestone completion, everything is transferred directly to your organization.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. Every build includes 30 days of post-launch warranty and bug fixes at zero extra cost. For teams seeking continuous feature development and maintenance, I also offer ongoing monthly retainer agreements.",
  },
  {
    q: "What tech stack do you recommend?",
    a: "For fast, scalable web products, I typically build with Next.js or React on the frontend, Tailwind CSS for styling, and FastAPI, Node.js, or Go for high-concurrency backends, paired with PostgreSQL/Supabase and Stripe/Telebirr for payments.",
  },
];

export const HomeFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 sm:py-32 border-t border-border/60">
      <div className="max-w-[840px] mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-18"
        >
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground font-bricolage">
            Still got questions?
          </h2>
        </motion.div>

        {/* Accordion Pills */}
        <div className="space-y-3.5">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            const faqId = `faq-answer-${i}`;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-foreground/30 bg-card/90 shadow-md"
                    : "border-border/70 bg-card/40 hover:bg-card/70"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={faqId}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="w-5 h-5 flex items-center justify-center text-rose-500 font-bold flex-shrink-0">
                      {isOpen ? <Minus className="w-4 h-4 stroke-[2.5]" /> : <Plus className="w-4 h-4 stroke-[2.5]" />}
                    </span>
                    <span className="text-base sm:text-lg font-medium text-foreground">
                      {faq.q}
                    </span>
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={faqId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base leading-relaxed text-muted-foreground border-t border-border/40 pl-12">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
