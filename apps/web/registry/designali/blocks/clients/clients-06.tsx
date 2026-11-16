const clients = [
  "Dalim",
  "Dalim Agency",
  "Dalim Fonts",
  "Dalim Graphic",
  "Dalim Icons",
  "Dalim UI",
  "Dalim Works",
  "Dalim Visuals",
]

export default function Clients06() {
  return (
    <section className="w-full border-y border-border bg-background py-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Brands designed and built by Designali
        </p>
        <div className="mt-10 grid grid-cols-2 border-t border-l border-border sm:grid-cols-4">
          {clients.map((client) => (
            <div
              key={client}
              className="flex h-28 items-center justify-center border-r border-b border-border text-lg font-semibold tracking-tight text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
