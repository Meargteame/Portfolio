import { Navbar }   from "../common/Navbar";
import { Footer }   from "../common/Footer";
import { Projects } from "../common/Project";

export const WorkPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <div className="pt-32 pb-6 max-w-[1200px] mx-auto px-6 sm:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground font-bricolage leading-tight">
            Work.
          </h1>
          <p className="mt-4 text-base text-muted-foreground max-w-xl">
            Full-stack platforms, SaaS products, and backend systems — built 0-to-1 with technical depth and real users.
          </p>
        </div>
        <Projects />
        <Footer />
      </main>
    </div>
  );
};
