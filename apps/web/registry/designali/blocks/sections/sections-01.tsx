const stats = [
  { value: "2014", label: "Founded in Copenhagen" },
  { value: "38", label: "People across 4 disciplines" },
  { value: "120+", label: "Brands launched" },
  { value: "9", label: "Design awards this year" },
]

export default function Sections01() {
  return (
    <section className="w-full border-y border-border bg-background">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-12">
        <div className="border-b border-border p-8 md:p-12 lg:col-span-4 lg:border-r lg:border-b-0">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            (01) About the studio
          </p>
        </div>
        <div className="p-8 md:p-12 lg:col-span-8">
          <p className="text-2xl leading-snug font-medium tracking-tight md:text-4xl">
            We are an independent design studio working at the intersection of
            brand, product and space.{" "}
            <span className="text-muted-foreground">
              Our work is quiet, considered and built to last longer than the
              next trend cycle.
            </span>
          </p>
          <div className="mt-10 grid gap-6 text-sm leading-6 text-muted-foreground md:grid-cols-2">
            <p>
              Every engagement starts with a small senior team embedded in your
              organisation. We listen first, prototype early and make decisions
              in the open.
            </p>
            <p>
              From identity systems to digital products, we take projects from
              the first sketch to the final production file, and stay on as
              long-term partners.
            </p>
          </div>
        </div>
      </div>
      <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-px border-t border-border bg-border md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-background p-8">
            <dt className="text-xs text-muted-foreground">{stat.label}</dt>
            <dd className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
