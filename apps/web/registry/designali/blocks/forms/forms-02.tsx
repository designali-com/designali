"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { cn } from "@workspace/ui/lib/utils"

const steps = ["Account", "Workspace", "Invite team"]

const roles = ["Designer", "Engineer", "Product", "Founder"]

export default function Forms02() {
  const [step, setStep] = useState(0)
  const [role, setRole] = useState("Designer")

  return (
    <section className="w-full bg-muted/40 py-20">
      <div className="mx-auto max-w-xl px-6">
        <ol className="mb-10 grid grid-cols-3 border border-border bg-background">
          {steps.map((label, index) => (
            <li
              key={label}
              className={cn(
                "flex items-center gap-2 border-border px-3 py-3 text-xs not-last:border-r",
                index === step ? "text-foreground" : "text-muted-foreground"
              )}
            >
              <span
                className={cn(
                  "flex size-5 shrink-0 items-center justify-center border text-[10px]",
                  index < step && "border-foreground bg-foreground text-background",
                  index === step && "border-foreground",
                  index > step && "border-border"
                )}
              >
                {index < step ? <Check className="size-3" /> : index + 1}
              </span>
              <span className="truncate">{label}</span>
            </li>
          ))}
        </ol>

        <div className="border border-border bg-background p-6 md:p-8">
          {step === 0 && (
            <div className="space-y-5">
              <h2 className="text-2xl font-semibold tracking-tight">
                Create your account
              </h2>
              <div className="space-y-2">
                <Label htmlFor="f2-email">Email</Label>
                <Input id="f2-email" type="email" placeholder="you@company.com" className="h-10" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="f2-password">Password</Label>
                <Input id="f2-password" type="password" placeholder="At least 12 characters" className="h-10" />
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-5">
              <h2 className="text-2xl font-semibold tracking-tight">
                Set up your workspace
              </h2>
              <div className="space-y-2">
                <Label htmlFor="f2-workspace">Workspace name</Label>
                <div className="flex">
                  <span className="flex h-10 items-center border border-r-0 border-input bg-muted px-3 text-xs text-muted-foreground">
                    app.loom.so/
                  </span>
                  <Input id="f2-workspace" placeholder="acme" className="h-10" />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-xs">What best describes you?</p>
                <div className="grid grid-cols-2 gap-2">
                  {roles.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setRole(item)}
                      className={cn(
                        "border px-3 py-2.5 text-left text-xs transition-colors",
                        role === item
                          ? "border-foreground bg-muted"
                          : "border-border hover:bg-muted/60"
                      )}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <h2 className="text-2xl font-semibold tracking-tight">
                Invite your teammates
              </h2>
              {["ana@acme.com", "dev@acme.com", ""].map((email, index) => (
                <Input
                  key={index}
                  type="email"
                  defaultValue={email}
                  placeholder="teammate@acme.com"
                  className="h-10"
                />
              ))}
              <p className="text-xs text-muted-foreground">
                You can always invite more people later from settings.
              </p>
            </div>
          )}

          <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
            <Button
              variant="ghost"
              disabled={step === 0}
              onClick={() => setStep((s) => Math.max(0, s - 1))}
            >
              <ArrowLeft />
              Back
            </Button>
            <Button onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}>
              {step === steps.length - 1 ? "Finish setup" : "Continue"}
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
