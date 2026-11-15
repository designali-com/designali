import { ArrowRight, Check } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const plans = [
  {
    name: "Solo",
    price: "$19",
    note: "per month, billed yearly",
    description: "Everything one designer-developer needs to ship fast.",
    features: [
      "Full block library",
      "Figma kit",
      "Personal commercial licence",
      "Email support",
    ],
    cta: "Start 14-day trial",
  },
  {
    name: "Agency",
    price: "$79",
    note: "per month, billed yearly",
    description: "For studios delivering sites to many clients at once.",
    features: [
      "Up to 12 seats",
      "Client handoff workspaces",
      "White-label exports",
      "Priority support in 4h",
    ],
    cta: "Start 14-day trial",
    featured: true,
  },
]

export default function Pricing12() {
  return (
    <section className="w-full bg-foreground py-20 text-background md:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <div className="flex flex-col justify-between gap-10">
          <div>
            <p className="text-xs tracking-[0.2em] text-background/50 uppercase">
              Pricing
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Two plans. Zero surprises.
            </h2>
            <p className="mt-5 max-w-sm text-base leading-7 text-background/60">
              No seat minimums, no usage caps, no feature gates hidden behind a
              sales call.
            </p>
          </div>
          <div className="border-t border-background/15 pt-6">
            <p className="text-sm font-medium">60-day money-back guarantee</p>
            <p className="mt-2 text-sm leading-6 text-background/60">
              If it doesn&apos;t save you time, email us and we&apos;ll refund
              every cent. No forms, no retention call.
            </p>
          </div>
        </div>
        <div className="grid gap-px bg-background/15 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={
                plan.featured
                  ? "flex flex-col bg-background p-8 text-foreground md:p-10"
                  : "flex flex-col bg-foreground p-8 md:p-10"
              }
            >
              <h3 className="text-lg font-medium">{plan.name}</h3>
              <p
                className={
                  plan.featured
                    ? "mt-2 text-sm text-muted-foreground"
                    : "mt-2 text-sm text-background/60"
                }
              >
                {plan.description}
              </p>
              <p className="mt-8 text-5xl font-semibold tracking-tight">
                {plan.price}
              </p>
              <p
                className={
                  plan.featured
                    ? "mt-1 text-xs text-muted-foreground"
                    : "mt-1 text-xs text-background/50"
                }
              >
                {plan.note}
              </p>
              <ul className="mt-8 flex-1 space-y-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="size-4 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                className={
                  plan.featured
                    ? "mt-10 w-full"
                    : "mt-10 w-full bg-background text-foreground hover:bg-background/90"
                }
                nativeButton={false}
                render={<a href="#" />}
              >
                {plan.cta}
                <ArrowRight data-icon="inline-end" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
