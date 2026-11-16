"use client"

import { useEffect, useState } from "react"
import {
  Check,
  FingerprintPattern as Fingerprint,
  Laptop,
  Smartphone,
  Trash2,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

type Passkey = { id: number; name: string; device: "laptop" | "phone"; added: string; used: string }

const initial: Passkey[] = [
  { id: 1, name: "MacBook Air", device: "laptop", added: "Mar 2, 2025", used: "Today" },
  { id: 2, name: "Pixel 9", device: "phone", added: "Jan 18, 2025", used: "3 days ago" },
]

export default function Authentication13() {
  const [keys, setKeys] = useState(initial)
  const [state, setState] = useState<"idle" | "waiting" | "done">("idle")

  useEffect(() => {
    if (state !== "waiting") return
    const timer = setTimeout(() => {
      setKeys((current) => [
        ...current,
        { id: Date.now(), name: "This browser", device: "laptop", added: "Just now", used: "Never" },
      ])
      setState("done")
    }, 1800)
    return () => clearTimeout(timer)
  }, [state])

  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-[1fr_1.2fr]">
        <div className="flex flex-col items-start gap-6 border bg-muted/30 p-8">
          <span className="relative flex size-20 items-center justify-center">
            <span
              className={cn(
                "absolute inset-0 rounded-full border-2 border-foreground/20",
                state === "waiting" && "animate-ping"
              )}
            />
            <span
              className={cn(
                "relative flex size-16 items-center justify-center rounded-full transition-colors",
                state === "done" ? "bg-emerald-600 text-white" : "bg-foreground text-background"
              )}
            >
              {state === "done" ? <Check className="size-7" /> : <Fingerprint className="size-7" />}
            </span>
          </span>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              {state === "idle" && "Create a passkey"}
              {state === "waiting" && "Waiting for your device..."}
              {state === "done" && "Passkey saved"}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {state === "idle" &&
                "Sign in to Designali with your fingerprint, face or screen lock. Passkeys can't be phished or reused."}
              {state === "waiting" && "Follow the prompt from your browser or operating system to confirm."}
              {state === "done" && "Next time, just choose your passkey on the sign-in screen."}
            </p>
          </div>
          <Button
            size="lg"
            disabled={state === "waiting"}
            onClick={() => setState(state === "done" ? "idle" : "waiting")}
          >
            {state === "done" ? "Add another" : state === "waiting" ? "Confirming..." : "Create passkey"}
          </Button>
        </div>

        <div>
          <div className="flex items-baseline justify-between border-b pb-3">
            <h3 className="font-medium">Your passkeys</h3>
            <span className="text-sm text-muted-foreground tabular-nums">{keys.length} registered</span>
          </div>
          <ul className="divide-y">
            {keys.map((key) => (
              <li key={key.id} className="flex items-center gap-4 py-4">
                <span className="flex size-10 shrink-0 items-center justify-center border">
                  {key.device === "laptop" ? <Laptop className="size-4" /> : <Smartphone className="size-4" />}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{key.name}</p>
                  <p className="text-xs text-muted-foreground">
                    Added {key.added} &middot; Last used {key.used}
                  </p>
                </div>
                <button
                  type="button"
                  aria-label={`Remove ${key.name}`}
                  onClick={() => setKeys(keys.filter((item) => item.id !== key.id))}
                  className="flex size-8 items-center justify-center text-muted-foreground hover:text-foreground"
                >
                  <Trash2 className="size-4" />
                </button>
              </li>
            ))}
            {keys.length === 0 && (
              <li className="py-6 text-sm text-muted-foreground">No passkeys yet. You&apos;re using a password only.</li>
            )}
          </ul>
        </div>
      </div>
    </section>
  )
}
