import {
  ArrowRight,
  Mail,
  CalendarDays,
  Globe,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Textarea } from "@workspace/ui/components/textarea"

const details = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@designali.com",
    href: "mailto:hello@designali.com",
  },
  {
    icon: CalendarDays,
    label: "Book a call",
    value: "30 minutes with Ali Imam",
    href: "https://cal.com/aliimam/30min",
  },
  {
    icon: Globe,
    label: "Studio",
    value: "www.designali.com",
    href: "https://www.designali.com",
  },
]

export default function Contact01() {
  return (
    <section className="w-full border-y bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:gap-20">
        <div className="flex flex-col justify-between gap-10">
          <div className="space-y-5">
            <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
              Contact
            </p>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Let&apos;s design and build something together.
            </h2>
            <p className="max-w-md text-muted-foreground">
              Tell us about your product, timeline and budget. Ali Imam
              replies within one business day.
            </p>
          </div>

          <ul className="divide-y border-y">
            {details.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="group flex items-center gap-4 py-4 transition-colors hover:text-foreground"
                >
                  <item.icon className="size-4 text-muted-foreground" />
                  <span className="w-16 text-xs text-muted-foreground uppercase">
                    {item.label}
                  </span>
                  <span className="text-sm font-medium">{item.value}</span>
                  <ArrowRight className="ms-auto size-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form className="space-y-5 border bg-card p-6 md:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="contact-01-first">First name</Label>
              <Input id="contact-01-first" placeholder="Ali" className="h-10" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-01-last">Last name</Label>
              <Input
                id="contact-01-last"
                placeholder="Imam"
                className="h-10"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-01-email">Work email</Label>
            <Input
              id="contact-01-email"
              type="email"
              placeholder="you@example.com"
              className="h-10"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-01-message">Project details</Label>
            <Textarea
              id="contact-01-message"
              placeholder="We need a brand identity and a Next.js website for..."
              className="min-h-36"
            />
          </div>
          <Button type="submit" size="lg" className="w-full">
            Send message
            <ArrowRight />
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            By submitting you agree to our privacy policy.
          </p>
        </form>
      </div>
    </section>
  )
}
