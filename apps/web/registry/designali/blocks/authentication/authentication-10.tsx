"use client"

import { useState } from "react"
import { ArrowRight, KeySquare, LifeBuoy, Mail, MessageSquareText } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const methods = [
  {
    id: "email",
    icon: Mail,
    title: "Email a reset link",
    detail: "To r*****@quarry.dev",
    eta: "Usually under a minute",
  },
  {
    id: "sms",
    icon: MessageSquareText,
    title: "Text a code",
    detail: "To the number ending in 4471",
    eta: "Standard rates may apply",
  },
  {
    id: "backup",
    icon: KeySquare,
    title: "Use a backup code",
    detail: "One of the 10 codes you saved during setup",
    eta: "Instant",
  },
  {
    id: "admin",
    icon: LifeBuoy,
    title: "Ask your workspace admin",
    detail: "Quarry Labs admins can reset your access",
    eta: "Depends on your admin",
  },
]

export default function Authentication10() {
  const [method, setMethod] = useState("email")
  const selected = methods.find((item) => item.id === method)

  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-[1fr_1.3fr]">
        <div className="space-y-4">
          <p className="font-mono text-xs text-muted-foreground">ACCOUNT RECOVERY</p>
          <h2 className="text-4xl font-semibold tracking-tight">Let&apos;s get you back in.</h2>
          <p className="text-muted-foreground">
            Choose how you want to verify it&apos;s you. We never ask for your password over email or phone.
          </p>
          <a href="#" className="inline-block text-sm underline underline-offset-4">Back to sign in</a>
        </div>

        <div role="radiogroup" aria-label="Recovery method" className="space-y-3">
          {methods.map((item) => {
            const active = item.id === method
            return (
              <button
                key={item.id}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => setMethod(item.id)}
                className={cn(
                  "flex w-full items-start gap-4 border p-5 text-start transition-colors",
                  active ? "border-foreground bg-muted/40" : "hover:bg-muted/30"
                )}
              >
                <span
                  className={cn(
                    "mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full border",
                    active && "border-foreground"
                  )}
                >
                  {active && <span className="size-2 rounded-full bg-foreground" />}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-2 font-medium">
                    <item.icon className="size-4 shrink-0" />
                    {item.title}
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">{item.detail}</span>
                </span>
                <span className="hidden shrink-0 text-xs text-muted-foreground sm:block">{item.eta}</span>
              </button>
            )
          })}
          <Button size="lg" className="mt-3 w-full">
            {selected?.id === "admin" ? "Send request to admin" : "Continue"}
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  )
}
