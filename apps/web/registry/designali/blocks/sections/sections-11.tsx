import {
  ArrowRight,
  Check,
  X,
} from "@designali/icons"

const before = [
  "Brand, UI and code handled by three different vendors",
  "Figma files that never quite match the live site",
  "Handoff docs nobody reads",
  "Every new page designed from scratch",
]

const after = [
  "Brand identity, UI/UX and Next.js from one studio",
  "What you approve in Figma is what ships",
  "A design system your team can keep using",
  "460+ blocks to build new pages fast",
]

export default function Sections11() {
  return (
    <section className="w-full bg-muted/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mx-auto max-w-2xl text-center text-4xl font-semibold tracking-tight md:text-5xl">
          Shipping a product, before and after Designali.
        </h2>

        <div className="relative mt-14 grid gap-4 md:grid-cols-2">
          <div className="border border-border bg-background p-6 md:p-10">
            <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">The old way</p>
            <p className="mt-4 text-3xl font-semibold tracking-tight text-muted-foreground">3 teams</p>
            <p className="text-xs text-muted-foreground">brand, design and dev, all separate</p>
            <ul className="mt-8 space-y-4">
              {before.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                  <X className="mt-0.5 size-4 shrink-0 text-destructive dark:text-destructive" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <span className="absolute top-1/2 left-1/2 z-10 hidden size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-border bg-background md:flex">
            <ArrowRight className="size-4" />
          </span>

          <div className="border border-foreground bg-foreground p-6 text-background md:p-10">
            <p className="text-xs font-medium tracking-widest uppercase opacity-60">With Designali</p>
            <p className="mt-4 text-3xl font-semibold tracking-tight">1 studio</p>
            <p className="text-xs opacity-60">design se code tak</p>
            <ul className="mt-8 space-y-4">
              {after.map((item) => (
                <li key={item} className="flex gap-3 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary dark:text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
