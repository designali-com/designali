const swatches = [
  { name: "Designali Blue", hex: "--primary", tone: "bg-primary" },
  { name: "Ink", hex: "--foreground", tone: "bg-foreground" },
  { name: "Paper", hex: "--background", tone: "bg-background" },
  { name: "Muted", hex: "--muted", tone: "bg-muted" },
  { name: "Card", hex: "--card", tone: "bg-card" },
  { name: "Chart 1", hex: "--chart-1", tone: "bg-chart-1" },
  { name: "Chart 2", hex: "--chart-2", tone: "bg-chart-2" },
  { name: "Chart 3", hex: "--chart-3", tone: "bg-chart-3" },
]

export default function Grid02() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-4 border-b border-border pb-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Designali brand guidelines · 03
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">Colour palette</h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Designali Blue leads every layout, with Ink and Paper carrying the
            rest. Every colour is a semantic token that adapts to dark mode.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {swatches.map((swatch, index) => (
            <li
              key={swatch.name}
              className={index < 2 ? "col-span-2 sm:col-span-2" : ""}
            >
              <div
                className={`${swatch.tone} border border-border ${
                  index < 2 ? "aspect-[2/1]" : "aspect-square"
                }`}
              />
              <div className="mt-3 flex items-baseline justify-between">
                <span className="text-sm font-medium">{swatch.name}</span>
                <span className="font-sans text-xs text-muted-foreground">
                  {swatch.hex}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
