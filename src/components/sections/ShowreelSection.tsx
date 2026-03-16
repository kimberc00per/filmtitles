import { Play } from "lucide-react";

export default function ShowreelSection() {
  return (
    <section id="work" className="py-20 lg:py-28 bg-background-elevated">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-4">
            Our Work
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold">
            See Our Work in Action
          </h2>
        </div>

        {/* Video placeholder */}
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-background-subtle border border-border group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-pink-500/10" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Play size={32} className="text-white ml-1" fill="white" />
            </div>
          </div>
          <div className="absolute bottom-6 left-6">
            <p className="text-sm text-foreground-muted">2026 Showreel</p>
            <p className="font-[var(--font-heading)] font-semibold text-lg">
              FilmTitles — A Year of Creative Excellence
            </p>
          </div>
        </div>

        {/* Project thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[
            { title: "Neon Horizons", category: "Title Sequence" },
            { title: "Project Atlas", category: "Motion Graphics" },
            { title: "Midnight Run", category: "VFX" },
            { title: "Nova Series", category: "Brand Identity" },
          ].map((project) => (
            <div
              key={project.title}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-background-subtle border border-border cursor-pointer hover:border-primary/50 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-3 left-3">
                <p className="text-xs text-primary font-medium">{project.category}</p>
                <p className="font-[var(--font-heading)] font-semibold text-sm">
                  {project.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
