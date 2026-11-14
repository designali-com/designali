import Link from "next/link"
import { Check } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"

import { Section } from "./section-shell"

const included = [
  "One active request at a time",
  "Avg. 48-hour turnaround",
  "Brand, web, UI/UX and motion design",
  "Framer, Webflow or Next.js development",
  "Unlimited revisions",
  "Unlimited brands",
  "Async updates and a shared design board",
  "Full source files, 100% yours",
]

export function Pricing() {
  return (
    <Section id="pricing" title="Pricing" eyebrow="One plan. No surprises.">
      <div className="grid border border-dotted md:grid-cols-2">
        <div className="flex flex-col gap-4 border-b border-dotted p-8 md:border-r md:border-b-0">
          <Badge variant="secondary" className="w-fit">
            Design subscription
          </Badge>
          <h3 className="font-serif text-4xl md:text-5xl">
            One subscription. Endless possibilities.
          </h3>
          <p className="text-sm text-muted-foreground">
            Subscribe, request as much design as you need, one at a time, and
            get it back fast. Pause or cancel whenever you like.
          </p>
          <div className="mt-auto pt-6">
            <div className="text-6xl font-bold tracking-tight">
              $2,000
              <span className="ml-1 text-base font-normal text-muted-foreground">
                / month
              </span>
            </div>
            <Button
              className="mt-6 w-full sm:w-auto"
              size="lg"
              nativeButton={false}
              render={<Link target="_blank" href="https://cal.com/designali/30min" />}
            >
              Start today
            </Button>
            <p className="mt-3 text-xs text-muted-foreground">
              Pause or cancel anytime. Not sure yet? Book a free intro call.
            </p>
          </div>
        </div>

        <ul className="flex flex-col gap-3 p-8 text-sm">
          <li className="pb-2 text-xs text-muted-foreground">What&apos;s included</li>
          {included.map((f) => (
            <li key={f} className="flex items-center gap-2">
              <Check className="size-4 shrink-0 text-primary" />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
