const shots = [
  { title: "Tidal, Lofoten", tag: "Landscape", tone: "from-sky-900 via-cyan-700 to-teal-400", className: "col-span-2 row-span-2" },
  { title: "Concrete hymn", tag: "Architecture", tone: "from-stone-500 to-stone-300", className: "" },
  { title: "Saffron hour", tag: "Street", tone: "from-amber-500 via-orange-500 to-rose-600", className: "row-span-2" },
  { title: "Glasshouse", tag: "Botanical", tone: "from-emerald-800 to-lime-400", className: "" },
  { title: "Night shift", tag: "Street", tone: "from-indigo-950 via-violet-800 to-fuchsia-500", className: "col-span-2" },
  { title: "Salt flats", tag: "Landscape", tone: "from-rose-100 via-stone-200 to-sky-200", className: "" },
  { title: "Stairwell 9", tag: "Architecture", tone: "from-neutral-800 to-neutral-500", className: "" },
  { title: "First frost", tag: "Botanical", tone: "from-slate-300 via-sky-100 to-white", className: "col-span-2" },
]

export default function Grid19() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 border-b border-border pb-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="font-mono text-xs text-muted-foreground">Portfolio · 2024-2026</p>
            <h2 className="mt-3 text-5xl font-semibold tracking-tighter md:text-7xl">Elin Marsh</h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-muted-foreground">
            Photographer working between Oslo and Lisbon. Available for editorial
            and architectural commissions.
          </p>
        </div>

        <div className="mt-10 grid auto-rows-[140px] grid-cols-2 gap-2 sm:auto-rows-[180px] md:grid-cols-4 md:gap-3 lg:auto-rows-[220px]">
          {shots.map((shot, index) => (
            <a
              key={shot.title}
              href="#"
              className={`group relative overflow-hidden bg-gradient-to-br ${shot.tone} ${shot.className}`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.3),transparent_60%)]" />
              <div className="absolute inset-0 flex flex-col justify-between bg-black/0 p-4 text-white opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
                <span className="font-mono text-[10px]">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p className="text-[10px] tracking-widest uppercase opacity-80">{shot.tag}</p>
                  <p className="text-lg font-medium tracking-tight">{shot.title}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>Showing 8 of 64 frames</span>
          <a href="#" className="border-b border-foreground pb-0.5 text-foreground">
            View full archive
          </a>
        </div>
      </div>
    </section>
  )
}
