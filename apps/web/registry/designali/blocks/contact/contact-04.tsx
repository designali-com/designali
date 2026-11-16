import {
  ArrowRight,
  Clock,
  Mail,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"

const team = [
  { initials: "AI", name: "Ali Imam", role: "Founder & design engineer" },
  { initials: "SD", name: "Studio Designer", role: "UI/UX design" },
  { initials: "DV", name: "Studio Developer", role: "Next.js development" },
]

export default function Contact04() {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-[1.2fr_1fr]">
        <div className="flex flex-col justify-center gap-8 border-b px-6 py-20 lg:border-e lg:border-b-0 lg:px-16 lg:py-28">
          <h2 className="text-5xl leading-[1.05] font-semibold tracking-tight md:text-7xl">
            Questions?
            <br />
            <span className="text-muted-foreground">We&apos;re all ears.</span>
          </h2>
          <form className="flex w-full max-w-lg flex-col gap-2 sm:flex-row">
            <div className="relative flex-1">
              <Mail className="absolute start-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="email"
                placeholder="you@example.com"
                className="h-12 ps-9 text-sm"
              />
            </div>
            <Button type="submit" size="lg">
              Request a call
              <ArrowRight />
            </Button>
          </form>
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="size-4" />
            Available Monday to Friday, 9am &ndash; 6pm CET
          </p>
        </div>

        <div className="flex flex-col bg-muted/40">
          <p className="border-b px-6 py-4 text-xs tracking-widest text-muted-foreground uppercase lg:px-10">
            The people you&apos;ll talk to
          </p>
          {team.map((person) => (
            <div
              key={person.name}
              className="flex items-center gap-5 border-b px-6 py-8 last:border-b-0 lg:px-10"
            >
              <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/80 to-primary/30 text-sm font-semibold text-primary-foreground">
                {person.initials}
              </span>
              <div>
                <p className="font-medium">{person.name}</p>
                <p className="text-sm text-muted-foreground">{person.role}</p>
              </div>
              <span className="ms-auto flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="size-2 rounded-full bg-emerald-500" />
                Online
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
