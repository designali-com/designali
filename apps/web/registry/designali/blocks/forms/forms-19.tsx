"use client"

import { useState } from "react"
import {
  Star,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Textarea } from "@workspace/ui/components/textarea"
import { cn } from "@workspace/ui/lib/utils"

const ratingLabels = ["", "Disappointing", "Below expectations", "It is fine", "Really good", "Exceptional"]

const fitOptions = ["Easier than expected", "As expected", "Harder than expected"]

const tags = ["Clean code", "Responsive", "Dark mode", "Easy to customise", "Great docs", "Fast"]

export default function Forms19() {
  const [rating, setRating] = useState(4)
  const [hover, setHover] = useState(0)
  const [fit, setFit] = useState("As expected")
  const [picked, setPicked] = useState<string[]>(["Clean code", "Dark mode"])
  const shown = hover || rating

  return (
    <section className="w-full bg-muted/40 py-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[320px_1fr]">
        <div className="h-fit border border-border bg-background p-6">
          <img
            src="/images/templates/portfolio-simple.jpg"
            alt="Designali Portfolio Simple template"
            className="aspect-square w-full object-cover"
          />
          <p className="mt-5 text-xs text-muted-foreground">Order #48213 · Purchased 9 Nov</p>
          <h2 className="mt-1 text-lg font-semibold tracking-tight">Portfolio Simple Template</h2>
          <p className="text-sm text-muted-foreground">Next.js / Tailwind CSS</p>
        </div>

        <form className="space-y-8 border border-border bg-background p-6 md:p-8">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">How was your Designali template?</h3>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <div className="flex" onMouseLeave={() => setHover(0)} role="radiogroup" aria-label="Rating">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    type="button"
                    role="radio"
                    aria-checked={rating === value}
                    aria-label={`${value} star${value > 1 ? "s" : ""}`}
                    onMouseEnter={() => setHover(value)}
                    onClick={() => setRating(value)}
                    className="p-1"
                  >
                    <Star
                      className={cn(
                        "size-8 transition-colors",
                        value <= shown ? "fill-amber-400 text-amber-400" : "text-muted-foreground/40"
                      )}
                    />
                  </button>
                ))}
              </div>
              <span className="text-sm text-muted-foreground" aria-live="polite">{ratingLabels[shown]}</span>
            </div>
          </div>

          <fieldset>
            <legend className="text-sm font-medium">How was the setup?</legend>
            <div className="mt-3 grid grid-cols-3 border border-border">
              {fitOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setFit(option)}
                  aria-pressed={fit === option}
                  className={cn(
                    "border-border px-2 py-2.5 text-xs transition-colors not-last:border-r",
                    fit === option ? "bg-foreground text-background" : "hover:bg-muted"
                  )}
                >
                  {option}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-sm font-medium">What stood out?</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((tag) => {
                const on = picked.includes(tag)
                return (
                  <button
                    key={tag}
                    type="button"
                    aria-pressed={on}
                    onClick={() =>
                      setPicked((list) => (on ? list.filter((t) => t !== tag) : [...list, tag]))
                    }
                    className={cn(
                      "rounded-full border px-3 py-1.5 text-xs transition-colors",
                      on ? "border-foreground bg-muted" : "border-border text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {tag}
                  </button>
                )
              })}
            </div>
          </fieldset>

          <div className="space-y-2">
            <Label htmlFor="f19-title">Headline</Label>
            <Input id="f19-title" placeholder="Shipped my portfolio in an afternoon" className="h-10" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="f19-body">Your review</Label>
            <Textarea id="f19-body" rows={4} placeholder="Swapped in my content, deployed on Vercel and it just worked..." />
          </div>

          <div className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <Label className="flex items-center gap-2 text-xs font-normal text-muted-foreground">
              <Checkbox />
              Post with my first name only
            </Label>
            <Button type="submit" size="lg">Publish review</Button>
          </div>
        </form>
      </div>
    </section>
  )
}
