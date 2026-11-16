import { ArrowRight } from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { IPhone } from "@/registry/designali/ui/apple/iphone"
import { Macbook } from "@/registry/designali/ui/apple/macbook"

const meta = [
  { label: "Client", value: "Designali (template)" },
  { label: "Sector", value: "Hospitality" },
  { label: "Scope", value: "Web, mobile, booking" },
  { label: "Status", value: "Live on designali.com" },
]

export default function Portfolio18() {
  return (
    <section className="w-full overflow-hidden bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 border border-border px-3 py-1 text-xs">
            <span className="size-1.5 rounded-full bg-primary" />
            Featured project
          </span>
          <h2 className="mt-6 text-4xl leading-[1.05] font-medium tracking-tight md:text-6xl">
            A booking flow that works on every screen
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            The Designali Resort template ships one booking flow for desktop,
            tablet and mobile — designed in Figma, built with Next.js.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              size="lg"
              nativeButton={false}
              render={<a href="/templates" />}
            >
              View the template
              <ArrowRight />
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<a href="/work" />}
            >
              Next project
            </Button>
          </div>
        </div>

        <div className="relative mt-14 flex justify-center overflow-hidden border border-border bg-gradient-to-b from-primary/10 to-chart-1/60 px-4 pt-10 sm:px-10 md:pt-16 dark:from-chart-5 dark:to-chart-4/60">
          <Macbook
            variant="macbook-pro"
            size="lg"
            color="silver"
            className="max-w-full"
          >
            <img
              src="/images/templates/resort.jpg"
              alt="Designali Resort template on desktop"
              className="size-full object-cover object-top"
            />
          </Macbook>

          <div className="absolute right-4 bottom-4 hidden sm:right-8 md:block lg:right-16">
            <IPhone size="sm" color="black">
              <img
                src="/images/templates/resort.jpg"
                alt="Designali Resort template on mobile"
                className="size-full object-cover object-left-top"
              />
            </IPhone>
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-px border-x border-b border-border bg-border md:grid-cols-4">
          {meta.map((item) => (
            <div key={item.label} className="bg-background p-5">
              <dt className="text-xs text-muted-foreground">{item.label}</dt>
              <dd className="mt-1 text-sm font-medium">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
