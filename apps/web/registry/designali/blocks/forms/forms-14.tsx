"use client"

import { useState } from "react"
import {
  Bug,
  CreditCard,
  Lightbulb,
  UserCog,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Textarea } from "@workspace/ui/components/textarea"
import { cn } from "@workspace/ui/lib/utils"

const categories = [
  { id: "bug", icon: Bug, title: "Something is broken", hint: "Blocks, templates or downloads" },
  { id: "billing", icon: CreditCard, title: "Billing", hint: "Invoices, plans, licences" },
  { id: "account", icon: UserCog, title: "Account access", hint: "Login, email, team seats" },
  { id: "idea", icon: Lightbulb, title: "Feature request", hint: "Request a new block or icon" },
]

const priorities = [
  { id: "low", label: "Low", dot: "bg-primary" },
  { id: "normal", label: "Normal", dot: "bg-primary" },
  { id: "high", label: "High", dot: "bg-primary" },
  { id: "urgent", label: "Urgent", dot: "bg-destructive" },
]

export default function Forms14() {
  const [category, setCategory] = useState("bug")
  const [priority, setPriority] = useState("normal")

  return (
    <section className="w-full bg-muted/40 py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-3xl font-semibold tracking-tight">Open a Designali support ticket</h2>
          <p className="text-xs text-muted-foreground">
            Median first response: <span className="text-foreground">2h 14m</span>
          </p>
        </div>

        <form className="mt-10 space-y-8 border border-border bg-background p-6 md:p-8">
          <fieldset>
            <legend className="text-sm font-medium">What do you need help with?</legend>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {categories.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCategory(item.id)}
                  aria-pressed={category === item.id}
                  className={cn(
                    "flex items-start gap-3 border p-4 text-left transition-colors",
                    category === item.id
                      ? "border-foreground bg-muted"
                      : "border-border hover:bg-muted/60"
                  )}
                >
                  <item.icon className="mt-0.5 size-4 shrink-0" />
                  <span>
                    <span className="block text-sm font-medium">{item.title}</span>
                    <span className="block text-xs text-muted-foreground">{item.hint}</span>
                  </span>
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-sm font-medium">Priority</legend>
            <div className="mt-4 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
              {priorities.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setPriority(item.id)}
                  aria-pressed={priority === item.id}
                  className={cn(
                    "flex items-center justify-center gap-2 py-2.5 text-xs transition-colors",
                    priority === item.id ? "bg-foreground text-background" : "bg-background hover:bg-muted"
                  )}
                >
                  <span className={cn("size-1.5 rounded-full", item.dot)} />
                  {item.label}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="space-y-2">
            <Label htmlFor="f14-subject">Subject</Label>
            <Input id="f14-subject" placeholder="Download link for the portfolio template is not working" className="h-10" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="f14-details">Details</Label>
            <Textarea
              id="f14-details"
              rows={5}
              placeholder="Steps to reproduce, what you expected, and what happened instead."
            />
          </div>

          <div className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">
              Workspace <span className="font-sans text-foreground">designali-pro</span> will be attached automatically.
            </p>
            <Button type="submit" size="lg">Submit ticket</Button>
          </div>
        </form>
      </div>
    </section>
  )
}
