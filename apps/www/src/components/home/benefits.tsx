import { Section } from "./section-shell"
import {
  Gauge, KanbanSquare, PauseCircle, Repeat, ShieldCheck, Sparkles,
} from "lucide-react"

const benefits = [
  { icon: KanbanSquare, title: "Design board", desc: "Manage your queue in one shared board. Add requests, reorder, track progress." },
  { icon: Repeat, title: "Fixed monthly rate", desc: "Pay the same flat price each month. No hourly billing, no scope creep." },
  { icon: Gauge, title: "Fast delivery", desc: "Requests come back one at a time, in about two days on average." },
  { icon: ShieldCheck, title: "Senior-level quality", desc: "You work with the designer who does the work, never a hand-off to juniors." },
  { icon: PauseCircle, title: "Flexible", desc: "Scale up, pause or cancel when priorities change. No long-term lock-in." },
  { icon: Sparkles, title: "Yours, fully", desc: "Every design is made for you, and you own all of it, source files included." },
]

export function Benefits() {
  return (
    <Section title="Why a subscription" eyebrow="Better than freelancers and agencies">
      <div className="grid border border-dotted sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="flex flex-col gap-2 border-b border-dotted p-6 sm:[&:nth-child(2n)]:border-l lg:[&:nth-child(n)]:border-l lg:[&:nth-child(3n+1)]:border-l-0 lg:[&:nth-last-child(-n+3)]:border-b-0"
          >
            <b.icon className="size-5 text-primary" />
            <h3 className="font-serif text-2xl">{b.title}</h3>
            <p className="text-sm text-muted-foreground">{b.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
