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
    category: "DevOps & Tooling",
    items: "Docker · Git · GitHub Actions · CI/CD · Vercel · Render · Linux",
  },
];

export const TechStack = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold font-bricolage text-foreground">
        Core Technologies
      </h3>

      <div className="border-t border-border divide-y divide-border">
        {groups.map((g) => (
          <div
            key={g.category}
            className="py-3.5 sm:py-4 grid grid-cols-1 sm:grid-cols-12 gap-1.5 sm:gap-4 items-baseline"
          >
            <span className="sm:col-span-4 text-xs sm:text-sm font-semibold text-foreground font-bricolage">
              {g.category}
            </span>
            <span className="sm:col-span-8 text-muted-foreground font-mono text-xs">
              {g.items}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
