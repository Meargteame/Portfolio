export const HomeAudienceAndWhy = () => {
  return (
    <section className="py-20 sm:py-28 border-t border-border/60">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-8">

        {/* 2-Column Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column 1: Who should get in touch */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold font-bricolage text-foreground tracking-tight">
                Who I work with.
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                I partner with founders, businesses, and designers who value speed and direct communication.
              </p>
            </div>

            <div className="space-y-6 divide-y divide-border/60">
              <div className="pt-6 first:pt-0 space-y-1.5">
                <h3 className="text-base font-bold font-bricolage text-foreground">
                  Startup Founders
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  You have an idea and need an MVP built quickly (2–4 weeks) so you can test market demand with real users instead of spending months in theoretical planning.
                </p>
              </div>

              <div className="pt-6 space-y-1.5">
                <h3 className="text-base font-bold font-bricolage text-foreground">
                  Growing Businesses
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  You need a website, customer portal, internal dashboard, booking system, or automation to replace messy spreadsheets and manual follow-ups.
                </p>
              </div>

              <div className="pt-6 space-y-1.5">
                <h3 className="text-base font-bold font-bricolage text-foreground">
                  Agencies &amp; UI/UX Designers
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  You have client designs in Figma and need a dependable developer who implements them faithfully into responsive, performant React and Next.js code.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Why work with an independent developer */}
          <div className="lg:col-span-6 space-y-8 lg:border-l lg:border-border/60 lg:pl-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold font-bricolage text-foreground tracking-tight">
                Why work with an independent developer?
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Working directly with the builder eliminates agency bloat, misaligned incentives, and long communication loops.
              </p>
            </div>

            <div className="space-y-6 divide-y divide-border/60">
              <div className="pt-6 first:pt-0 space-y-1.5">
                <h3 className="text-base font-bold font-bricolage text-foreground">
                  Full-Stack Execution
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Frontend, backend, databases, payment gateways, and cloud deployment. One accountable engineer handles the entire build without coordinating multiple freelancers.
                </p>
              </div>

              <div className="pt-6 space-y-1.5">
                <h3 className="text-base font-bold font-bricolage text-foreground">
                  Direct, Transparent Communication
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  No project managers or account executives. You speak directly with the developer writing your code, with regular progress demos and fast turnaround on feedback.
                </p>
              </div>

              <div className="pt-6 space-y-1.5">
                <h3 className="text-base font-bold font-bricolage text-foreground">
                  Product-First Thinking
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I care about whether your software actually solves the business problem and provides a smooth experience for your users, not just whether the code runs.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
