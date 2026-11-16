const rowA = [
  'url("/images/templates/portfolio-simple.jpg") center / cover',
  'url("/images/templates/design-agency.jpg") center / cover',
  'url("/images/templates/resort.jpg") center / cover',
  'url("/images/templates/ai.jpg") center / cover',
  'url("/images/templates/vercel.jpg") center / cover',
  'url("/images/templates/aliimam-comp.jpg") center / cover',
]
const rowB = [
  'url("/images/templates/dalim-agency-old.jpg") center / cover',
  'url("/images/templates/dalim-fonts-old.jpg") center / cover',
  'url("/images/templates/dalim-graphic-old.jpg") center / cover',
  'url("/images/templates/dalim-icons-old.jpg") center / cover',
  'url("/images/templates/dalim-tools-old.jpg") center / cover',
  'url("/images/templates/dalim-works-old.jpg") center / cover',
]
const labels = ["Brand", "Web", "Product", "Templates", "Icons", "Motion"]

function Row({ tiles, reverse }: { tiles: string[]; reverse?: boolean }) {
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <div
        className="flex shrink-0 gap-4 pr-4 group-hover:[animation-play-state:paused]"
        style={{ animation: `g13-marquee 40s linear infinite${reverse ? " reverse" : ""}` }}
      >
        {[...tiles, ...tiles].map((bg, i) => (
          <div
            key={i}
            className="relative h-40 w-60 shrink-0 border border-border md:h-52 md:w-80"
            style={{ background: bg }}
            aria-hidden={i >= tiles.length}
          >
            <span className="absolute bottom-3 left-3 bg-background/85 px-2 py-1 text-xs font-medium backdrop-blur">
              {labels[i % labels.length]}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Gallery13() {
  return (
    <section className="group w-full overflow-hidden bg-background py-20">
      <style>{`@keyframes g13-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}@media (prefers-reduced-motion:reduce){[style*="g13-marquee"]{animation:none!important}}`}</style>
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
          Many projects. One studio.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
          A continuous reel of Designali and Dalim work by Ali Imam. Hover to
          pause the wall.
        </p>
      </div>
      <div className="mt-12 space-y-4">
        <Row tiles={rowA} />
        <Row tiles={rowB} reverse />
      </div>
    </section>
  )
}
