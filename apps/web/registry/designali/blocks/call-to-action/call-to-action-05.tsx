import { ArrowUpRight } from "lucide-react"

const paths = [
  {
    label: "For founders",
    title: "Launch a brand in six weeks",
    body: "Identity, website and launch assets delivered as one coordinated sprint.",
  },
  {
    label: "For product teams",
    title: "Extend your design capacity",
    body: "Embedded designers who work inside your tools, rituals and roadmap.",
  },
  {
    label: "For agencies",
    title: "White-label production",
    body: "Overflow capacity for CGI, motion and front-end builds under your name.",
  },
]

export default function CallToAction05() {
  return (
    <section className="w-full bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-xl text-3xl font-medium tracking-tight text-foreground md:text-5xl">
            Pick the way you want to work with us.
          </h2>
          <p className="max-w-sm text-sm text-muted-foreground">
            Every engagement starts with a 30-minute call. No decks, no
            pressure.
          </p>
        </div>
        <div className="mt-12 grid border-t border-l border-border md:grid-cols-3">
          {paths.map((path) => (
            <a
              key={path.title}
              href="#"
              className="group flex min-h-64 flex-col justify-between border-r border-b border-border p-8 transition-colors hover:bg-foreground hover:text-background"
            >
              <div className="flex items-center justify-between text-xs tracking-widest uppercase text-muted-foreground group-hover:text-background/70">
                {path.label}
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div>
                <h3 className="text-xl font-medium">{path.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground group-hover:text-background/70">
                  {path.body}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
