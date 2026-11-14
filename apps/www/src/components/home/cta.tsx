import Link from "next/link"

import { Button } from "@workspace/ui/components/button"

export function Cta() {
  return (
    <section className="mx-auto w-full max-w-6xl border-x border-t border-dotted p-2">
      <div className="flex flex-col items-center gap-6 border border-dotted px-6 py-20 text-center">
        <h2 className="max-w-2xl font-serif text-4xl md:text-6xl">
          Have a project in mind? Let&apos;s make it unforgettable.
        </h2>
        <p className="max-w-md text-sm text-muted-foreground">
          Book a free 30-minute call and get a clear plan, timeline and quote.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Button nativeButton={false} render={<Link target="_blank" href="https://cal.com/designali/30min" />}>
            Book a Call
          </Button>
          <Button variant="outline" nativeButton={false} render={<Link href="mailto:hello@designali.com" />}>
            hello@designali.com
          </Button>
        </div>
      </div>
    </section>
  )
}
