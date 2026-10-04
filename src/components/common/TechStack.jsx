import { techs } from "../../data/techStack";

const findTech = (name) =>
  techs.find((t) => t.name.toLowerCase() === name.toLowerCase()) || {
    name,
    icon: null,
  };

const categories = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Golang"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Vue.js"],
  },
  {
    category: "Backend & APIs",
    items: ["FastAPI", "Node.js", "Express", "Python", "Django", "GraphQL"],
  },
  {
    category: "Databases & Storage",
    items: ["PostgreSQL", "Supabase", "Redis", "MongoDB", "MySQL", "Prisma"],
  },
  {
    category: "DevOps & Tooling",
    items: ["Docker", "Git", "WebSockets"],
  },
  {
    category: "AI & Integrations",
    items: ["Google Gemini", "OpenAI", "LangChain"],
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

      {/* Categorized Tech Grid with Real SVG Icons */}
      <div className="rounded-2xl border border-border bg-card/60 p-5 sm:p-7 divide-y divide-border/60 space-y-6 shadow-xs">
        {categories.map((cat, i) => (
          <div
            key={cat.category}
            className={`grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-start ${
              i > 0 ? "pt-6" : ""
            }`}
          >
            <div className="sm:col-span-4">
              <h3 className="text-sm font-bold font-bricolage text-foreground">
                {cat.category}
              </h3>
            </div>

            <div className="sm:col-span-8 flex flex-wrap gap-2">
              {cat.items.map((name) => {
                const tech = findTech(name);
                return (
                  <div
                    key={name}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-background text-xs font-mono text-foreground hover:border-foreground/50 transition-all shadow-2xs group"
                  >
                    {tech.icon && (
                      <span className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110 flex items-center justify-center text-foreground">
                        {tech.icon}
                      </span>
                    )}
                    <span className="font-medium text-[11px] sm:text-xs tracking-tight">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
