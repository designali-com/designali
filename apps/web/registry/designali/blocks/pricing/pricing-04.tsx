"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { cn } from "@workspace/ui/lib/utils"
import { Button } from "@workspace/ui/components/button"
import { Card } from "@workspace/ui/components/card"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

interface Plan {
  name: string
  prices: {
    monthly: {
      amount: string
      suffix: string
    }
    yearly: {
      amount: string
      suffix: string
    }
  }
  description: string
  features: string[]
  popular?: boolean
  cta: {
    text: string
    url: string
    disabled?: boolean
  }
}

interface Pricing04Props {
  title?: string
  plans?: Plan[]
  className?: string
}

export const Pricing04 = ({
  title = "Choose your plan",
  plans = [
    {
      name: "Free",
      prices: {
        monthly: {
          amount: "0",
          suffix: "USD / month",
        },
        yearly: {
          amount: "0",
          suffix: "USD / year",
        },
      },
      description:
        "Everything you need to explore Designali and start building.",
      features: [
        "Access to core components",
        "Designali UI library",
        "Copy & paste components",
        "Community support",
        "Free updates",
      ],
      cta: {
        text: "Get Started",
        url: "#",
      },
    },
    {
      name: "Pro",
      prices: {
        monthly: {
          amount: "19",
          suffix: "USD / month",
        },
        yearly: {
          amount: "15",
          suffix: "USD / month",
        },
      },
      description:
        "For designers and developers building production-ready products.",
      features: [
        "Everything in Free",
        "Premium components",
        "Advanced templates",
        "Figma resources",
        "Priority support",
        "Early access",
      ],
      popular: true,
      cta: {
        text: "Start Building",
        url: "#",
      },
    },
    {
      name: "Team",
      prices: {
        monthly: {
          amount: "49",
          suffix: "USD / month",
        },
        yearly: {
          amount: "39",
          suffix: "USD / month",
        },
      },
      description:
        "For teams that need a shared design system and faster workflow.",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Private components",
        "Custom templates",
        "Dedicated support",
        "Priority updates",
      ],
      cta: {
        text: "Get Team",
        url: "#",
      },
    },
  ],
  className,
}: Pricing04Props) => {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly")

  return (
    <section
      className={cn(
        "relative w-full h-screen flex items-center justify-center overflow-hidden py-10",
        className
      )}
    >
      <div className="max-w-6xl w-full mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-4xl font-medium tracking-tight md:text-5xl">
            {title}
          </h2>

          <p className="max-w-xl text-muted-foreground">
            Build faster with a modern collection of components,
            templates, and resources for Design Engineers.
          </p>

          {/* Billing */}
          <Tabs
            value={billing}
            onValueChange={(value) =>
              setBilling(value as "monthly" | "yearly")
            }
          >
            <TabsList className="h-10 gap-1 bg-muted p-1">
              <TabsTrigger
                value="monthly"
                className="px-5 text-sm data-[state=active]:bg-background data-[state=active]:shadow-sm"
              >
                Monthly
              </TabsTrigger>

              <TabsTrigger
                value="yearly"
                className="flex items-center gap-2 px-5 text-sm data-[state=active]:bg-background data-[state=active]:shadow-sm"
              >
                Yearly

                <span
                  className={cn(
                    "rounded-full px-1.5 py-0.5 text-[10px] font-medium",
                    billing === "yearly"
                      ? "bg-foreground text-background"
                      : "bg-background text-muted-foreground"
                  )}
                >
                  Save 20%
                </span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Plans */}
        <div className="mt-12 flex flex-col items-stretch justify-center gap-5 lg:flex-row">
          {plans.map((plan) => {
            const price =
              billing === "yearly"
                ? plan.prices.yearly
                : plan.prices.monthly

            return (
              <Card
                key={plan.name}
                className={cn(
                  "flex w-full max-w-sm flex-col gap-0 overflow-hidden p-0 shadow-none",
                  plan.popular && "border-foreground/30"
                )}
              >
                {/* Plan Header */}
                <div
                  className={cn(
                    "relative flex h-[72px] items-center overflow-hidden bg-muted px-6 pb-5",
                    plan.popular &&
                      "bg-foreground text-background"
                  )}
                >
                  {plan.popular && (
                    <div
                      className="pointer-events-none absolute inset-0 opacity-20"
                      style={{
                        background:
                          "radial-gradient(circle at 75% 10%, white 0%, transparent 55%)",
                      }}
                    />
                  )}

                  <div className="relative flex w-full items-center justify-between">
                    <h3 className="text-lg font-semibold">
                      {plan.name}
                    </h3>

                    {plan.popular && (
                      <span className="border border-background/20 px-2.5 py-1 text-[10px] font-medium">
                        Popular
                      </span>
                    )}
                  </div>
                </div>

                {/* Plan Body */}
                <div className="relative z-10 -mt-5 flex flex-1 flex-col gap-5 border-t bg-background p-6">
                  <p className="min-h-[2.5rem] text-sm leading-snug text-muted-foreground">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="flex flex-col gap-5">
                    <div className="flex items-baseline gap-1">
                      <span className="self-start pt-1 text-base font-medium">
                        $
                      </span>

                      <span className="text-5xl font-semibold tracking-tight">
                        {price.amount}
                      </span>

                      <span className="self-end pb-1 text-xs text-muted-foreground">
                        {price.suffix}
                      </span>
                    </div>

                    <Button
                      variant={plan.popular ? "default" : "outline"}
                      className={cn(
                        "w-full",
                        plan.popular &&
                          "bg-foreground text-background hover:bg-foreground/90"
                      )}
                      disabled={plan.cta.disabled}
                      
                    >
                      {plan.cta.disabled ? (
                        <span>{plan.cta.text}</span>
                      ) : (
                        <a href={plan.cta.url}>
                          {plan.cta.text}
                        </a>
                      )}
                    </Button>
                  </div>

                  {/* Features */}
                  <ul className="flex flex-col gap-3 border-t pt-5">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2.5 text-sm text-muted-foreground"
                      >
                        <Check className="size-4 shrink-0 text-foreground" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
 