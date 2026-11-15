import { Check, X } from "lucide-react"

const guidelines = [
  {
    topic: "Buttons",
    do: "Lead with a verb that says exactly what happens: Save draft, Send invoice.",
    dont: "Use vague labels like OK, Submit or Click here.",
  },
  {
    topic: "Error messages",
    do: "Say what went wrong and how to fix it, in one or two short sentences.",
    dont: "Blame the user or show raw error codes without context.",
  },
  {
    topic: "Empty states",
    do: "Explain what will appear here and offer the first action.",
    dont: "Leave a blank screen or a lone illustration with no next step.",
  },
  {
    topic: "Numbers",
    do: "Use numerals for counts and keep units consistent: 3 files, 12 MB.",
    dont: "Mix written and numeric forms in the same view.",
  },
  {
    topic: "Tone",
    do: "Write like a helpful colleague: plain, warm and direct.",
    dont: "Add exclamation marks to routine confirmations.",
  },
]

export default function Lists18() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs tracking-widest text-muted-foreground uppercase">Content guidelines</p>
        <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
          Do this, not that.
        </h2>

        <div className="mt-12 hidden grid-cols-[180px_1fr_1fr] gap-6 border-b border-foreground pb-3 text-xs font-medium tracking-widest uppercase md:grid">
          <span className="text-muted-foreground">Topic</span>
          <span className="inline-flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
            <Check className="size-3.5" /> Do
          </span>
          <span className="inline-flex items-center gap-2 text-rose-700 dark:text-rose-400">
            <X className="size-3.5" /> Don&apos;t
          </span>
        </div>

        <ul className="mt-8 divide-y divide-border md:mt-0">
          {guidelines.map((item) => (
            <li key={item.topic} className="grid gap-4 py-6 md:grid-cols-[180px_1fr_1fr] md:gap-6">
              <h3 className="font-medium">{item.topic}</h3>
              <p className="flex gap-3 border-l-2 border-emerald-500 bg-emerald-50 p-4 text-sm leading-6 dark:bg-emerald-500/10">
                <Check className="mt-1 size-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                {item.do}
              </p>
              <p className="flex gap-3 border-l-2 border-rose-500 bg-rose-50 p-4 text-sm leading-6 dark:bg-rose-500/10">
                <X className="mt-1 size-4 shrink-0 text-rose-600 dark:text-rose-400" />
                {item.dont}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
