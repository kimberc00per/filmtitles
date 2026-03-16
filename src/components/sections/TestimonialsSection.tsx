import { TESTIMONIALS } from "@/lib/constants";
import { Quote } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-background-elevated">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-4">
            Testimonials
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="p-8 rounded-2xl bg-background border border-border hover:border-border-hover transition-colors"
            >
              <Quote size={28} className="text-primary/30 mb-4" />
              <p className="text-foreground text-lg leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-[var(--font-heading)] font-semibold">{t.name}</p>
                <p className="text-sm text-foreground-muted mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
