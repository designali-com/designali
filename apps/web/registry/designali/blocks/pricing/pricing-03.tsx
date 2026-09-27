import { Check } from "lucide-react"
import { cn } from "@workspace/ui/lib/utils"
import { Button } from "@workspace/ui/components/button"

interface Plan {
  name: string
  price: string
  popular?: boolean
  cta?: {
    text: string
    url: string
  }
}

interface FeatureItem {
  name: string
  values: (string | boolean)[]
}

interface Pricing02Props {
  title?: string
  description?: string
  plans?: Plan[]
  features?: FeatureItem[]
  className?: string
}

export const Pricing02 = ({
  title = "Compare plans",
  description = "Choose the plan that fits your needs.",
  plans = [
    {
      name: "Free",
      price: "$0",
      cta: {
        text: "Get Started",
        url: "#",
      },
    },
    {
      name: "Pro",
      price: "$19",
      popular: true,
      cta: {
        text: "Start Building",
        url: "#",
      },
    },
    {
      name: "Team",
      price: "$49",
      cta: {
        text: "Get Started",
        url: "#",
      },
    },
    {
      name: "Enterprise",
      price: "$99",
      cta: {
        text: "Contact Sales",
        url: "#",
      },
    },
  ],
  features = [
    {
      name: "Components",
      values: ["50+", "200+", "500+", "Unlimited"],
    },
    {
      name: "Templates",
      values: ["5", "20+", "50+", "Unlimited"],
    },
    {
      name: "Support",
      values: ["Community", "Priority", "Priority", "Dedicated"],
    },
    {
      name: "Design resources",
      values: [true, true, true, true],
    },
    {
      name: "Figma resources",
      values: [false, true, true, true],
    },
    {
      name: "Premium components",
      values: [false, true, true, true],
    },
    {
      name: "Team collaboration",
      values: [false, false, true, true],
    },
    {
      name: "Custom components",
      values: [false, false, true, true],
    },
    {
      name: "Priority updates",
      values: [false, true, true, true],
    },
  ],
  className,
}: Pricing02Props) => (
  <section
    className={cn(
      "relative w-full h-screen flex items-center justify-center overflow-hidden py-10",
      className
    )}
  >
    <div className="max-w-6xl w-full mx-auto px-4">
      {/* Header */}
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <h2 className="text-4xl font-medium tracking-tight md:text-5xl">
          {title}
        </h2>

        <p className="text-muted-foreground">{description}</p>
      </div>

      {/* Comparison */}
      <div className="mt-14 overflow-x-auto border">
        <table className="w-full min-w-[900px] border-collapse">
          <thead>
            <tr className="border-b">
              <th className="w-[220px] p-6 text-left" />

              {plans.map((plan) => (
                <th
                  key={plan.name}
                  className={cn(
                    "min-w-[170px] p-3 text-center align-top",
                    plan.popular && "bg-muted/50"
                  )}
                >
                  <div className="flex flex-col items-center gap-2">
                    {plan.popular && (
                      <span className="mb-1 rounded-full bg-foreground px-3 py-1 text-[11px] font-medium text-background">
                        Most Popular
                      </span>
                    )}

                    <span className="text-sm font-medium">
                      {plan.name}
                    </span>

                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-semibold tracking-tight">
                        {plan.price}
                      </span>

                      <span className="text-xs text-muted-foreground">
                        /month
                      </span>
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {features.map((feature) => (
              <tr
                key={feature.name}
                className="border-b last:border-b-0"
              >
                <td className="p-3 px-5 text-sm font-medium">
                  {feature.name}
                </td>

                {feature.values.map((value, index) => (
                  <td
                    key={index}
                    className={cn(
                      "p-3 text-center text-sm",
                      plans[index]?.popular && "bg-muted/30"
                    )}
                  >
                    {value === true ? (
                      <div className="flex justify-center">
                        <div className="flex size-6 items-center justify-center rounded-full bg-foreground text-background">
                          <Check className="size-3.5" strokeWidth={2.5} />
                        </div>
                      </div>
                    ) : value === false ? (
                      <span className="text-muted-foreground/50">
                        —
                      </span>
                    ) : (
                      <span className="text-muted-foreground">
                        {value}
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}

            {/* CTA */}
            <tr>
              <td className="p-5" />

              {plans.map((plan) => (
                <td
                  key={plan.name}
                  className={cn(
                    "p-5",
                    plan.popular && "bg-muted/30"
                  )}
                >
                  <Button
                    variant={plan.popular ? "default" : "outline"}
                    className="w-full"
                     
                  >
                    <a href={plan.cta?.url ?? "#"}>
                      {plan.cta?.text ?? "Get Started"}
                    </a>
                  </Button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
)
 