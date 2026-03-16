import { PROCESS_STEPS } from "@/lib/constants";

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-4">
            How It Works
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold">
            Four Simple Steps
          </h2>
          <p className="mt-4 text-foreground-muted text-lg max-w-xl mx-auto">
            From brief to delivery, our streamlined process gets you world-class creative, fast.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, i) => (
            <div key={step.title} className="relative">
              {/* Connector line (desktop only) */}
              {i < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[calc(100%-20%)] h-px border-t border-dashed border-border" />
              )}
              <div className="p-6 rounded-2xl bg-background-elevated border border-border">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center mb-5">
                  <span className="font-[var(--font-heading)] text-lg font-bold text-white">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-[var(--font-heading)] font-semibold text-xl">{step.title}</h3>
                <p className="mt-2 text-sm text-foreground-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
