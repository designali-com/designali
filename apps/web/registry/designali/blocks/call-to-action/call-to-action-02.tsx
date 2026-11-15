import { ArrowRight } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

export default function CallToAction02() {
  return (
    <section className="w-full border-y border-border bg-background">
      <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-[1.4fr_1fr]">
        <div className="border-b border-border px-6 py-16 md:border-r md:border-b-0 md:px-12 md:py-24">
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Ready when you are
          </p>
          <h2 className="mt-6 max-w-lg text-4xl font-medium tracking-tight text-foreground md:text-6xl">
            Ship your next launch in weeks, not quarters.
          </h2>
        </div>
        <div className="flex flex-col justify-end gap-8 px-6 py-16 md:px-12 md:py-24">
          <p className="text-sm leading-7 text-muted-foreground">
            Bring a brief, a deadline, or just a rough idea. We scope it in
            one call, share a fixed quote within 48 hours, and start the
            following Monday.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" render={<a href="#" />}>
              Book a scoping call
              <ArrowRight />
            </Button>
            <Button size="lg" variant="outline" render={<a href="#" />}>
              See our process
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
