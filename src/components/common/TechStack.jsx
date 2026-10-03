const groups = [
  {
    category: "Frontend",
    items: "React · Next.js · TypeScript · Tailwind CSS · Motion",
  },
  {
    category: "Backend & APIs",
    items: "Python · FastAPI · Flask · Node.js · Express · RESTful APIs",
  },
  {
    category: "Databases & Storage",
    items: "PostgreSQL · Supabase · Redis · Row-Level Security",
  },
  {
    category: "DevOps & Cloud",
    items: "Docker · Git · CI/CD Pipelines · Vercel · AWS",
  },
  {
    category: "AI & Automation",
    items: "Gemini API · OpenAI API · Structured JSON Outputs · LLM Prompt Pipelines",
  },
];

export const TechStack = () => {
  return (
    <section className="py-20 sm:py-24 border-t border-border/60">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold font-bricolage text-foreground tracking-tight">
            Tools &amp; technologies.
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            The technology is the mechanism; the business outcome is what you buy. Here are the core tools I build and deploy with every day.
          </p>
        </div>

        {/* Quiet, Clean Typographic Rows with Hairline Dividers (Zero Card Boxes) */}
        <div className="border-t border-border/60 divide-y divide-border/60">
          {groups.map((g) => (
            <div key={g.category} className="py-5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline">
              <span className="sm:col-span-4 text-xs sm:text-sm font-semibold text-foreground">
                {g.category}
              </span>
              <span className="sm:col-span-8 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {g.items}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
