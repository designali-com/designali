"use client"

import { Check } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"
import { cn } from "@workspace/ui/lib/utils"

type Plan = {
  name: string
  price: string
  unit: string
  blurb: string
  features: string[]
  featured?: boolean
}

const audiences: { id: string; label: string; plans: Plan[] }[] = [
  {
    id: "individuals",
    label: "Individuals",
    plans: [
      {
        name: "Hobby",
        price: "$0",
        unit: "forever",
        blurb: "Side projects and learning.",
        features: ["3 active projects", "Community templates", "1 GB storage"],
      },
      {
        name: "Creator",
        price: "$12",
        unit: "per month",
        blurb: "Freelancers shipping client work.",
        features: [
          "Unlimited projects",
          "Custom domains",
          "50 GB storage",
          "Remove branding",
        ],
        featured: true,
      },
    ],
  },
  {
    id: "teams",
    label: "Teams",
    plans: [
      {
        name: "Studio",
        price: "$29",
        unit: "per seat / month",
        blurb: "Small teams up to 20 people.",
        features: ["Shared libraries", "Comments and reviews", "Version history"],
      },
      {
        name: "Business",
        price: "$49",
        unit: "per seat / month",
        blurb: "Growing orgs with many products.",
        features: [
          "Everything in Studio",
          "SAML SSO",
          "Role-based permissions",
          "Usage analytics",
        ],
        featured: true,
      },
    ],
  },
  {
    id: "enterprise",
    label: "Enterprise",
    plans: [
      {
        name: "Enterprise",
        price: "Custom",
        unit: "annual contract",
        blurb: "Security reviews, SLAs and procurement.",
        features: [
          "99.99% uptime SLA",
          "SCIM and audit logs",
          "Data residency (EU / US)",
          "Named success manager",
        ],
        featured: true,
      },
      {
        name: "Education",
        price: "$0",
        unit: "for verified schools",
        blurb: "Free for classrooms and students.",
        features: ["Unlimited student seats", "LMS integrations", "Teacher dashboard"],
      },
    ],
  },
]

export default function Pricing10() {
  return (
    <section className="w-full bg-background py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Tabs defaultValue="teams" className="items-center gap-0">
          <h2 className="text-center text-3xl font-semibold tracking-tight md:text-4xl">
            Pricing that fits how you work
          </h2>
          <p className="mt-3 text-center text-sm text-muted-foreground">
            Choose who you are buying for to see the plans that make sense.
          </p>
          <TabsList className="mt-8 h-10 w-full max-w-md">
            {audiences.map((audience) => (
              <TabsTrigger
                key={audience.id}
                value={audience.id}
                className="text-sm"
              >
                {audience.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {audiences.map((audience) => (
            <TabsContent
              key={audience.id}
              value={audience.id}
              className="mt-12 w-full"
            >
              <div className="grid gap-6 md:grid-cols-2">
                {audience.plans.map((plan) => (
                  <div
                    key={plan.name}
                    className={cn(
                      "flex flex-col border p-8",
                      plan.featured
                        ? "border-foreground bg-card"
                        : "border-border"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium">{plan.name}</h3>
                      {plan.featured && (
                        <span className="bg-foreground px-2 py-0.5 text-xs text-background">
                          Recommended
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {plan.blurb}
                    </p>
                    <p className="mt-6">
                      <span className="text-4xl font-semibold tracking-tight">
                        {plan.price}
                      </span>{" "}
                      <span className="text-sm text-muted-foreground">
                        {plan.unit}
                      </span>
                    </p>
                    <ul className="mt-6 flex-1 space-y-3 text-sm">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <Check className="size-4 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="mt-8 w-full"
                      variant={plan.featured ? "default" : "outline"}
                      nativeButton={false}
                      render={<a href="#" />}
                    >
                      {plan.price === "Custom" ? "Contact sales" : `Choose ${plan.name}`}
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
