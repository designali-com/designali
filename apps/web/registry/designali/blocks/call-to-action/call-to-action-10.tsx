"use client"

import { useState } from "react"
import {
  ArrowRight,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Switch } from "@workspace/ui/components/switch"

export default function CallToAction10() {
  const [yearly, setYearly] = useState(true)
  const price = yearly ? 19 : 24

  return (
    <section className="w-full bg-muted/40 px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Simple pricing
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-5xl">
            One plan. Every feature. Cancel whenever.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
            No seat minimums, no add-on menus, no sales calls. Pay per editor
            and get every Designali template, block and icon.
          </p>
        </div>
        <div className="border border-border bg-background p-8 md:p-10">
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm font-medium">Studio plan</span>
            <label className="flex items-center gap-2 text-xs text-muted-foreground">
              Monthly
              <Switch
                checked={yearly}
                onCheckedChange={setYearly}
                aria-label="Bill yearly"
              />
              Yearly
            </label>
          </div>
          <div className="mt-8 flex items-end gap-2">
            <span className="text-6xl font-medium tracking-tight">
              ${price}
            </span>
            <span className="pb-2 text-sm text-muted-foreground">
              / editor / month
            </span>
          </div>
          <p className="mt-2 h-5 text-xs text-chart-3 dark:text-primary">
            {yearly ? "Billed $228 yearly. You save $60." : "Switch to yearly and save 20%."}
          </p>
          <Button
            size="lg"
            className="mt-8 w-full"
            nativeButton={false}
            render={<a href="#" />}
          >
            Get started
            <ArrowRight data-icon="inline-end" />
          </Button>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Free blocks and icons are always free on designali.com.
          </p>
        </div>
      </div>
    </section>
  )
}
