const milestones = [
  { year: "Start", title: "One designer, one laptop", text: "Ali Imam starts designing brands and interfaces, and teaches himself to code them too." },
  { year: "Dalim", title: "Dalim and Dalim Agency", text: "The first brand line: identity, graphic design and websites for clients under the Dalim name." },
  { year: "Fonts", title: "Dalim Fonts, Graphic and Visuals", text: "Typefaces, graphic resources and visual work grow into their own Dalim projects." },
  { year: "UI", title: "Dalim UI, Icons and Tools", text: "Design meets code: UI components, icon sets and tools for designers and developers." },
  { year: "Designali", title: "Designali", text: "Everything comes together as one design and development studio — design se code tak." },
  { year: "Today", title: "460+ blocks and counting", text: "Templates, 240+ landing pages, 2300+ UI designs and 4000+ icons on designali.com." },
]

export default function Lists19() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">Our story</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Design se code tak.</h2>
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
