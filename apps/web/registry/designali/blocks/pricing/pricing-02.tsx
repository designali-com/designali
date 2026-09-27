"use client"

import { useState } from "react"
import { CircleCheck } from "lucide-react"
import { cn } from "@workspace/ui/lib/utils"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@workspace/ui/components/card"
import { Switch } from "@workspace/ui/components/switch"
import { Separator } from "@workspace/ui/components/separator"

interface Plan {
  name: string
  description?: string
  prices: {
    monthly: string
    yearly: string
  }
  features: string[]
  popular?: boolean
  cta: {
    text: string
    url: string
  }
}

interface Pricing01Props {
  title?: string
  description?: string
  plans?: Plan[]
  className?: string
}

export const Pricing01 = ({
  title = "Simple, transparent pricing",
  description = "Everything you need to build beautiful products with Designali.",
  plans = [
    {
      name: "Free",
      description: "For personal projects and experimentation.",
      prices: {
        monthly: "$0",
        yearly: "$0",
      },
      features: [
        "Core UI components",
        "Designali components",
        "Copy & paste code",
        "Community support",
      ],
      cta: {
        text: "Get Started",
        url: "#",
      },
    },
    {
      name: "Pro",
      description: "For designers and developers building products.",
      prices: {
        monthly: "$19",
        yearly: "$190",
      },
      popular: true,
      features: [
        "Everything in Free",
        "Premium components",
        "Advanced templates",
        "Figma resources",
        "Priority support",
        "Early access",
      ],
      cta: {
        text: "Start Building",
        url: "#",
      },
    },
    {
      name: "Team",
      description: "For teams shipping products at scale.",
      prices: {
        monthly: "$49",
        yearly: "$490",
      },
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Private components",
        "Custom templates",
        "Dedicated support",
        "Early access",
      ],
      cta: {
        text: "Contact Sales",
        url: "#",
      },
    },
  ],
  className,
}: Pricing01Props) => {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section
      className={cn(
        "relative w-full h-screen flex items-center justify-center overflow-hidden py-10",
        className
      )}
    >
      <div className="max-w-6xl w-full  mx-auto px-4">
        {/* Header */}
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
          <h2 className="text-4xl font-medium tracking-tight md:text-5xl">
            {title}
          </h2>

          <p className="max-w-lg text-muted-foreground">
            {description}
          </p>

          {/* Billing Toggle */}
          <div className="mt-2 flex items-center gap-4 border bg-background px-4 py-2">
            <span
              className={cn(
                "text-sm transition-colors",
                !isAnnual
                  ? "font-medium text-foreground"
                  : "text-muted-foreground"
              )}
            >
              Monthly
            </span>

            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
            />

            <span
              className={cn(
                "text-sm transition-colors",
                isAnnual
                  ? "font-medium text-foreground"
                  : "text-muted-foreground"
              )}
            >
              Yearly
            </span>

            <span className="bg-muted px-2 py-0.5 text-xs font-medium">
              Save 20%
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-14 flex flex-col items-stretch justify-center gap-6 lg:flex-row">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "relative flex w-full max-w-md flex-col",
                plan.popular && "border-2 border-foreground shadow-lg"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-foreground px-4 py-1.5 text-xs font-medium whitespace-nowrap text-background">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader className="gap-3 p-6">
                <h3 className="text-xl font-medium">{plan.name}</h3>

                {plan.description && (
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                )}

                <div className="flex items-baseline gap-1 pt-3">
                  <span className="text-5xl font-semibold tracking-tight">
                    {isAnnual
                      ? plan.prices.yearly
                      : plan.prices.monthly}
                  </span>

                  <span className="text-sm text-muted-foreground">
                    {isAnnual ? "/year" : "/month"}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col gap-5 px-6">
                <Separator />

                <ul className="flex flex-1 flex-col gap-3.5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm"
                    >
                      <CircleCheck className="size-4 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="p-6">
                <Button
                  size="lg"
                  variant={plan.popular ? "default" : "outline"}
                  className="w-full"
                   
                >
                  <a href={plan.cta.url}>{plan.cta.text}</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
 