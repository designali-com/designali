const groups = [
  {
    letter: "A",
    terms: [
      { term: "Affordance", definition: "A visual cue that suggests how an element can be used." },
      { term: "Atomic design", definition: "A method for building interfaces from small, reusable parts." },
    ],
  },
  {
    letter: "B",
    terms: [
      { term: "Baseline grid", definition: "Horizontal rhythm lines that text sits on for vertical consistency." },
      { term: "Breakpoint", definition: "A viewport width at which a layout adapts." },
    ],
  },
  {
    letter: "K",
    terms: [
      { term: "Kerning", definition: "Adjusting the space between specific pairs of letters." },
    ],
  },
  {
    letter: "T",
    terms: [
      { term: "Token", definition: "A named design decision, such as a colour or spacing value." },
      { term: "Tracking", definition: "Uniform letter spacing applied across a range of text." },
    ],
  },
]

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

export default function Lists04() {
  const available = new Set(groups.map((group) => group.letter))

  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Designali design glossary</h2>

        <nav className="mt-8 flex flex-wrap border-t border-l border-border">
          {alphabet.map((letter) => (
            <a
              key={letter}
              href={available.has(letter) ? `#glossary-${letter}` : undefined}
              className={`flex size-9 items-center justify-center border-r border-b border-border font-sans text-xs ${
                available.has(letter)
                  ? "hover:bg-foreground hover:text-background"
                  : "text-muted-foreground/40"
              }`}
            >
              {letter}
            </a>
          ))}
        </nav>

        <div className="mt-12 space-y-12">
          {groups.map((group) => (
            <div
              key={group.letter}
              id={`glossary-${group.letter}`}
              className="grid gap-6 md:grid-cols-[120px_1fr]"
            >
              <span className="text-6xl font-semibold tracking-tighter text-muted-foreground/50">
                {group.letter}
              </span>
              <dl className="divide-y divide-border border-t border-border">
                {group.terms.map((item) => (
                  <div key={item.term} className="grid gap-1 py-4 sm:grid-cols-[200px_1fr] sm:gap-6">
                    <dt className="text-sm font-medium">{item.term}</dt>
                    <dd className="text-sm leading-6 text-muted-foreground">{item.definition}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
