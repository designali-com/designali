const rowA = [
  "linear-gradient(135deg, var(--chart-1), var(--chart-2))",
  "linear-gradient(200deg, var(--chart-3), var(--chart-4))",
  "linear-gradient(60deg, var(--chart-5), var(--chart-1))",
  "linear-gradient(160deg, var(--chart-2), var(--chart-5))",
  "linear-gradient(90deg, var(--chart-4), var(--chart-3))",
  "linear-gradient(300deg, var(--chart-1), var(--chart-4))",
]
const rowB = [
  "linear-gradient(20deg, var(--chart-4), var(--chart-2))",
  "linear-gradient(250deg, var(--chart-5), var(--chart-3))",
  "linear-gradient(110deg, var(--chart-2), var(--chart-1))",
  "linear-gradient(180deg, var(--chart-3), var(--chart-5))",
  "linear-gradient(45deg, var(--chart-1), var(--chart-3))",
  "linear-gradient(330deg, var(--chart-4), var(--chart-5))",
]
const labels = ["Brand", "Editorial", "Product", "Motion", "Packaging", "Spatial"]

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
          1,200 projects. One studio.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
          A continuous reel of recent work from Northbound Studio. Hover to
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
