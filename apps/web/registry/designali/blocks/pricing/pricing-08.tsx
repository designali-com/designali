import {
  ArrowRight,
} from "@designali/icons"

const packages = [
  {
    name: "Brand sprint",
    price: "$4,800",
    duration: "2 weeks",
    summary:
      "Logo, colour, type and a one-page brand guide, designed by Ali Imam.",
  },
  {
    name: "Website build",
    price: "$12,500",
    duration: "5 weeks",
    summary: "UI/UX design and a production-ready Next.js site built on Designali blocks.",
  },
  {
    name: "Design partner",
    price: "$6,900/mo",
    duration: "Ongoing",
    summary:
      "Designali as your design and development partner, one active request at a time.",
  },
]

export default function Pricing08() {
  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Designali studio packages.
          </h2>
          <p className="text-muted-foreground md:text-right">
            Fixed scope, fixed price, no surprises. Every Designali engagement
            starts with a free 30-minute call.
          </p>
        </div>
        <div className="mt-12 border-t border-border">
          {packages.map((pkg, i) => (
            <a
              key={pkg.name}
              href="/contact"
              className="group grid gap-4 border-b border-border py-8 transition-colors hover:bg-muted/50 md:grid-cols-[3rem_1.2fr_2fr_auto] md:items-center md:px-4"
            >
              <span className="text-sm text-muted-foreground tabular-nums">
                0{i + 1}
              </span>
              <div>
                <h3 className="text-xl font-medium">{pkg.name}</h3>
                <p className="text-xs text-muted-foreground">{pkg.duration}</p>
              </div>
              <p className="text-sm text-muted-foreground">{pkg.summary}</p>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-semibold tracking-tight">
                  {pkg.price}
                </span>
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
