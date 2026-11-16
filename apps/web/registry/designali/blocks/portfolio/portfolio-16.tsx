import {
  Award,
  Mic,
  Newspaper,
} from "@designali/icons"

const awards = [
  { year: "Now", name: "460+ blocks", detail: "Live on designali.com", project: "Designali" },
  { year: "Now", name: "4000+ icons", detail: "Published as @designali/icons", project: "Designali" },
  { year: "Live", name: "240+ landing pages", detail: "Templates for Next.js", project: "Designali" },
  { year: "Live", name: "2300+ UI designs", detail: "UI examples to remix", project: "Designali" },
  { year: "Archive", name: "Dalim UI", detail: "Became the Designali block library", project: "Dalim" },
]

const press = [
  { outlet: "Designali Blog", title: "Design se code tak: why I design and code" },
  { outlet: "Designali Blog", title: "Building 460+ blocks with Next.js and Tailwind" },
  { outlet: "Designali Blog", title: "From Dalim to Designali" },
]

const talks = [
  { event: "Designali Live", city: "Online", topic: "Design systems that ship as code" },
  { event: "Designali Live", city: "Online", topic: "Icons on one grid, one stroke" },
]

export default function Portfolio16() {
  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Award className="size-5" />
              <h2 className="text-2xl font-medium tracking-tight md:text-3xl">Milestones</h2>
              <span className="ml-auto font-sans text-xs text-muted-foreground">
                {awards.length} of 31
              </span>
            </div>
            <ul className="mt-6 border-t border-border">
              {awards.map((award) => (
                <li
                  key={award.name + award.year}
                  className="grid grid-cols-[3.5rem_1fr] gap-x-4 gap-y-1 border-b border-border py-5 sm:grid-cols-[4rem_1fr_1fr_auto] sm:items-center"
                >
                  <span className="row-span-2 font-sans text-sm text-muted-foreground sm:row-span-1">
                    {award.year}
                  </span>
                  <span className="font-medium">{award.name}</span>
                  <span className="text-sm text-muted-foreground">{award.detail}</span>
                  <span className="col-start-2 text-xs text-muted-foreground sm:col-start-auto sm:text-right">
                    {award.project}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-3">
                <Newspaper className="size-4" />
                <h3 className="text-sm font-medium">On the blog</h3>
              </div>
              <ul className="mt-4 space-y-4">
                {press.map((item) => (
                  <li key={item.title}>
                    <a href="#" className="group block border-l-2 border-border pl-4 transition-colors hover:border-foreground">
                      <p className="text-xs text-muted-foreground">{item.outlet}</p>
                      <p className="mt-1 text-sm font-medium group-hover:underline">
                        &ldquo;{item.title}&rdquo;
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <Mic className="size-4" />
                <h3 className="text-sm font-medium">Speaking</h3>
              </div>
              <ul className="mt-4 space-y-3">
                {talks.map((talk) => (
                  <li key={talk.event} className="bg-muted p-4">
                    <p className="text-sm font-medium">{talk.topic}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {talk.event}, {talk.city}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
