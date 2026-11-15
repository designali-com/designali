"use client"

import { useEffect, useState } from "react"
import { MailCheck, Pencil, RotateCw } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const COOLDOWN = 45

const providers = [
  { label: "Open web mail", href: "#" },
  { label: "Open desktop mail", href: "#" },
  { label: "Open mobile mail", href: "#" },
]

export default function Authentication19() {
  const [remaining, setRemaining] = useState(COOLDOWN)
  const [resends, setResends] = useState(0)

  useEffect(() => {
    if (remaining <= 0) return
    const timer = setTimeout(() => setRemaining((value) => value - 1), 1000)
    return () => clearTimeout(timer)
  }, [remaining])

  const progress = ((COOLDOWN - remaining) / COOLDOWN) * 100

  return (
    <section className="w-full border-y bg-background">
      <div className="mx-auto grid max-w-6xl md:grid-cols-[1.1fr_1fr]">
        <div className="flex flex-col justify-center px-6 py-16 md:border-e md:px-14 md:py-24">
          <span className="flex size-12 items-center justify-center bg-foreground text-background">
            <MailCheck className="size-5" />
          </span>
          <h2 className="mt-8 text-4xl font-semibold tracking-tight">Verify your email</h2>
          <p className="mt-3 max-w-md text-muted-foreground">
            We sent a confirmation link to{" "}
            <span className="font-medium text-foreground">theo.lindqvist@marrow.so</span>. Click it to activate your Marrow account.
          </p>
          <button type="button" className="mt-3 flex w-fit items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
            <Pencil className="size-3.5" />
            Wrong address? Change it
          </button>

          <div className="mt-10 grid gap-2 sm:grid-cols-3">
            {providers.map((provider) => (
              <Button key={provider.label} variant="outline" nativeButton={false} render={<a href={provider.href} />}>
                {provider.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center gap-8 border-t bg-muted/30 px-6 py-16 md:border-t-0 md:px-14">
          <div>
            <p className="text-sm font-medium">Didn&apos;t get the email?</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>Check your spam or promotions folder.</li>
              <li>Search your inbox for &ldquo;Marrow&rdquo;.</li>
              <li>Corporate filters can delay mail by a few minutes.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <Button
              size="lg"
              className="w-full"
              disabled={remaining > 0}
              onClick={() => {
                setResends(resends + 1)
                setRemaining(COOLDOWN)
              }}
            >
              <RotateCw />
              {remaining > 0 ? `Resend available in 0:${String(remaining).padStart(2, "0")}` : "Resend email"}
            </Button>
            <div className="h-1 bg-muted">
              <div className="h-full bg-foreground transition-[width] duration-1000 ease-linear" style={{ width: `${progress}%` }} />
            </div>
            {resends > 0 && (
              <p className="text-xs text-muted-foreground">
                Sent again {resends} {resends === 1 ? "time" : "times"}. The newest link replaces older ones.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
