const prints = [
  { caption: "Brand moodboard", date: "Jun 14", rotate: "-rotate-3", gradient: 'url("/img/ask/ask1.jpg") center / cover' },
  { caption: "Logo explorations", date: "Jun 21", rotate: "rotate-2", gradient: 'url("/img/ask/ask2.jpg") center / cover' },
  { caption: "UI in Figma", date: "Jul 02", rotate: "-rotate-1", gradient: 'url("/img/ask/ask3.jpg") center / cover' },
  { caption: "Next.js build", date: "Jul 03", rotate: "rotate-3", gradient: 'url("/img/ask/ask4.jpg") center / cover' },
  { caption: "Launch day", date: "Jul 19", rotate: "rotate-1", gradient: 'url("/img/ask/ask5.jpg") center / cover' },
  { caption: "Case study shoot", date: "Aug 30", rotate: "-rotate-2", gradient: 'url("/img/ask/ask6.jpg") center / cover' },
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
            Designali &apos;25 - Studio album
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Moments from a Designali project
          </h2>
          <p className="mt-3 text-muted-foreground">
            From brief to launch, design se code tak. Hover a print to pick it up.
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
