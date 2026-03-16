import { TRUST_LOGOS } from "@/lib/constants";

export default function TrustLogos() {
  const logos = [...TRUST_LOGOS, ...TRUST_LOGOS];

  return (
    <section className="py-16 border-t border-border overflow-hidden">
      <p className="text-center text-sm uppercase tracking-widest text-foreground-subtle mb-10">
        Trusted by leading studios and brands worldwide
      </p>
      <div className="relative">
        <div
          className="flex gap-16 items-center whitespace-nowrap hover:[animation-play-state:paused]"
          style={{ animation: "marquee 30s linear infinite" }}
        >
          {logos.map((logo, i) => (
            <span
              key={`${logo}-${i}`}
              className="text-2xl font-[var(--font-heading)] font-bold text-foreground-subtle/40 hover:text-foreground-muted transition-colors shrink-0 select-none"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
