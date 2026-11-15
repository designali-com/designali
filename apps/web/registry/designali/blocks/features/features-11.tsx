"use client"

import { useState } from "react"
import { Fingerprint, KeyRound, Lock, Shield } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"

const items = [
  {
    icon: Fingerprint,
    title: "Passkeys by default",
    body: "Customers sign in with Face ID or a hardware key. Passwords become an optional fallback you can switch off per tenant.",
    visual: "passkey",
  },
  {
    icon: KeyRound,
    title: "Scoped API tokens",
    body: "Issue tokens limited to a single project, environment and set of verbs. Expiry and rotation reminders are built in.",
    visual: "tokens",
  },
  {
    icon: Shield,
    title: "Anomaly detection",
    body: "Impossible-travel and credential-stuffing patterns are blocked in real time, with a review queue for anything borderline.",
    visual: "anomaly",
  },
  {
    icon: Lock,
    title: "Field-level encryption",
    body: "Mark any column as sensitive and Keystone encrypts it with a per-tenant key before it ever reaches your database.",
    visual: "encryption",
  },
]

function Visual({ kind }: { kind: string }) {
  if (kind === "passkey")
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="flex size-24 items-center justify-center rounded-full border-2 border-dashed border-emerald-500/60">
          <Fingerprint className="size-12 text-emerald-600 dark:text-emerald-400" />
        </div>
        <span className="text-xs text-muted-foreground">Touch sensor to continue</span>
      </div>
    )
  if (kind === "tokens")
    return (
      <div className="w-full max-w-xs space-y-2 font-mono text-xs">
        {[
          ["ks_live_9f2a", "read:orders", "30d"],
          ["ks_live_c71e", "write:users", "7d"],
          ["ks_test_04bd", "*", "1d"],
        ].map(([id, scope, exp]) => (
          <div key={id} className="flex items-center justify-between gap-2 border border-border bg-background px-3 py-2">
            <span>{id}</span>
            <span className="text-muted-foreground">{scope}</span>
            <span className="text-amber-600 dark:text-amber-400">{exp}</span>
          </div>
        ))}
      </div>
    )
  if (kind === "anomaly")
    return (
      <div className="w-full max-w-xs space-y-2 text-xs">
        {[
          ["Berlin, DE", "Allowed", "text-emerald-600 dark:text-emerald-400"],
          ["Sao Paulo, BR", "Blocked", "text-red-600 dark:text-red-400"],
          ["Berlin, DE", "Allowed", "text-emerald-600 dark:text-emerald-400"],
          ["Unknown proxy", "Review", "text-amber-600 dark:text-amber-400"],
        ].map(([loc, status, tone], i) => (
          <div key={i} className="flex justify-between border border-border bg-background px-3 py-2">
            <span>{loc}</span>
            <span className={tone}>{status}</span>
          </div>
        ))}
      </div>
    )
  return (
    <div className="w-full max-w-xs space-y-2 font-mono text-xs">
      <div className="border border-border bg-background px-3 py-2">
        email: <span className="text-muted-foreground">ada@lumen.dev</span>
      </div>
      <div className="border border-border bg-background px-3 py-2">
        ssn: <span className="text-sky-600 dark:text-sky-400">enc:AES256:Zm9v...q8=</span>
      </div>
      <div className="border border-border bg-background px-3 py-2">
        card: <span className="text-sky-600 dark:text-sky-400">enc:AES256:YmFy...p1=</span>
      </div>
    </div>
  )
}

export default function Features11() {
  const [active, setActive] = useState(0)

  return (
    <section className="w-full bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-2xl text-3xl font-medium tracking-tight md:text-5xl">
          Security your auditors will actually enjoy reading about.
        </h2>
        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-14">
          <div className="border-t border-border">
            {items.map((item, i) => {
              const Icon = item.icon
              const open = i === active
              return (
                <div key={item.title} className="border-b border-border">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-expanded={open}
                    className="flex w-full items-center gap-4 py-5 text-left"
                  >
                    <Icon className={cn("size-5 shrink-0", open ? "text-foreground" : "text-muted-foreground")} />
                    <span className={cn("text-lg font-medium", !open && "text-muted-foreground")}>
                      {item.title}
                    </span>
                  </button>
                  <div className={cn("grid transition-all duration-300", open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]")}>
                    <p className="overflow-hidden pl-9 text-sm leading-7 text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="flex min-h-80 items-center justify-center border border-border bg-muted/40 p-8">
            <Visual kind={items[active]!.visual} />
          </div>
        </div>
      </div>
    </section>
  )
}
