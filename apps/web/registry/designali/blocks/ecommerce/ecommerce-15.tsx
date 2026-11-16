"use client"

import { useState } from "react"
import {
  Gift,
  Mail,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Textarea } from "@workspace/ui/components/textarea"
import { cn } from "@workspace/ui/lib/utils"

const amounts = [25, 50, 100, 150]

const designs = [
  { id: "dusk", label: "Dusk", background: "linear-gradient(135deg, oklch(0.45 0.15 300), oklch(0.7 0.17 20))" },
  { id: "forest", label: "Forest", background: "linear-gradient(135deg, oklch(0.35 0.07 160), oklch(0.65 0.12 130))" },
  { id: "sand", label: "Sand", background: "linear-gradient(135deg, oklch(0.75 0.08 70), oklch(0.92 0.04 90))" },
  { id: "ink", label: "Ink", background: "linear-gradient(135deg, oklch(0.2 0.02 260), oklch(0.4 0.06 250))" },
]

export default function Ecommerce15() {
  const [amount, setAmount] = useState(50)
  const [custom, setCustom] = useState("")
  const [design, setDesign] = useState("dusk")
  const [to, setTo] = useState("")
  const [message, setMessage] = useState("")

  const value = custom ? Number(custom) || 0 : amount
  const bg = designs.find((d) => d.id === design)?.background
  const darkText = design === "sand"

  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div
            className={cn(
              "relative aspect-[1.6] w-full overflow-hidden p-6 shadow-2xl transition-all duration-500 sm:p-8",
              darkText ? "text-stone-900" : "text-white"
            )}
            style={{ background: bg }}
          >
            <div className="absolute -right-12 -bottom-12 size-48 rounded-full border-[24px] border-current opacity-10" />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-start justify-between">
                <span className="text-sm font-semibold tracking-tight">designali</span>
                <Gift className="size-5 opacity-80" />
              </div>
              <div>
                <p className="text-xs opacity-70">{to ? `For ${to}` : "Gift card"}</p>
                <p className="mt-1 text-4xl font-semibold tracking-tight tabular-nums sm:text-5xl">
                  ${value.toLocaleString()}
                </p>
                <p className="mt-3 line-clamp-2 max-w-xs text-sm opacity-80">
                  {message || "Your message will appear here."}
                </p>
              </div>
            </div>
          </div>
          <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
            <Mail className="size-3.5" />
            Delivered by email instantly, or on a date you choose. Never expires.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">Send a gift card</h2>
          <p className="mt-2 text-muted-foreground">Good across Designali templates, blocks and icon packs.</p>

          <fieldset className="mt-8">
            <legend className="text-sm font-medium">Amount</legend>
            <div className="mt-3 grid grid-cols-4 gap-2">
              {amounts.map((a) => (
                <button
                  key={a}
                  type="button"
                  onClick={() => {
                    setAmount(a)
                    setCustom("")
                  }}
                  aria-pressed={!custom && amount === a}
                  className={cn(
                    "border py-3 text-sm tabular-nums transition-colors",
                    !custom && amount === a ? "border-foreground bg-foreground text-background" : "border-border hover:bg-muted"
                  )}
                >
                  ${a}
                </button>
              ))}
            </div>
            <div className="relative mt-2">
              <span className="absolute top-1/2 left-3 -translate-y-1/2 text-sm text-muted-foreground">$</span>
              <Input
                inputMode="numeric"
                placeholder="Custom amount (10 - 500)"
                aria-label="Custom amount"
                value={custom}
                onChange={(e) => setCustom(e.target.value.replace(/\D/g, "").slice(0, 3))}
                className="h-10 pl-7"
              />
            </div>
          </fieldset>

          <fieldset className="mt-8">
            <legend className="text-sm font-medium">Design</legend>
            <div className="mt-3 grid grid-cols-4 gap-2">
              {designs.map((d) => (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => setDesign(d.id)}
                  aria-pressed={design === d.id}
                  className="group text-left"
                >
                  <span
                    className={cn(
                      "block aspect-[1.6] w-full ring-offset-2 ring-offset-background transition-all",
                      design === d.id ? "ring-2 ring-foreground" : "group-hover:opacity-80"
                    )}
                    style={{ background: d.background }}
                  />
                  <span className="mt-1.5 block text-xs text-muted-foreground">{d.label}</span>
                </button>
              ))}
            </div>
          </fieldset>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="e15-to">Recipient name</Label>
              <Input id="e15-to" value={to} maxLength={24} onChange={(e) => setTo(e.target.value)} className="h-10" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="e15-email">Recipient email</Label>
              <Input id="e15-email" type="email" className="h-10" />
            </div>
          </div>
          <div className="mt-4 grid gap-2">
            <Label htmlFor="e15-msg" className="flex justify-between">
              Message <span className="font-normal text-muted-foreground">{message.length}/120</span>
            </Label>
            <Textarea
              id="e15-msg"
              rows={3}
              maxLength={120}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Happy launch day! Your next template is on me."
            />
          </div>

          <Button size="lg" className="mt-8 w-full" disabled={value < 10 || value > 500}>
            Add ${value} gift card to bag
          </Button>
        </div>
      </div>
    </section>
  )
}
