const plates = [
  {
    title: "The weight of morning",
    body: "Shot over three weeks in the salt marshes, waiting for the fog to lift just enough to separate land from water.",
    ratio: "aspect-[4/5]",
    gradient: "linear-gradient(180deg, var(--chart-2), var(--chart-4))",
  },
  {
    title: "Quiet machinery",
    body: "A decommissioned grain elevator, photographed from the inside at noon when light falls straight down the shafts.",
    ratio: "aspect-[16/10]",
    gradient: "linear-gradient(120deg, var(--chart-5), var(--chart-3))",
  },
  {
    title: "Second growth",
    body: "Saplings returning to a forest cleared forty years ago. The new canopy is already taller than the old fence posts.",
    ratio: "aspect-square",
    gradient: "linear-gradient(60deg, var(--chart-1), var(--chart-2))",
  },
  {
    title: "Tidewater",
    body: "The final plate: low tide at the estuary mouth, the moment the river stops arguing with the sea.",
    ratio: "aspect-[16/9]",
    gradient: "linear-gradient(220deg, var(--chart-3), var(--chart-1))",
  },
]

export default function Gallery11() {
  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.6fr]">
        <div className="lg:sticky lg:top-20 lg:self-start">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            Exhibition - Hall B
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Low Country
          </h2>
          <p className="mt-5 max-w-sm text-muted-foreground">
            Four large-format plates by Ines Ward, exploring the slow edges of
            the eastern wetlands. On view through 14 March.
          </p>
          <dl className="mt-8 grid max-w-sm grid-cols-2 gap-px border border-border bg-border text-sm">
            {[
              ["Plates", "04"],
              ["Format", "8x10 in"],
              ["Edition", "of 12"],
              ["Printed", "Platinum"],
            ].map(([k, v]) => (
              <div key={k} className="bg-background p-4">
                <dt className="text-xs text-muted-foreground">{k}</dt>
                <dd className="mt-1 font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <ol className="space-y-16">
          {plates.map((plate, i) => (
            <li key={plate.title}>
              <div
                className={`w-full border border-border ${plate.ratio}`}
                style={{ background: plate.gradient }}
              />
              <div className="mt-5 grid gap-2 sm:grid-cols-[4rem_1fr]">
                <span className="font-mono text-sm text-muted-foreground">
                  Pl. {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-medium">{plate.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{plate.body}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
