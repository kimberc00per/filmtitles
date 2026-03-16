import { DollarSign, Star, Zap } from "lucide-react";

const props = [
  {
    icon: DollarSign,
    highlight: "Up to 50%",
    title: "More Cost-Effective",
    description:
      "Get enterprise-grade creative at a fraction of the cost of traditional post-production houses. Our subscription model means no surprise invoices.",
  },
  {
    icon: Star,
    highlight: "Top 1%",
    title: "World-Class Talent + AI",
    description:
      "The best global creative talent, enhanced by industry-leading AI tools. Every frame is crafted to the highest standard your brand demands.",
  },
  {
    icon: Zap,
    highlight: "12 Hours",
    title: "Lightning-Fast Turnaround",
    description:
      "From concept to delivery in record time. Our distributed team across 17 time zones means your project never sleeps.",
  },
];

export default function ValueProps() {
  return (
    <section className="py-20 lg:py-28 bg-background-elevated">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-4">
            Why FilmTitles
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold">
            Built for Speed, Quality, and Scale
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
