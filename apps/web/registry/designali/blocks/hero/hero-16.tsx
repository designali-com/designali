"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2, Lock } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"

const benefits = [
  "Unlimited projects on the free plan",
  "Invite up to 5 collaborators",
  "Export to PDF, PNG and SVG",
]

export default function Hero16() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="w-full bg-background">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="bg-foreground px-6 py-16 text-background md:px-12 md:py-24">
          <p className="font-mono text-xs tracking-widest uppercase opacity-60">
            Blueprint / floor plans
          </p>
          <h1 className="mt-6 text-4xl font-medium tracking-tight md:text-6xl">
            Draw a floor plan before your coffee gets cold.
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 opacity-70">
            Drag walls, drop furniture and get accurate square footage in
            the browser. Used by 90,000 renovators, agents and architects.
          </p>
          <ul className="mt-10 space-y-3 text-sm">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3">
                <CheckCircle2 className="size-4 shrink-0 opacity-70" />
                {benefit}
              </li>
            ))}
          </ul>
          <svg viewBox="0 0 320 120" className="mt-12 w-full max-w-sm opacity-40" aria-hidden>
            <rect x="2" y="2" width="316" height="116" fill="none" stroke="currentColor" strokeWidth="2" />
            <line x1="130" y1="2" x2="130" y2="80" stroke="currentColor" strokeWidth="2" />
            <line x1="130" y1="80" x2="210" y2="80" stroke="currentColor" strokeWidth="2" />
            <line x1="240" y1="2" x2="240" y2="118" stroke="currentColor" strokeWidth="2" />
            <path d="M130 80 A30 30 0 0 1 160 110" fill="none" stroke="currentColor" strokeDasharray="3 3" />
            <text x="40" y="60" fill="currentColor" fontSize="10">Living 18m2</text>
            <text x="150" y="40" fill="currentColor" fontSize="10">Kitchen</text>
            <text x="254" y="60" fill="currentColor" fontSize="10">Bed</text>
          </svg>
        </div>

        <div className="flex items-center px-6 py-16 md:px-12 md:py-24">
          <div className="w-full max-w-md">
            {submitted ? (
              <div className="border border-border p-8 text-center">
                <CheckCircle2 className="mx-auto size-8 text-emerald-600 dark:text-emerald-400" />
                <p className="mt-4 text-lg font-medium">Check your inbox</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  We sent a sign-in link. It expires in 15 minutes.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(event) => {
                  event.preventDefault()
                  setSubmitted(true)
                }}
                className="space-y-5"
              >
                <div>
                  <h2 className="text-2xl font-medium tracking-tight">
                    Create your free account
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Already have one?{" "}
                    <a href="#" className="text-foreground underline underline-offset-4">
                      Sign in
                    </a>
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-1.5 text-sm">
                    <span>First name</span>
                    <Input required placeholder="Maya" />
                  </label>
                  <label className="space-y-1.5 text-sm">
                    <span>Last name</span>
                    <Input required placeholder="Okafor" />
                  </label>
                </div>
                <label className="block space-y-1.5 text-sm">
                  <span>Work email</span>
                  <Input required type="email" placeholder="maya@studio.co" />
                </label>
                <label className="block space-y-1.5 text-sm">
                  <span>I am a...</span>
                  <select className="h-9 w-full border border-input bg-transparent px-3 text-sm">
                    <option>Homeowner</option>
                    <option>Real estate agent</option>
                    <option>Architect or designer</option>
                    <option>Contractor</option>
                  </select>
                </label>
                <Button type="submit" size="lg" className="w-full">
                  Create account
                  <ArrowRight />
                </Button>
                <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                  <Lock className="size-3" />
                  No credit card. Cancel any time.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
