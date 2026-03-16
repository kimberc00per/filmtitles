export default function CtaBanner() {
  return (
    <section id="cta" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden">
          {/* Gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-pink-500 to-accent rounded-2xl" />
          <div className="relative m-[1px] rounded-2xl bg-background p-10 sm:p-16 lg:p-20">
            {/* Background glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className="w-[500px] h-[300px] rounded-full opacity-15"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(124,92,252,0.6) 0%, transparent 70%)",
                }}
              />
            </div>

            <div className="relative z-10 text-center">
              <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold">
                Ready to Elevate Your{" "}
                <span className="bg-gradient-to-r from-primary via-pink-500 to-accent bg-clip-text text-transparent">
                  Visual Story
                </span>
                ?
              </h2>
              <p className="mt-4 text-foreground-muted text-lg max-w-xl mx-auto">
                Join 50+ studios and brands who trust Prologue for world-class visual storytelling.
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  className="inline-flex h-14 items-center px-10 rounded-xl text-lg font-medium bg-gradient-to-r from-primary to-pink-500 text-white hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-primary/25"
                >
                  Start a Project
                </a>
              </div>
              <p className="mt-4 text-sm text-foreground-subtle">
                Let&apos;s talk about your next project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
