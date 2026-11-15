const clients = [
  "Northwind",
  "Lumen & Co",
  "Halcyon",
  "Vertex Labs",
  "Orbital",
  "Kestrel",
  "Monolith",
  "Fieldnote",
]

export default function Clients06() {
  return (
    <section className="w-full border-y border-border bg-background py-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Trusted by product teams at
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
