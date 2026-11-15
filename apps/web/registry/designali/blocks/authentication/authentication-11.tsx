"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { cn } from "@workspace/ui/lib/utils"

type Mode = "signin" | "signup"

export default function Authentication11() {
  const [mode, setMode] = useState<Mode>("signin")

  return (
    <section className="flex min-h-[720px] w-full items-center justify-center bg-background px-6 py-16">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex items-center justify-center gap-2 text-lg font-semibold">
          <span className="size-6 rounded-full border-[6px] border-foreground" />
          Loopwise
        </div>

        <div role="tablist" className="relative grid grid-cols-2 border p-1">
          <span
            aria-hidden
            className={cn(
              "absolute inset-y-1 w-[calc(50%-4px)] bg-foreground transition-transform duration-300",
              mode === "signin" ? "translate-x-0" : "translate-x-full"
            )}
            style={{ left: 4 }}
          />
          {(["signin", "signup"] as const).map((value) => (
            <button
              key={value}
              type="button"
              role="tab"
              aria-selected={mode === value}
              onClick={() => setMode(value)}
              className={cn(
                "relative h-9 text-sm font-medium transition-colors",
                mode === value ? "text-background" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {value === "signin" ? "Sign in" : "Create account"}
            </button>
          ))}
        </div>

        <form className="mt-8 space-y-4" onSubmit={(event) => event.preventDefault()}>
          {mode === "signup" && (
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="auth-11-first">First name</Label>
                <Input id="auth-11-first" placeholder="Nora" className="h-10" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="auth-11-last">Last name</Label>
                <Input id="auth-11-last" placeholder="Okafor" className="h-10" />
              </div>
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="auth-11-email">Email</Label>
            <Input id="auth-11-email" type="email" placeholder="nora@loopwise.app" className="h-10" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="auth-11-password">Password</Label>
              {mode === "signin" && (
                <a href="#" className="text-xs text-muted-foreground hover:text-foreground">Forgot password?</a>
              )}
            </div>
            <Input
              id="auth-11-password"
              type="password"
              placeholder={mode === "signup" ? "10+ characters" : ""}
              className="h-10"
            />
          </div>
          {mode === "signup" && (
            <Label className="items-start text-sm leading-snug font-normal text-muted-foreground">
              <Checkbox className="mt-0.5" />
              Send me product updates, roughly once a month.
            </Label>
          )}
          <Button type="submit" size="lg" className="w-full">
            {mode === "signin" ? "Sign in" : "Create free account"}
            <ArrowRight />
          </Button>
        </form>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          {mode === "signin" ? (
            <>Protected by device checks. <a href="#" className="underline underline-offset-4">Learn more</a></>
          ) : (
            <>By signing up you agree to our <a href="#" className="underline underline-offset-4">Terms</a> and <a href="#" className="underline underline-offset-4">Privacy Policy</a>.</>
          )}
        </p>
      </div>
    </section>
  )
}
