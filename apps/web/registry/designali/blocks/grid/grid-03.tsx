import { ArrowUpRight } from "lucide-react"

const resources = [
  { type: "Guide", title: "Getting started with tokens", time: "8 min read" },
  { type: "Video", title: "Building a responsive grid from scratch", time: "14 min" },
  { type: "Template", title: "Product launch checklist", time: "Notion" },
  { type: "Guide", title: "Accessible colour contrast in practice", time: "11 min read" },
  { type: "Case study", title: "How Lumen cut handoff time in half", time: "6 min read" },
  { type: "Video", title: "Prototyping micro-interactions", time: "22 min" },
  { type: "Template", title: "Design critique agenda", time: "Google Docs" },
  { type: "Guide", title: "Naming components so they last", time: "5 min read" },
  { type: "Case study", title: "A design system for 40 product teams", time: "12 min read" },
]

const filters = ["All", "Guide", "Video", "Template", "Case study"]

export default function Grid03() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="text-4xl font-semibold tracking-tight">Resource library</h2>
          <nav className="flex flex-wrap border border-border">
            {filters.map((filter, index) => (
              <a
                key={filter}
                href="#"
                className={`border-border px-3 py-2 text-xs not-last:border-r ${
                  index === 0
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {filter}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 grid border-t border-l border-border sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <a
              key={resource.title}
              href="#"
              className="group flex min-h-48 flex-col justify-between border-r border-b border-border p-6 transition-colors hover:bg-muted/50"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-medium tracking-widest text-muted-foreground uppercase">
                  {resource.type}
                </span>
                <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
              </div>
              <div>
                <h3 className="text-lg leading-snug font-medium">{resource.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{resource.time}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
