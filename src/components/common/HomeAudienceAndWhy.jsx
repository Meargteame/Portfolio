export const HomeAudienceAndWhy = () => {
  return (
    <section className="py-16 sm:py-20 border-t border-neutral-800/80">
      <div className="max-w-5xl mx-auto px-6">

        {/* 2-Column Clean Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Column 1: Who I work with */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Who I work with.
              </h2>
              <p className="mt-2 text-sm text-neutral-400">
                I partner with founders, businesses, and designers who value speed and direct communication.
              </p>
            </div>

            <div className="space-y-5 divide-y divide-neutral-800/70">
              <div className="pt-5 first:pt-0 space-y-1">
                <h3 className="text-base font-semibold text-white">
                  Startup Founders
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  You have an idea and need an MVP built in 2–4 weeks so you can test market demand with real users instead of spending months in theoretical planning.
                </p>
              </div>

              <div className="pt-5 space-y-1">
                <h3 className="text-base font-semibold text-white">
                  Growing Businesses
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  You need a website, customer portal, internal dashboard, booking system, or automation to replace messy spreadsheets and manual follow-ups.
                </p>
              </div>

              <div className="pt-5 space-y-1">
                <h3 className="text-base font-semibold text-white">
                  Agencies &amp; Designers
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  You have designs in Figma and need a dependable developer who implements them faithfully into responsive, performant React and Next.js code.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Why work with an independent developer */}
          <div className="lg:col-span-6 space-y-6 lg:border-l lg:border-neutral-800/80 lg:pl-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Why work with an independent engineer?
              </h2>
              <p className="mt-2 text-sm text-neutral-400">
                Working directly with the developer eliminates agency bloat, sales handoffs, and long communication delays.
              </p>
            </div>

            <div className="space-y-5 divide-y divide-neutral-800/70">
              <div className="pt-5 first:pt-0 space-y-1">
                <h3 className="text-base font-semibold text-white">
                  Direct Communication
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  You talk directly with the engineer writing your code via Slack, Telegram, or Google Meet. No project managers translating your requirements.
                </p>
              </div>

              <div className="pt-5 space-y-1">
                <h3 className="text-base font-semibold text-white">
                  Fast Turnaround
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Without corporate meetings or layered approval chains, MVPs and core web applications ship in 2 to 4 weeks.
                </p>
              </div>

              <div className="pt-5 space-y-1">
                <h3 className="text-base font-semibold text-white">
                  Full Ownership &amp; Clean Code
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  You receive 100% intellectual property, full GitHub repository ownership, clear documentation, and standard tech stacks (Next.js, Python, PostgreSQL).
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
