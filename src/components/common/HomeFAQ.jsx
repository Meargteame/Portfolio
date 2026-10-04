import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How does project pricing work?",
    a: "I work primarily on milestone-based fixed pricing for clearly scoped builds (websites, MVPs, integrations), so you know the exact cost before work begins. For ongoing engineering partnerships, we can also agree on sprint-based weekly rates. No hidden fees or surprise invoices.",
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
    a: "Every build includes 30 days of post-launch warranty and bug-fix support to ensure your application runs smoothly in production with real users. If you need ongoing maintenance, new features, or server monitoring, we can set up a continuing support arrangement.",
  },
];

export const HomeFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-20 border-t border-border">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-10 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground font-bricolage">
            Frequently Asked Questions.
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Clear, straightforward answers about how we work together.
          </p>
        </div>

        {/* Clean Hairline Accordion */}
        <div className="border-t border-border divide-y divide-border">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.q} className="py-4 sm:py-5">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between text-left gap-4 cursor-pointer"
                >
                  <span className="text-base font-semibold text-foreground font-bricolage hover:opacity-80 transition-opacity">
                    {faq.q}
                  </span>
                  <span className="text-muted-foreground shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed pr-6">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
