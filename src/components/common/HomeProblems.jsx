import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";

const scenarios = [
  {
    title: "0-to-1 MVP Development",
    problem: "Have an idea, but need a working product to show users or investors.",
    detail: "I scope, design, and build a complete functional MVP in 2 to 4 weeks so you can test real demand with real users and start generating traction.",
  },
  {
    title: "Figma to Production Code",
    problem: "Have designs, but need an engineer who implements them accurately.",
    detail: "I convert your Figma designs into clean, responsive, fast-loading React or Next.js code — without cutting corners on mobile layouts or performance.",
  },
  {
    title: "Custom Dashboards & Internal Systems",
    problem: "Managing business operations on spreadsheets, chats, and manual steps.",
    detail: "I build dedicated internal portals, booking tools, and customer dashboards that automate repetitive tracking and save hours each week.",
  },
  {
    title: "APIs, Databases & Payments",
    problem: "Need reliable backend services, database design, or payment integration.",
    detail: "I build secure REST APIs in Python or Node.js, design scalable PostgreSQL schemas, and integrate local and international payment gateways (Telebirr, CBE, Stripe).",
  },
  {
    title: "Practical AI & LLM Features",
    problem: "Want to add intelligent automation or assistant features to an app.",
    detail: "I integrate practical LLM capabilities — real-time streaming assistants, automated extraction, and document search — without research bloat.",
  },
];

export const HomeProblems = () => {
  return (
    <section className="py-16 sm:py-20 border-t border-neutral-800/80">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            What I help with.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-400">
            You don't need a detailed engineering spec. Explain the problem you're solving, and I handle the technical implementation from database to live deployment.
          </p>
        </div>

        {/* Clean Typographic Rows */}
        <div className="divide-y divide-neutral-800/70">
          {scenarios.map((item) => (
            <div key={item.title} className="py-6 first:pt-0 last:pb-0">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                <h3 className="text-lg font-semibold text-neutral-100">
                  {item.title}
                </h3>
                <span className="text-xs text-neutral-400">
                  {item.problem}
                </span>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed max-w-2xl">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Link to Contact */}
        <div className="mt-10 pt-6 border-t border-neutral-800/60 flex items-center justify-between text-sm">
          <span className="text-neutral-400">
            Have a project in mind?
          </span>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1 font-medium text-white hover:underline"
          >
            <span>Let's talk about your build</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
