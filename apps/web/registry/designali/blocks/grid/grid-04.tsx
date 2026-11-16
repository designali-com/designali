const tiles = [
  { label: "Typography", value: "Aa", className: "col-span-2 row-span-2", tone: "bg-foreground text-background" },
  { label: "Spacing", value: "4pt", className: "", tone: "bg-muted" },
  { label: "Radius", value: "0", className: "", tone: "bg-background" },
  { label: "Columns", value: "12", className: "row-span-2", tone: "bg-primary text-primary-foreground" },
  { label: "Breakpoints", value: "5", className: "", tone: "bg-background" },
  { label: "Motion", value: "160ms", className: "col-span-2", tone: "bg-muted" },
  { label: "Icons", value: "1.5px", className: "", tone: "bg-background" },
]

export default function Grid04() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[320px_1fr]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            Designali foundations
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight">
            The system at a glance
          </h2>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            Seven decisions underpin every Designali block. Change one token and
            it ripples through 460+ blocks and 240+ pages.
          </p>
          <a
            href="/docs"
            className="mt-6 inline-block border-b border-foreground pb-0.5 text-sm"
          >
            Read the foundations doc
          </a>
        </div>

        <div className="grid auto-rows-[140px] grid-cols-2 gap-px border border-border bg-border md:grid-cols-4 md:auto-rows-[160px]">
          {tiles.map((tile) => (
            <div
              key={tile.label}
              className={`flex flex-col justify-between p-5 ${tile.tone} ${tile.className}`}
            >
              <span className="text-xs opacity-70">{tile.label}</span>
              <span className="text-3xl font-semibold tracking-tight md:text-4xl">
                {tile.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
