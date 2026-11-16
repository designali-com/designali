import {
  ArrowRight,
  ShieldCheck,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Textarea } from "@workspace/ui/components/textarea"

const stats = [
  { value: "1 day", label: "Median reply" },
  { value: "460+", label: "Blocks shipped" },
  { value: "4.9/5", label: "Client rating" },
]

export default function Contact16() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-20 md:py-28">
      <div aria-hidden className="absolute inset-0">
        <div className="absolute -top-24 -left-24 size-[28rem] rounded-full bg-sky-300/40 blur-3xl dark:bg-sky-500/20" />
        <div className="absolute -right-24 -bottom-32 size-[30rem] rounded-full bg-violet-400/40 blur-3xl dark:bg-violet-600/25" />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 opacity-40 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />

      <div className="relative mx-auto max-w-xl px-6">
        <div className="border bg-background/80 p-6 shadow-2xl shadow-black/5 backdrop-blur md:p-10">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Tell us what you&apos;re building
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Designali partners with founders and teams on product design,
            brand and engineering.
          </p>

          <dl className="mt-8 grid grid-cols-3 border-y">
            {stats.map((stat) => (
              <div key={stat.label} className="py-4 text-center not-last:border-e">
                <dt className="text-[11px] text-muted-foreground uppercase">{stat.label}</dt>
                <dd className="mt-1 text-lg font-semibold">{stat.value}</dd>
              </div>
            ))}
          </dl>

          <form className="mt-8 space-y-5">
            <div className="space-y-2">
              <Label htmlFor="contact-16-email">Email</Label>
              <Input id="contact-16-email" type="email" placeholder="you@example.com" className="h-11" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-16-link">Website or pitch deck</Label>
              <Input id="contact-16-link" type="url" placeholder="https://" className="h-11" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-16-brief">The short version</Label>
              <Textarea
                id="contact-16-brief"
                placeholder="We're a small team launching a SaaS product and need a brand and website..."
                className="min-h-28"
              />
            </div>
            <Button type="submit" size="lg" className="w-full">
              Send brief
              <ArrowRight />
            </Button>
            <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="size-3.5" />
              Happy to sign an NDA before you share details.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
