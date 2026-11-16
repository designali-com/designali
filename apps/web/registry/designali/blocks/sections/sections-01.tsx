import { CounterNumber } from "@/registry/designali/ui/counter-number"

const stats = [
  { value: 460, suffix: "+", label: "Blocks on designali.com" },
  { value: 240, suffix: "+", label: "Landing pages" },
  { value: 2300, suffix: "+", label: "UI design examples" },
  { value: 4000, suffix: "+", label: "Icons in @designali/icons" },
]

export default function Sections01() {
  return (
    <section className="w-full border-y border-border bg-background">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-12">
        <div className="border-b border-border p-8 md:p-12 lg:col-span-4 lg:border-r lg:border-b-0">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            (01) About the studio
          </p>
        </div>
        <div className="p-8 md:p-12 lg:col-span-8">
          <p className="text-2xl leading-snug font-medium tracking-tight md:text-4xl">
            Designali is a design and development studio where thoughtful
            design meets production-ready code.{" "}
            <span className="text-muted-foreground">
              design se code tak — from the first sketch to the shipped
              product.
            </span>
          </p>
          <div className="mt-10 grid gap-6 text-sm leading-6 text-muted-foreground md:grid-cols-2">
            <p>
              Founded by Ali Imam, a design engineer who designs and codes.
              Every engagement covers brand identity, UI/UX design and the
              Next.js build, so nothing gets lost in handoff.
            </p>
            <p>
              Alongside client work we publish templates, blocks, icons, logos
              and illustrations on designali.com for designers and developers
              to use in their own products.
            </p>
          </div>
        </div>
      </div>
      <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-px border-t border-border bg-border md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-background p-8">
            <dt className="text-xs text-muted-foreground">{stat.label}</dt>
            <dd className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              <CounterNumber
                value={stat.value}
                suffix={stat.suffix}
                className="text-4xl font-semibold tracking-tight md:text-5xl"
              />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
