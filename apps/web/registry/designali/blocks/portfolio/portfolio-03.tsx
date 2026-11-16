import { ArrowRight } from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Macbook } from "@/registry/designali/ui/apple/macbook"
import { CounterNumber } from "@/registry/designali/ui/counter-number"

const results = [
  { value: 460, label: "Production-ready blocks shipped" },
  { value: 4000, label: "Icons in @designali/icons" },
  { value: 240, label: "Landing pages and templates" },
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
            <div className="relative flex h-full items-center justify-center p-6">
              <Macbook
                variant="macbook-pro"
                size="md"
                color="silver"
                className="max-w-full"
              >
                <img
                  src="/images/templates/dalim-ui-old.jpg"
                  alt="Dalim UI rebuilt as the Designali block library"
                  className="size-full object-cover object-top"
                />
              </Macbook>
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
                  <dt className="text-xs text-muted-foreground">
                    {item.label}
                  </dt>
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
            <div
              key={result.label}
              className="border-border p-6 not-last:border-b sm:not-last:border-r sm:not-last:border-b-0"
            >
              <CounterNumber
                value={result.value}
                suffix="+"
                size="lg"
                className="font-semibold tracking-tight"
              />
              <p className="mt-1 text-sm text-muted-foreground">
                {result.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
