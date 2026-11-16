import {
  ArrowRight,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

const results = [
  { value: "460+", label: "Production-ready blocks shipped" },
  { value: "4000+", label: "Icons in @designali/icons" },
  { value: "240+", label: "Landing pages and templates" },
]

const details = [
  { label: "Client", value: "Designali (in-house)" },
  { label: "Timeline", value: "14 weeks" },
  { label: "Team", value: "Ali Imam, design and code" },
  { label: "Services", value: "UI/UX, design system, Next.js" },
]

export default function Portfolio03() {
  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid border border-border lg:grid-cols-2">
          <div className="relative min-h-80 overflow-hidden border-b border-border bg-muted lg:border-r lg:border-b-0">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--chart-2),transparent_60%)] opacity-60" />
            <div className="absolute inset-x-10 top-12 bottom-0 border border-b-0 border-border bg-background p-4 shadow-2xl">
              <div className="mb-4 flex gap-1.5">
                <span className="size-2 rounded-full bg-muted-foreground/40" />
                <span className="size-2 rounded-full bg-muted-foreground/40" />
                <span className="size-2 rounded-full bg-muted-foreground/40" />
              </div>
              <div className="h-3 w-1/3 bg-muted" />
              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="h-16 bg-muted" />
                <div className="h-16 bg-muted" />
                <div className="h-16 bg-primary/20" />
              </div>
              <div className="mt-4 h-24 bg-muted" />
            </div>
          </div>

          <div className="flex flex-col p-8 md:p-12">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Case study
            </p>
            <h2 className="mt-4 text-3xl leading-tight font-medium tracking-tight md:text-4xl">
              Turning Dalim UI into the Designali block library
            </h2>
            <p className="mt-4 text-muted-foreground">
              Dalim UI started as a set of components for designers who code. We
              rebuilt it as Designali — templates, blocks and icons with
              production-ready React and Tailwind CSS. Design se code tak.
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-border pt-6 text-sm">
              {details.map((item) => (
                <div key={item.label}>
                  <dt className="text-xs text-muted-foreground">{item.label}</dt>
                  <dd className="mt-1">{item.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-auto pt-8">
              <Button nativeButton={false} render={<a href="/work" />}>
                Read the case study
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid border-x border-b border-border sm:grid-cols-3">
          {results.map((result) => (
            <div key={result.label} className="border-border p-6 not-last:border-b sm:not-last:border-r sm:not-last:border-b-0">
              <p className="text-3xl font-semibold tracking-tight">{result.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{result.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
