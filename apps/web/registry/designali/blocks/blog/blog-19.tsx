import {
  ArrowLeft,
  ArrowRight,
} from "@designali/icons"

const prev = { title: "Why we retired the old Dalim sites", date: "Oct 30" }
const next = { title: "The designali.com pricing page, line by line", date: "Nov 18" }

const related = [
  { tag: "Strategy", title: "Saying no to a client feature, kindly", read: 7, initials: "AI", tone: "bg-chart-1" },
  { tag: "Research", title: "The client questions that shape every Designali project", read: 10, initials: "DS", tone: "bg-chart-2" },
  { tag: "Strategy", title: "Retiring a product line with grace", read: 8, initials: "AI", tone: "bg-chart-4" },
]

export default function Blog19() {
  return (
    <section className="w-full border-t bg-background py-16 text-foreground md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 border-b pb-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex size-14 items-center justify-center rounded-full bg-foreground text-base font-semibold text-background">
              AI
            </span>
            <div>
              <p className="text-xs text-muted-foreground">Written by</p>
              <p className="font-medium">Ali Imam</p>
              <p className="text-sm text-muted-foreground">Founder of Designali. Writes about design, code and saying no.</p>
            </div>
          </div>
          <a href="#" className="text-sm underline underline-offset-4 hover:text-muted-foreground">
            More from Ali
          </a>
        </div>

        <div className="grid gap-px border-b bg-border sm:grid-cols-2">
          <a href="#" className="group bg-background py-8 sm:pr-8">
            <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
              <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />
              Previous post · {prev.date}
            </span>
            <p className="mt-2 text-lg font-medium group-hover:underline group-hover:underline-offset-4">
              {prev.title}
            </p>
          </a>
          <a href="#" className="group bg-background py-8 sm:pl-8 sm:text-right">
            <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
              Next post · {next.date}
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </span>
            <p className="mt-2 text-lg font-medium group-hover:underline group-hover:underline-offset-4">
              {next.title}
            </p>
          </a>
        </div>

        <h2 className="mt-14 text-xs tracking-widest text-muted-foreground uppercase">Keep reading</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {related.map((r) => (
            <a
              key={r.title}
              href="#"
              className="group flex flex-col justify-between gap-8 border bg-card p-6 transition-colors hover:bg-muted/50"
            >
              <div>
                <p className="text-xs text-muted-foreground">{r.tag}</p>
                <p className="mt-2 text-lg leading-snug font-medium">{r.title}</p>
              </div>
              <div className="flex items-center justify-between">
                <span
                  className={`flex size-8 items-center justify-center rounded-full text-[10px] font-semibold text-background ${r.tone}`}
                >
                  {r.initials}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  {r.read} min
                  <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
