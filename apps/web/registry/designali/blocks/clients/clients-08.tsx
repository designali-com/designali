const row = [
  "Designali",
  "Dalim",
  "Dalim Agency",
  "Dalim Fonts",
  "Dalim Graphic",
  "Dalim Icons",
  "Dalim Tools",
  "Dalim UI",
]

export default function Clients08() {
  return (
    <section className="w-full overflow-hidden border-y border-border bg-muted/40 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-4">
          <span className="h-px flex-1 bg-border" />
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            Designed and built by Ali Imam
          </p>
          <span className="h-px flex-1 bg-border" />
        </div>
      </div>
      <div className="relative mt-8 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex gap-(--gap) overflow-hidden [--duration:30s] [--gap:4rem]">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 animate-marquee items-center gap-(--gap)"
            >
              {row.map((name) => (
                <span
                  key={name}
                  className="text-2xl font-semibold tracking-tight whitespace-nowrap text-muted-foreground/70"
                >
                  {name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
