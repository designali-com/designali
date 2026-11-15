import { CheckCircle2, FileText, Search, Send, Wand2 } from "lucide-react"

const steps = [
  {
    icon: FileText,
    title: "Drop in your brief",
    body: "Paste a doc, a Figma link or a messy Slack thread. Quill extracts goals, audience and constraints.",
    tag: "Input",
  },
  {
    icon: Search,
    title: "Research runs in parallel",
    body: "Competitor pages, search intent and your own past content are pulled into one source panel with citations.",
    tag: "2 to 4 min",
  },
  {
    icon: Wand2,
    title: "Drafts in your voice",
    body: "Three outlines and a first draft, written against your style guide and banned-phrase list.",
    tag: "Review",
  },
  {
    icon: CheckCircle2,
    title: "Approve with comments",
    body: "Editors leave inline notes; Quill revises only the flagged paragraphs and tracks every change.",
    tag: "Team",
  },
  {
    icon: Send,
    title: "Publish everywhere",
    body: "Push to your CMS, newsletter tool and social scheduler with per-channel formatting applied.",
    tag: "Output",
  },
]

export default function Features13() {
  return (
    <section className="w-full bg-muted/30 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <p className="text-center text-xs tracking-[0.2em] text-muted-foreground uppercase">
          How it works
        </p>
        <h2 className="mt-4 text-center text-3xl font-medium tracking-tight md:text-5xl">
          From brief to published in one afternoon.
        </h2>
        <ol className="relative mt-16">
          <span className="absolute top-2 bottom-2 left-5 w-px bg-border md:left-1/2" aria-hidden />
          {steps.map(({ icon: Icon, title, body, tag }, i) => (
            <li
              key={title}
              className="relative grid grid-cols-[40px_1fr] gap-5 pb-12 last:pb-0 md:grid-cols-[1fr_40px_1fr] md:gap-8"
            >
              <div className={i % 2 === 0 ? "hidden md:block" : "hidden text-right md:block"}>
                {i % 2 === 1 && (
                  <>
                    <span className="text-xs text-muted-foreground">{tag}</span>
                    <h3 className="mt-1 text-lg font-medium">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
                  </>
                )}
              </div>
              <span className="relative z-10 flex size-10 items-center justify-center border border-border bg-background">
                <Icon className="size-4" />
              </span>
              <div className={i % 2 === 1 ? "md:invisible" : ""}>
                <span className="text-xs text-muted-foreground">{tag}</span>
                <h3 className="mt-1 text-lg font-medium">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
