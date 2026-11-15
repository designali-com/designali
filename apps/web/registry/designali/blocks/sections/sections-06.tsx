const pillars = [
  { label: "For whom", text: "Independent clinics that cannot afford an IT department." },
  { label: "What we build", text: "Scheduling, records and billing that run on any laptop." },
  { label: "How we measure it", text: "Hours returned to patient care, every quarter, in public." },
]

export default function Sections06() {
  return (
    <section className="w-full bg-background py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-center font-mono text-xs tracking-widest text-muted-foreground uppercase">
          Our mission
        </p>
        <h2 className="mt-8 text-center text-3xl leading-tight font-medium tracking-tight text-balance md:text-5xl md:leading-[1.15]">
          We give small clinics the{" "}
          <span className="bg-gradient-to-r from-teal-600 to-sky-600 bg-clip-text text-transparent dark:from-teal-300 dark:to-sky-300">
            software of a hospital
          </span>{" "}
          without the overhead of one, so doctors spend their time with
          patients instead of{" "}
          <span className="text-muted-foreground line-through decoration-1">paperwork</span>.
        </h2>

        <div className="mx-auto mt-12 flex w-fit items-center gap-4">
          <span className="flex size-11 items-center justify-center rounded-full bg-muted text-sm font-medium">
            NO
          </span>
          <div className="text-left text-sm">
            <p className="font-medium">Dr. Nadia Okonkwo</p>
            <p className="text-muted-foreground">Co-founder, Clearwell Health</p>
          </div>
        </div>

        <dl className="mt-20 grid gap-px border border-border bg-border md:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.label} className="bg-background p-6 md:p-8">
              <dt className="text-xs text-muted-foreground">{pillar.label}</dt>
              <dd className="mt-3 text-base leading-7">{pillar.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
