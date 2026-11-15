const rows = [
  {
    value: "48ms",
    label: "Median cold start",
    body: "Functions boot from a pre-warmed snapshot, so the first request after a deploy feels exactly like the thousandth.",
  },
  {
    value: "300+",
    label: "Edge locations",
    body: "Your code runs within 50ms of 95% of the world's internet users, with automatic failover between regions.",
  },
  {
    value: "0",
    label: "Servers to patch",
    body: "Runtimes, TLS certificates and OS updates are rolled out by us, tested against your traffic in shadow mode first.",
  },
  {
    value: "99.99%",
    label: "Uptime, contractually",
    body: "Backed by a public status page and automatic credits. No support ticket required to claim them.",
  },
]

export default function Features12() {
  return (
    <section className="w-full bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
            The numbers behind Fathom Edge.
          </h2>
          <p className="text-sm leading-7 text-muted-foreground md:text-right">
            Measured across 1.2 billion requests in October 2026.
          </p>
        </div>
        <div className="mt-14 border-t border-border">
          {rows.map((row) => (
            <div
              key={row.label}
              className="grid gap-4 border-b border-border py-8 md:grid-cols-[1fr_1fr_1.4fr] md:items-baseline md:gap-10"
            >
              <div className="font-mono text-5xl font-medium tracking-tighter md:text-6xl">
                {row.value}
              </div>
              <div className="text-base font-medium">{row.label}</div>
              <p className="text-sm leading-7 text-muted-foreground">{row.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
