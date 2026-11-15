"use client"

import { useState } from "react"
import { Check, Users } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const sizes = [
  { label: "Just me", seats: 1 },
  { label: "2-5", seats: 5 },
  { label: "6-20", seats: 20 },
  { label: "21-100", seats: 100 },
  { label: "100+", seats: 0 },
]

function recommend(seats: number) {
  if (seats === 1)
    return {
      plan: "Personal",
      perSeat: 0,
      reason: "Free forever for a single workspace owner.",
      features: ["3 projects", "Core blocks", "Community support"],
    }
  if (seats <= 5)
    return {
      plan: "Team",
      perSeat: 15,
      reason: "Shared libraries and reviews for a small crew.",
      features: ["Unlimited projects", "Shared libraries", "Review links", "Email support"],
    }
  if (seats <= 20)
    return {
      plan: "Studio",
      perSeat: 13,
      reason: "Volume discount kicks in and you get permissions.",
      features: ["Everything in Team", "Roles and permissions", "Branded exports", "Priority support"],
    }
  if (seats <= 100)
    return {
      plan: "Business",
      perSeat: 11,
      reason: "SSO and audit logs for growing organisations.",
      features: ["Everything in Studio", "SAML SSO", "Audit log", "Quarterly business reviews"],
    }
  return {
    plan: "Enterprise",
    perSeat: -1,
    reason: "Custom terms, security review and a dedicated team.",
    features: ["Everything in Business", "SCIM provisioning", "99.99% SLA", "Dedicated CSM"],
  }
}

export default function Pricing16() {
  const [step, setStep] = useState(2)
  const seats = sizes[step]!.seats
  const rec = recommend(seats)
  const total = rec.perSeat > 0 ? rec.perSeat * seats : rec.perSeat

  return (
    <section className="w-full bg-background py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            How big is your team?
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            We&apos;ll recommend the plan most companies your size choose.
          </p>
        </div>
        <div className="mt-10">
          <div className="relative grid grid-cols-5">
            <span className="absolute top-4 right-[10%] left-[10%] h-px bg-border" />
            <span
              className="absolute top-4 left-[10%] h-px bg-foreground transition-all"
              style={{ width: `${step * 20}%` }}
            />
            {sizes.map((size, index) => (
              <button
                key={size.label}
                type="button"
                onClick={() => setStep(index)}
                aria-pressed={step === index}
                className="relative flex flex-col items-center gap-3"
              >
                <span
                  className={cn(
                    "flex size-8 items-center justify-center rounded-full border text-xs transition-colors",
                    index <= step
                      ? "border-foreground bg-foreground text-background"
                      : "border-border bg-background text-muted-foreground"
                  )}
                >
                  {index === step ? <Users className="size-3.5" /> : index + 1}
                </span>
                <span
                  className={cn(
                    "text-xs sm:text-sm",
                    index === step ? "font-medium" : "text-muted-foreground"
                  )}
                >
                  {size.label}
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="mt-12 grid border border-border md:grid-cols-[1.2fr_1fr]">
          <div className="p-8">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Recommended
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight">
              {rec.plan}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{rec.reason}</p>
            <ul className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
              {rec.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <Check className="size-4 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-between gap-6 border-t border-border bg-muted/50 p-8 md:border-t-0 md:border-l">
            <div>
              <p className="text-5xl font-semibold tracking-tight">
                {total === -1 ? "Custom" : `$${total}`}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {total === -1
                  ? "Annual contract, volume pricing"
                  : total === 0
                    ? "Free forever"
                    : `per month for ${seats} seats ($${rec.perSeat} each)`}
              </p>
            </div>
            <Button size="lg" className="w-full">
              {total === -1 ? "Book a call" : `Get ${rec.plan}`}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
