import { Link } from "react-router";
import { ArrowUpRight, Mail } from "lucide-react";

export const HomeContactCallout = () => {
  return (
    <section className="py-20 sm:py-28 border-t border-border">
      <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
        
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-bricolage">
          Have a project in mind?
        </h2>
        
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
          Whether you have a completed Figma design, an MVP concept, or an internal tool that needs software — send over the details and I'll give you a clear, honest recommendation and estimate.
        </p>

        {/* Actions */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-foreground text-background text-sm font-semibold hover:opacity-90 transition-opacity shadow-xs"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <a
            href="mailto:hello.meareg@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border bg-card text-foreground text-sm font-medium hover:bg-muted transition-colors shadow-xs"
          >
            <Mail className="w-4 h-4" />
            <span>hello.meareg@gmail.com</span>
          </a>
        </div>

        <p className="text-xs text-muted-foreground pt-2">
          Replies within 24 hours · Direct communication · Addis Ababa, Ethiopia (UTC+3)
        </p>

      </div>
    </section>
  );
};
