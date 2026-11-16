const parts = [
  {
    part: "Part one",
    title: "Foundations",
    chapters: [
      { title: "Why systems fail", page: 3, minutes: 14 },
      { title: "Tokens before components", page: 21, minutes: 22 },
      { title: "A vocabulary for spacing", page: 47, minutes: 18 },
    ],
  },
  {
    part: "Part two",
    title: "Building",
    chapters: [
      { title: "Primitives that compose", page: 69, minutes: 26 },
      { title: "Variants without the sprawl", page: 98, minutes: 19 },
      { title: "Documentation people read", page: 121, minutes: 16 },
      { title: "Testing the visual layer", page: 140, minutes: 21 },
    ],
  },
  {
    part: "Part three",
    title: "Scaling",
    chapters: [
      { title: "Governance without gatekeeping", page: 165, minutes: 24 },
      { title: "Versioning and deprecation", page: 193, minutes: 17 },
      { title: "Measuring adoption", page: 214, minutes: 15 },
    ],
  },
]

const offsets = parts.map((_, i) =>
  parts.slice(0, i).reduce((sum, part) => sum + part.chapters.length, 0)
)

export default function Lists09() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[360px_1fr]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="aspect-[3/4] max-w-[260px] bg-gradient-to-br from-stone-900 to-stone-700 p-6 text-stone-100 shadow-2xl dark:from-stone-200 dark:to-stone-400 dark:text-stone-900">
            <div className="flex h-full flex-col justify-between border border-current/30 p-4">
              <p className="font-mono text-[10px] tracking-widest uppercase opacity-70">A Designali guide</p>
              <div>
                <p className="text-3xl leading-tight font-semibold tracking-tight">Design se code tak</p>
                <p className="mt-2 text-xs opacity-70">Ali Imam</p>
              </div>
            </div>
          </div>
          <h2 className="mt-8 text-3xl font-semibold tracking-tight">Contents</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Ten chapters, 236 pages. Read in order or jump to what you need this week.
          </p>
        </div>

        <div className="space-y-12">
          {parts.map((part, partIndex) => (
            <div key={part.title}>
              <div className="flex items-baseline gap-4 border-b border-foreground pb-3">
                <span className="font-mono text-xs text-muted-foreground uppercase">{part.part}</span>
                <h3 className="text-xl font-medium tracking-tight">{part.title}</h3>
              </div>
              <ol>
                {part.chapters.map((chapter, chapterIndex) => {
                  const n = offsets[partIndex]! + chapterIndex + 1
                  return (
                    <li key={chapter.title}>
                      <a
                        href="#"
                        className="group grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 border-b border-border py-5 transition-colors hover:bg-muted/40"
                      >
                        <span className="text-3xl font-semibold tracking-tighter text-muted-foreground/40 group-hover:text-foreground">
                          {String(n).padStart(2, "0")}
                        </span>
                        <span>
                          <span className="block text-base font-medium md:text-lg">{chapter.title}</span>
                          <span className="text-xs text-muted-foreground">{chapter.minutes} min read</span>
                        </span>
                        <span className="font-mono text-sm text-muted-foreground">p.{chapter.page}</span>
                      </a>
                    </li>
                  )
                })}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
