const prints = [
  { caption: "First swim of summer", date: "Jun 14", rotate: "-rotate-3", gradient: "linear-gradient(160deg, var(--chart-2), var(--chart-3))" },
  { caption: "Grandma's lemon tree", date: "Jun 21", rotate: "rotate-2", gradient: "linear-gradient(200deg, var(--chart-4), var(--chart-1))" },
  { caption: "Road trip, mile 412", date: "Jul 02", rotate: "-rotate-1", gradient: "linear-gradient(90deg, var(--chart-5), var(--chart-4))" },
  { caption: "Campfire, night two", date: "Jul 03", rotate: "rotate-3", gradient: "linear-gradient(20deg, var(--chart-1), var(--chart-5))" },
  { caption: "The lighthouse keeper", date: "Jul 19", rotate: "rotate-1", gradient: "linear-gradient(240deg, var(--chart-3), var(--chart-2))" },
  { caption: "Last ferry home", date: "Aug 30", rotate: "-rotate-2", gradient: "linear-gradient(130deg, var(--chart-4), var(--chart-3))" },
]

export default function Gallery12() {
  return (
    <section className="relative w-full overflow-hidden bg-muted/40 py-24">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: "radial-gradient(var(--border) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            Summer &apos;25 - Shared album
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            A box of prints from the long weekend
          </h2>
          <p className="mt-3 text-muted-foreground">
            46 photos from 9 people. Hover a print to pick it up.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-8 md:grid-cols-3">
          {prints.map((print) => (
            <figure
              key={print.caption}
              className={`${print.rotate} bg-card p-2.5 pb-4 text-card-foreground shadow-md ring-1 ring-border transition duration-300 hover:z-10 hover:rotate-0 hover:scale-105 hover:shadow-xl sm:p-3 sm:pb-5`}
            >
              <div className="aspect-square w-full" style={{ background: print.gradient }} />
              <figcaption className="mt-3 flex flex-col gap-0.5 px-1 sm:flex-row sm:items-baseline sm:justify-between">
                <span className="truncate font-serif text-sm italic">{print.caption}</span>
                <span className="font-mono text-[11px] text-muted-foreground">{print.date}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
