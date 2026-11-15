"use client"

import { useState } from "react"
import { ArrowRight, Gift, X } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

export default function CallToAction16() {
  const [open, setOpen] = useState(true)

  return (
    <section className="relative flex min-h-[420px] w-full flex-col justify-end bg-muted/40 px-4 py-6 md:px-6">
      <div className="mx-auto mb-auto w-full max-w-6xl pt-10 text-center text-sm text-muted-foreground">
        {open ? "Page content sits here. The banner floats above it." : (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="underline underline-offset-4 hover:text-foreground"
          >
            Show the offer banner again
          </button>
        )}
      </div>
      {open && (
        <div className="mx-auto w-full max-w-4xl border border-border bg-background shadow-lg">
          <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center md:p-5">
            <div className="flex items-start gap-3 sm:items-center">
              <span className="flex size-10 shrink-0 items-center justify-center bg-gradient-to-br from-rose-500 to-orange-400 text-white">
                <Gift className="size-5" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-medium">
                  Winter release: 40% off annual plans
                </p>
                <p className="text-xs text-muted-foreground">
                  Ends Sunday at midnight. Applies to new and upgrading teams.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:ml-auto">
              <Button
                className="flex-1 sm:flex-none"
                nativeButton={false}
                render={<a href="#" />}
              >
                Claim offer
                <ArrowRight data-icon="inline-end" />
              </Button>
              <Button
                variant="ghost"
                size="icon-lg"
                aria-label="Dismiss"
                onClick={() => setOpen(false)}
              >
                <X />
              </Button>
            </div>
          </div>
          <div className="h-1 w-full bg-muted">
            <div className="h-full w-2/3 bg-gradient-to-r from-rose-500 to-orange-400" />
          </div>
        </div>
      )}
    </section>
  )
}
