"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"

const snippets: Record<string, string> = {
  TypeScript: `import { Ledger } from "@tallyhq/sdk"

const ledger = new Ledger(process.env.TALLY_KEY)

await ledger.charges.create({
  amount: 4200,
  currency: "eur",
  customer: "cus_8fK2",
  idempotencyKey: order.id,
})`,
  Python: `from tally import Ledger

ledger = Ledger(os.environ["TALLY_KEY"])

ledger.charges.create(
    amount=4200,
    currency="eur",
    customer="cus_8fK2",
    idempotency_key=order.id,
)`,
  Go: `client := tally.New(os.Getenv("TALLY_KEY"))

_, err := client.Charges.Create(ctx, &tally.ChargeParams{
    Amount:         4200,
    Currency:       "eur",
    Customer:       "cus_8fK2",
    IdempotencyKey: order.ID,
})`,
}

const features = [
  ["Typed end to end", "Generated SDKs with autocomplete for every field and error code."],
  ["Safe retries", "Idempotency keys on every write, so a flaky network never double-charges."],
  ["Test clocks", "Fast-forward subscriptions through a year of billing in seconds."],
]

export default function Features15() {
  const langs = Object.keys(snippets)
  const [lang, setLang] = useState(langs[0]!)
  const [copied, setCopied] = useState(false)

  return (
    <section className="w-full bg-background px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div>
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
            For developers
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-5xl">
            Charge a card in eight lines.
          </h2>
          <ul className="mt-10 space-y-6">
            {features.map(([title, body]) => (
              <li key={title} className="flex gap-4">
                <Check className="mt-0.5 size-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                <div>
                  <div className="text-sm font-medium">{title}</div>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="min-w-0 border border-neutral-800 bg-neutral-950 text-neutral-100">
          <div className="flex items-center justify-between border-b border-neutral-800">
            <div className="flex overflow-x-auto">
              {langs.map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLang(l)}
                  className={cn(
                    "border-r border-neutral-800 px-4 py-2.5 text-xs whitespace-nowrap transition-colors",
                    l === lang ? "bg-neutral-900 text-white" : "text-neutral-400 hover:text-white"
                  )}
                >
                  {l}
                </button>
              ))}
            </div>
            <button
              type="button"
              aria-label="Copy code"
              onClick={() => {
                navigator.clipboard?.writeText(snippets[lang]!).catch(() => {})
                setCopied(true)
                setTimeout(() => setCopied(false), 1500)
              }}
              className="px-3 text-neutral-400 hover:text-white"
            >
              {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
            </button>
          </div>
          <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-6">
            <code>{snippets[lang]}</code>
          </pre>
        </div>
      </div>
    </section>
  )
}
