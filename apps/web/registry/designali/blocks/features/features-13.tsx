import {
  CircleCheck as CheckCircle2,
  FileText,
  Search,
  Send,
  WandSparkles as Wand2,
} from "@designali/icons"

const steps = [
  {
    icon: FileText,
    title: "Share your brief",
    body: "Send a doc, a Figma link or a few notes to hello@designali.com. Ali Imam reviews goals, audience and constraints.",
    tag: "Input",
  },
  {
    icon: Search,
    title: "Strategy and direction",
    body: "We research your market and shape brand positioning and creative direction before any pixels are pushed.",
    tag: "Week 1",
  },
  {
    icon: Wand2,
    title: "Design in Figma",
    body: "Brand identity and UI/UX screens are designed in Figma with a reusable design system.",
    tag: "Review",
  },
  {
    icon: CheckCircle2,
    title: "Review together",
    body: "You leave feedback on each screen and we refine the details until everything feels right.",
    tag: "Team",
  },
  {
    icon: Send,
    title: "Build and launch",
    body: "Designs become production-ready Next.js code with Tailwind CSS, deployed on Vercel.",
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
          From brief to launch with Designali.
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
