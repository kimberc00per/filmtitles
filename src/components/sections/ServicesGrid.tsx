import { SERVICES } from "@/lib/constants";
import {
  Film,
  Sparkles,
  Layers,
  Palette,
  Scissors,
  Volume2,
  Fingerprint,
  Box,
  Share2,
  Image,
  Play,
  Monitor,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Film,
  Sparkles,
  Layers,
  Palette,
  Scissors,
  Volume2,
  Fingerprint,
  Box,
  Share2,
  Image,
  Play,
  Monitor,
};

export default function ServicesGrid() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-4">
            What We Do
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary via-pink-500 to-accent bg-clip-text text-transparent">
              60+
            </span>{" "}
            Creative Services
          </h2>
          <p className="mt-4 text-foreground-muted text-lg max-w-2xl mx-auto">
            From title sequences to brand identities, we handle every visual storytelling need your
            production requires.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || Film;
            return (
              <div
                key={service.title}
                className="group p-6 rounded-2xl bg-background-elevated border border-border hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon size={22} className="text-primary" />
                </div>
                <h3 className="font-[var(--font-heading)] font-semibold text-lg">{service.title}</h3>
                <p className="mt-2 text-sm text-foreground-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
