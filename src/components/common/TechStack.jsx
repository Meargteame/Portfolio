const groups = [
  {
    category: "Languages",
    items: "TypeScript · JavaScript · Python · Go · C · SQL",
  },
  {
    category: "Frontend",
    items: "React · Next.js (App Router) · Tailwind CSS · HTML5 / CSS3",
  },
  {
    category: "Backend & APIs",
    items: "FastAPI · Python · Node.js · Express · RESTful APIs",
  },
  {
    category: "Databases & Storage",
    items: "PostgreSQL · Supabase · Redis · Row-Level Security (RLS)",
  },
  {
    category: "DevOps & Tooling",
    items: "Docker · Git · GitHub Actions · CI/CD · Vercel · Render · Linux",
  },
];

export const TechStack = () => {
  return (
    <section id="stack" className="scroll-mt-8 space-y-6">
      {/* Section Header */}
      <div className="space-y-1.5">
        <span className="text-xs font-mono tracking-widest text-muted-foreground uppercase font-semibold">
          04 // Tech Stack
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground font-bricolage">
          Core Technologies.
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Languages, frameworks, databases, and infrastructure tools I use to build and deploy software.
        </p>
      </div>

      <div className="border-t border-border divide-y divide-border">
        {groups.map((g) => (
          <div
            key={g.category}
            className="py-4 grid grid-cols-1 sm:grid-cols-12 gap-1.5 sm:gap-4 items-baseline"
          >
            <span className="sm:col-span-4 text-xs sm:text-sm font-semibold text-foreground font-bricolage">
              {g.category}
            </span>
            <span className="sm:col-span-8 text-muted-foreground font-mono text-xs leading-relaxed">
              {g.items}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
