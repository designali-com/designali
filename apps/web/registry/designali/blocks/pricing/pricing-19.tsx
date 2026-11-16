import {
  Check,
  X,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

const rows: { label: string; free: boolean | string; pro: boolean | string }[] = [
  { label: "Notes and documents", free: "Unlimited", pro: "Unlimited" },
  { label: "File uploads", free: "5 MB each", pro: "2 GB each" },
  { label: "Page history", free: "7 days", pro: "Forever" },
  { label: "Offline mode", free: true, pro: true },
  { label: "Guest collaborators", free: "2", pro: "100" },
  { label: "AI summaries", free: false, pro: true },
  { label: "Custom publishing domain", free: false, pro: true },
  { label: "Priority support", free: false, pro: true },
]

function Value({ value }: { value: boolean | string }) {
  if (value === true)
    return <Check className="size-4 text-foreground" aria-label="Included" />
  if (value === false)
    return <X className="size-4 text-muted-foreground/60" aria-label="Not included" />
  return <span>{value}</span>
}

export default function Pricing19() {
  return (
    <section className="w-full bg-background py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-3xl font-semibold tracking-tight md:text-5xl">
          Free vs Pro
        </h2>
        <p className="mt-4 text-center text-muted-foreground">
          Free is genuinely useful. Pro is for when your notes become your
          business.
        </p>
        <div className="mt-12 grid grid-cols-[1fr_5.5rem_5.5rem] sm:grid-cols-[1fr_10rem_10rem]">
          <div />
          <div className="flex flex-col items-center gap-1 border border-b-0 border-border p-3 text-center sm:p-5">
            <span className="text-sm font-medium">Free</span>
            <span className="text-xl font-semibold sm:text-3xl">$0</span>
          </div>
          <div className="flex flex-col items-center gap-1 border border-b-0 border-l-0 border-foreground bg-foreground p-3 text-center text-background sm:p-5">
            <span className="text-sm font-medium">Pro</span>
            <span className="text-xl font-semibold sm:text-3xl">$8</span>
          </div>
          {rows.map((row) => (
            <div key={row.label} className="contents">
              <div className="flex items-center border-t border-border py-4 pe-3 text-sm">
                {row.label}
              </div>
              <div className="flex items-center justify-center border-t border-l border-border px-2 py-4 text-center text-xs text-muted-foreground sm:text-sm">
                <Value value={row.free} />
              </div>
              <div className="flex items-center justify-center border-t border-l border-border bg-muted/60 px-2 py-4 text-center text-xs font-medium sm:text-sm">
                <Value value={row.pro} />
              </div>
            </div>
          ))}
          <div className="border-t border-border" />
          <div className="border-t border-border p-2 sm:p-4">
            <Button
              variant="outline"
              className="w-full px-2"
              nativeButton={false}
              render={<a href="#" />}
            >
              Sign up
            </Button>
          </div>
          <div className="border-t border-border bg-muted/60 p-2 sm:p-4">
            <Button
              className="w-full px-2"
              nativeButton={false}
              render={<a href="#" />}
            >
              Go Pro
            </Button>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Pro is $8 per month billed yearly, or $10 month to month.
        </p>
      </div>
    </section>
  )
}
