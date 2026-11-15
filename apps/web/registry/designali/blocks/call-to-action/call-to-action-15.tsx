import { ArrowRight } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const stats = [
  ["2.1M", "invoices sent"],
  ["$4.8B", "processed in 2025"],
  ["38", "currencies"],
  ["11 days", "faster payouts"],
]

export default function CallToAction15() {
  return (
    <section className="w-full bg-primary px-6 py-20 text-primary-foreground md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <h2 className="text-4xl font-medium tracking-tight md:text-6xl">
            Get paid like the companies ten times your size.
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Button
              size="lg"
              variant="secondary"
              nativeButton={false}
              render={<a href="#" />}
            >
              Open a free account
              <ArrowRight data-icon="inline-end" />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              nativeButton={false}
              render={<a href="#" />}
            >
              See pricing
            </Button>
          </div>
        </div>
        <dl className="mt-16 grid grid-cols-2 gap-px border-t border-primary-foreground/20 bg-primary-foreground/20 md:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={label} className="bg-primary py-8 pr-4 pl-0 [&:nth-child(even)]:pl-6 md:[&:not(:first-child)]:pl-6">
              <dt className="sr-only">{label}</dt>
              <dd className="text-3xl font-medium tracking-tight md:text-4xl">
                {value}
              </dd>
              <dd className="mt-1 text-sm text-primary-foreground/70">{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
