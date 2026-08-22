import { motion } from "motion/react";
import { GlassCard } from "../effects/GlassCard";
import { Clock, Rocket, ShieldCheck, MessageSquareCode, GitPullRequest, Laptop } from "lucide-react";

const principles = [
  {
    icon: Rocket,
    title: "0-to-1 Product Ownership",
    tag: "SPEED & AGILITY",
    description:
      "I don't just write code—I ship products. From database schema design and auth flows to high-converting UI and deployment, I can take a raw concept to a production-ready application independently.",
  },
  {
    icon: Clock,
    title: "Global Remote & Timezone Overlap",
    tag: "UTC+3 / GLOBAL",
    description:
      "Located in Addis Ababa (UTC+3), offering full business-hour overlap with European teams (CET/GMT) and 4-5 hours of synchronous daily overlap with US East Coast teams (EST).",
  },
  {
    icon: ShieldCheck,
    title: "Clean Architecture & Security",
    tag: "RELIABILITY",
    description:
      "I write strictly typed, modular code with automated validation, PostgreSQL Row-Level Security (RLS), and RBAC access control. Systems are built to scale cleanly without technical debt.",
  },
  {
    icon: MessageSquareCode,
    title: "Proactive Communication",
    tag: "REMOTE-FIRST",
    description:
      "Thorough async documentation, concise PR descriptions, structured linear/issue tracking, and direct feedback. I value transparency, unblocking team members, and high alignment.",
  },
];

const faqs = [
  {
    q: "What roles are you open to?",
    a: "I am actively open to Full-time, Contract, and Founding Engineer roles across Full-Stack Web (Next.js/React, Python, Go, Node.js) and Mobile Development (Flutter).",
  },
  {
    q: "How do you handle remote collaboration?",
    a: "I work effectively in remote-first environments using GitHub, Slack/Discord, Linear/Jira, and Loom. I maintain proactive daily check-ins and responsive communication.",
  },
  {
    q: "Are you available for international / US / EU contracts?",
    a: "Yes. I am experienced with international remote contracts and can start immediately on full-time or contract engagements.",
  },
];

export const EngineeringPrinciples = () => {
  return (
    <section id="principles" className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center flex flex-col items-center"
        >
          <span className="text-xs tracking-[0.2em] text-muted-foreground font-mono font-medium">
            WORK ETHOS &amp; COLLABORATION
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground font-bricolage leading-[1.1]">
            How I build &amp; collaborate.
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-xl">
            The engineering principles and remote habits that make me a high-impact contributor to fast-paced teams.
          </p>
          <div className="mt-4 w-12 h-px bg-foreground/20" />
        </motion.div>

        {/* Principles 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mt-16 max-w-5xl mx-auto">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <GlassCard className="p-6 sm:p-7 h-full flex flex-col justify-between" intensity={4}>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl border border-border bg-card flex items-center justify-center text-foreground">
                      <p.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono tracking-wider text-muted-foreground border border-border/80 rounded-full px-2.5 py-0.5 bg-white/[0.02]">
                      {p.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-foreground tracking-tight mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Quick FAQ / Recruiter Highlights */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs tracking-[0.2em] text-muted-foreground font-mono font-medium">
              QUICK ANSWERS FOR RECRUITERS &amp; FOUNDERS
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <GlassCard key={idx} className="p-5" intensity={3}>
                <h4 className="text-sm font-semibold text-foreground tracking-tight mb-1.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/60" />
                  {faq.q}
                </h4>
                <p className="text-xs leading-relaxed text-muted-foreground pl-3.5">
                  {faq.a}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
