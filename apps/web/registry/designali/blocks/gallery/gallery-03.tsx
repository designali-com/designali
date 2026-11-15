const tiles = [
  {
    title: "Dune Study",
    meta: "Series 01",
    span: "md:col-span-2 md:row-span-2",
    gradient: "linear-gradient(135deg, var(--chart-1), var(--chart-2))",
  },
  {
    title: "Low Tide",
    meta: "Series 02",
    span: "",
    gradient: "linear-gradient(160deg, var(--chart-2), var(--chart-4))",
  },
  {
    title: "Signal",
    meta: "Series 03",
    span: "",
    gradient: "linear-gradient(200deg, var(--chart-3), var(--chart-5))",
  },
  {
    title: "Monolith",
    meta: "Series 04",
    span: "md:row-span-2",
    gradient: "linear-gradient(180deg, var(--chart-4), var(--chart-1))",
  },
  {
    title: "Afterglow",
    meta: "Series 05",
    span: "md:col-span-2",
    gradient: "linear-gradient(90deg, var(--chart-5), var(--chart-3))",
  },
  {
    title: "Field",
    meta: "Series 06",
    span: "",
    gradient: "linear-gradient(45deg, var(--chart-2), var(--chart-5))",
  },
]

export default function Gallery03() {
  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Selected frames
          </h2>
          <p className="text-sm text-muted-foreground">
            Six studies in color and light, 2025
          </p>
        </div>
        <div className="mt-10 grid auto-rows-[180px] grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
          {tiles.map((tile) => (
            <figure
              key={tile.title}
              className={`group relative overflow-hidden border border-border ${tile.span}`}
            >
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                style={{ background: tile.gradient }}
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-background/80 px-4 py-2 text-xs backdrop-blur">
                <span className="font-medium">{tile.title}</span>
                <span className="text-muted-foreground">{tile.meta}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
