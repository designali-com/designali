const swatches = [
  { name: "Ink", hex: "#111111", tone: "bg-neutral-950" },
  { name: "Paper", hex: "#F5F3EE", tone: "bg-stone-100" },
  { name: "Clay", hex: "#C2703D", tone: "bg-orange-700" },
  { name: "Moss", hex: "#4A5D3A", tone: "bg-lime-900" },
  { name: "Tide", hex: "#2F5D7C", tone: "bg-sky-800" },
  { name: "Dune", hex: "#D8C3A5", tone: "bg-amber-200" },
  { name: "Slate", hex: "#5B6470", tone: "bg-slate-500" },
  { name: "Bloom", hex: "#D9A5B3", tone: "bg-rose-300" },
]

export default function Grid02() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-4 border-b border-border pb-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Brand guidelines · 03
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">Colour palette</h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Eight colours drawn from natural materials. Ink and Paper carry
            most layouts; accents are used sparingly.
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
                <span className="font-mono text-xs text-muted-foreground">
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
