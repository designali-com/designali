"use client"

import { useState } from "react"
import {
  ArrowLeft,
  ArrowRight,
  Check,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Textarea } from "@workspace/ui/components/textarea"
import { cn } from "@workspace/ui/lib/utils"

const steps = ["Your team", "The project", "Contact"]

const sizes = ["1-10", "11-50", "51-200", "200+"]
const goals = [
  "Launch a new product",
  "Redesign an existing app",
  "Build a design system",
  "Something else",
]

export default function Contact07() {
  const [step, setStep] = useState(0)
  const [size, setSize] = useState("11-50")
  const [goal, setGoal] = useState(goals[0])
  const [done, setDone] = useState(false)

  const last = step === steps.length - 1

  return (
    <section className="w-full bg-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-6">
        <div className="text-center">
          <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Talk to Designali
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Get a tailored walkthrough
          </h2>
        </div>

        <ol className="mt-12 grid grid-cols-3 gap-2">
          {steps.map((label, index) => (
            <li key={label} className="space-y-2">
              <div
                className={cn(
                  "h-1 transition-colors",
                  index <= step ? "bg-primary" : "bg-border"
                )}
              />
              <p
                className={cn(
                  "text-xs",
                  index === step
                    ? "font-medium text-foreground"
                    : "text-muted-foreground"
                )}
              >
                <span className="hidden sm:inline">Step {index + 1} &middot; </span>
                {label}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-6 border bg-card p-6 md:p-10">
          {done ? (
            <div className="flex flex-col items-center py-10 text-center">
              <span className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="size-5" />
              </span>
              <h3 className="mt-6 text-xl font-semibold">Request received</h3>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                Ali Imam will email you within 24 hours to find a
                time that works.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(event) => {
                event.preventDefault()
                if (last) setDone(true)
                else setStep((s) => s + 1)
              }}
              className="space-y-8"
            >
              {step === 0 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="contact-07-company">Company name</Label>
                    <Input id="contact-07-company" placeholder="Your company" className="h-11" />
                  </div>
                  <fieldset className="space-y-3">
                    <legend className="text-sm font-medium">Team size</legend>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {sizes.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setSize(item)}
                          className={cn(
                            "h-11 border text-sm transition-colors",
                            size === item
                              ? "border-foreground bg-foreground text-background"
                              : "hover:bg-muted"
                          )}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </fieldset>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-6">
                  <fieldset className="space-y-3">
                    <legend className="text-sm font-medium">Main goal</legend>
                    <div className="grid gap-2">
                      {goals.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setGoal(item)}
                          className={cn(
                            "flex h-12 items-center justify-between border px-4 text-start text-sm transition-colors",
                            goal === item ? "border-foreground bg-muted" : "hover:bg-muted/60"
                          )}
                        >
                          {item}
                          <span
                            className={cn(
                              "size-4 rounded-full border",
                              goal === item && "border-[5px] border-foreground"
                            )}
                          />
                        </button>
                      ))}
                    </div>
                  </fieldset>
                  <div className="space-y-2">
                    <Label htmlFor="contact-07-notes">Anything we should know?</Label>
                    <Textarea
                      id="contact-07-notes"
                      placeholder="Current tools, deadlines, who else is involved..."
                      className="min-h-28"
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="contact-07-name">Full name</Label>
                    <Input id="contact-07-name" placeholder="Your name" className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-07-role">Role</Label>
                    <Input id="contact-07-role" placeholder="Founder" className="h-11" />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="contact-07-email">Work email</Label>
                    <Input
                      id="contact-07-email"
                      type="email"
                      placeholder="you@example.com"
                      className="h-11"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground sm:col-span-2">
                    {size} people &middot; {goal}
                  </p>
                </div>
              )}

              <div className="flex items-center justify-between border-t pt-6">
                <Button
                  type="button"
                  variant="ghost"
                  disabled={step === 0}
                  onClick={() => setStep((s) => s - 1)}
                >
                  <ArrowLeft />
                  Back
                </Button>
                <Button type="submit" size="lg">
                  {last ? "Request demo" : "Continue"}
                  {!last && <ArrowRight />}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
