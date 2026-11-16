import { CounterNumber } from "@/registry/designali/ui/counter-number"

const stats = [
  { value: 460, suffix: "+", label: "Designali blocks" },
  { value: 2300, suffix: "+", label: "UI design examples" },
  { value: 4000, suffix: "+", label: "Icons in @designali/icons" },
]

export default function Testimonials06() {
  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid border border-border lg:grid-cols-2">
          <div className="flex flex-col justify-between border-b border-border p-8 md:p-12 lg:border-r lg:border-b-0">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Case study &middot; Designali client
            </p>
            <blockquote className="mt-8 text-2xl leading-snug font-medium tracking-tight md:text-3xl">
              &ldquo;Designali rolled out a single design language across all
              our internal tools, then shipped it as Next.js code. Our team
              finally designs and builds from the same system.&rdquo;
            </blockquote>
            <div className="mt-10 flex items-center gap-4">
              <span className="flex size-14 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                JO
              </span>
              <div>
                <p className="font-medium">Jonas</p>
                <p className="text-sm text-muted-foreground">
                  Director of Product, Designali client
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-3 divide-y divide-border">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-end justify-between p-8 md:px-12"
              >
                <span className="text-sm text-muted-foreground">
                  {stat.label}
                </span>
                <CounterNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  className="text-4xl font-semibold tracking-tighter md:text-5xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
