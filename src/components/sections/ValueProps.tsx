import { DollarSign, Star, Zap } from "lucide-react";

const props = [
  {
    icon: Star,
    highlight: "25+",
    title: "Years of Award-Winning Work",
    description:
      "A proven track record of crafting iconic title sequences for the biggest names in entertainment. Our work defines the opening moments of cinema.",
  },
  {
    icon: Zap,
    highlight: "End-to-End",
    title: "Full Creative Pipeline",
    description:
      "From concept and art direction through animation, compositing, and final delivery — one team, one vision, no handoff gaps.",
  },
  {
    icon: DollarSign,
    highlight: "Scalable",
    title: "From Indie to Blockbuster",
    description:
      "Whether it's a $75K indie title card or a $200K+ theatrical sequence, we tailor our approach to match your project's scope and budget.",
  },
];

export default function ValueProps() {
  return (
    <section className="py-20 lg:py-28 bg-background-elevated">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-4">
            Why Prologue
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold">
            Artistry Meets Precision
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {props.map((prop) => (
            <div
              key={prop.title}
              className="p-8 lg:p-10 rounded-2xl bg-background border border-border hover:border-border-hover transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <prop.icon size={22} className="text-primary" />
              </div>
              <p className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary via-pink-500 to-accent bg-clip-text text-transparent">
                {prop.highlight}
              </p>
              <h3 className="font-[var(--font-heading)] font-semibold text-xl mt-3">
                {prop.title}
              </h3>
              <p className="mt-3 text-foreground-muted leading-relaxed">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
