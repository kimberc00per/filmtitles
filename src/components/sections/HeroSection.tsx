import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[800px] h-[600px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(124,92,252,0.4) 0%, rgba(236,72,153,0.2) 40%, transparent 70%)",
            animation: "pulse-glow 6s ease-in-out infinite",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center pt-24">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background-elevated/50 text-sm text-foreground-muted mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Award-Winning Title Design Studio
        </div>

        {/* Headline */}
        <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight">
          Where Stories{" "}
          <span className="bg-gradient-to-r from-primary via-pink-500 to-accent bg-clip-text text-transparent">
            Begin
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-foreground-muted max-w-2xl mx-auto leading-relaxed">
          We craft award-winning title sequences, motion design, and visual storytelling for the
          world&apos;s most iconic films, series, and brands.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#cta"
            className="inline-flex h-14 items-center justify-center px-8 rounded-xl text-lg font-medium bg-gradient-to-r from-primary to-pink-500 text-white hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-primary/25"
          >
            Start a Project
          </a>
          <a
            href="#work"
            className="inline-flex h-14 items-center justify-center gap-2 px-8 rounded-xl text-lg font-medium border border-border text-foreground hover:bg-background-subtle transition-all"
          >
            <span className="w-6 h-6 rounded-full border border-foreground-muted flex items-center justify-center">
              <span className="w-0 h-0 border-l-[6px] border-l-foreground-muted border-y-[4px] border-y-transparent ml-0.5" />
            </span>
            View Our Reel
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <ChevronDown size={28} />
      </div>
    </section>
  );
}
