"use client"

import { useState } from "react"
import { Check } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Textarea } from "@workspace/ui/components/textarea"
import { cn } from "@workspace/ui/lib/utils"

const services = [
  "Brand identity",
  "Website",
  "Product design",
  "Motion",
  "3D & CGI",
  "Design system",
]

const budgets = ["< $10k", "$10k – $25k", "$25k – $50k", "$50k +"]

export default function Contact03() {
  const [selected, setSelected] = useState<string[]>(["Website"])
  const [budget, setBudget] = useState(budgets[1])

  function toggle(service: string) {
    setSelected((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service]
    )
  }

  return (
    <section className="w-full bg-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
          Start a project
        </h2>
        <p className="mt-4 text-muted-foreground">
          A few quick details help us put the right people on your brief.
        </p>

        <form className="mt-12 space-y-10">
          <fieldset className="space-y-4">
            <legend className="text-sm font-medium">
              01 &mdash; What do you need?
            </legend>
            <div className="flex flex-wrap gap-2">
              {services.map((service) => {
                const active = selected.includes(service)
                return (
                  <button
                    key={service}
                    type="button"
                    onClick={() => toggle(service)}
                    className={cn(
                      "inline-flex h-10 items-center gap-2 border px-4 text-sm transition-colors",
                      active
                        ? "border-foreground bg-foreground text-background"
                        : "bg-background hover:bg-muted"
                    )}
                  >
                    {active && <Check className="size-3.5" />}
                    {service}
                  </button>
                )
              })}
            </div>
          </fieldset>

          <fieldset className="space-y-4">
            <legend className="text-sm font-medium">02 &mdash; Budget</legend>
            <div className="grid grid-cols-2 border bg-background sm:grid-cols-4">
              {budgets.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setBudget(item)}
                  className={cn(
                    "h-12 border-e border-b text-sm transition-colors last:border-e-0 sm:border-b-0 [&:nth-child(2)]:border-e-0 sm:[&:nth-child(2)]:border-e",
                    budget === item
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  )}
                >
                  {item}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="space-y-4">
            <legend className="text-sm font-medium">
              03 &mdash; About you
            </legend>
            <div className="grid gap-3 sm:grid-cols-2">
              <Input placeholder="Full name" className="h-11 bg-background" />
              <Input
                type="email"
                placeholder="Email address"
                className="h-11 bg-background"
              />
            </div>
            <Textarea
              placeholder="Anything else we should know? Links, deadlines, references..."
              className="min-h-32 bg-background"
            />
          </fieldset>

          <div className="flex flex-col items-start justify-between gap-4 border-t pt-6 sm:flex-row sm:items-center">
            <p className="text-xs text-muted-foreground">
              {selected.length} service{selected.length === 1 ? "" : "s"}{" "}
              selected &middot; {budget}
            </p>
            <Button type="submit" size="lg">
              Submit brief
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
