const groups = [
  {
    category: "Frontend",
    items: "React · Next.js · TypeScript · Tailwind CSS · HTML5 / CSS3",
  },
  {
    category: "Backend & APIs",
    items: "Python · FastAPI · Flask · Node.js · Express · RESTful APIs",
  },
  {
    category: "Databases & Storage",
    items: "PostgreSQL · Supabase · Redis · Row-Level Security (RLS)",
  },
  {
    category: "DevOps & Cloud",
    items: "Docker · Git · GitHub Actions · CI/CD · Vercel · Render · AWS",
  },
  {
    category: "AI & Integrations",
    items: "Gemini API · OpenAI API · Prompt Engineering · Telebirr & Stripe APIs",
  },
];

export const TechStack = () => {
  return (
    <section className="py-16 sm:py-20 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-xl mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground font-bricolage">
            Core Technologies.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            The tools and frameworks I use to build reliable, maintainable software.
          </p>
        </div>

        {/* Typographic List */}
        <div className="border-t border-border divide-y divide-border">
          {groups.map((g) => (
            <div key={g.category} className="py-4 sm:py-5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline">
              <span className="sm:col-span-4 text-sm font-semibold text-foreground font-bricolage">
                {g.category}
              </span>
              <span className="sm:col-span-8 text-muted-foreground font-mono text-xs sm:text-sm">
                {g.items}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
