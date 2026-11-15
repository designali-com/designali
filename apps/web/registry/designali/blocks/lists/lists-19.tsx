const milestones = [
  { year: "2019", title: "Two people, one spare room", text: "Lena and Marcus quit their agency jobs to build the scheduling tool they wished they had." },
  { year: "2020", title: "First 1,000 teams", text: "A launch on a Tuesday afternoon brought more sign-ups in a week than we had planned for the year." },
  { year: "2021", title: "Seed round & first hires", text: "Raised $4M and grew to 12 people across Copenhagen and Lisbon." },
  { year: "2023", title: "Calendar 2.0", text: "Rebuilt the core on a local-first sync engine. Load times dropped from 2.4s to 180ms." },
  { year: "2025", title: "Profitable", text: "Crossed $12M ARR with a team of 58, without spending on paid acquisition." },
  { year: "2026", title: "100,000 teams", text: "From two-person studios to hospitals with 9,000 staff, all running on Weekfold." },
]

export default function Lists19() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">Our story</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Seven years, one calendar.</h2>
        </div>

        <ol className="relative mt-16">
          <span className="absolute top-0 bottom-0 left-[7px] w-px bg-border md:left-1/2" aria-hidden />
          {milestones.map((item, index) => {
            const right = index % 2 === 1
            return (
              <li key={item.year} className="relative grid pb-12 pl-10 last:pb-0 md:grid-cols-2 md:pl-0">
                <span
                  className={`absolute top-1.5 left-0 size-[15px] border-2 border-background ring-1 ring-border md:left-1/2 md:-translate-x-1/2 ${
                    index === milestones.length - 1 ? "bg-foreground" : "bg-muted-foreground/40"
                  }`}
                />
                <div className={right ? "md:col-start-2 md:pl-12" : "md:pr-12 md:text-right"}>
                  <span className="font-mono text-sm text-muted-foreground">{item.year}</span>
                  <h3 className="mt-1 text-xl font-medium tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
