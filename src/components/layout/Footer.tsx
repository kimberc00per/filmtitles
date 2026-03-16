import { FOOTER_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <a href="#" className="font-[var(--font-heading)] text-xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                FILM
              </span>
              TITLES
            </a>
            <p className="mt-4 text-sm text-foreground-muted leading-relaxed">
              Your production team&apos;s creative team. World-class title sequences, motion
              graphics, and visual identities.
            </p>
            <div className="flex gap-4 mt-6">
              {["X", "Li", "In", "Vm"].map((s) => (
                <span
                  key={s}
                  className="w-9 h-9 rounded-lg bg-background-elevated border border-border flex items-center justify-center text-xs text-foreground-muted hover:text-foreground hover:border-border-hover transition-colors cursor-pointer"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-[var(--font-heading)] font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-foreground-muted hover:text-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-[var(--font-heading)] font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-foreground-muted hover:text-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-[var(--font-heading)] font-semibold text-sm mb-4">Resources</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-foreground-muted hover:text-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground-subtle">&copy; 2026 FilmTitles. All rights reserved.</p>
          <p className="text-sm text-foreground-subtle">Built with passion for visual storytelling.</p>
        </div>
      </div>
    </footer>
  );
}
