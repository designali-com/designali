import { Check, Minus } from "lucide-react"

const rows = [
  { feature: "Unlimited projects", us: true, them: false },
  { feature: "Offline editing", us: true, them: false },
  { feature: "Single sign-on on every plan", us: true, them: false },
  { feature: "Native version control", us: true, them: true },
  { feature: "Exports without watermarks", us: true, them: false },
  { feature: "Under 200ms load time", us: true, them: false },
]

export default function Sections04() {
  return (
    <section className="w-full bg-muted/40 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            Compare
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Why teams are switching
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
            A side-by-side look at what you get with Plaintext versus the
            typical legacy design tool.
          </p>
        </div>

        <div className="mt-14 border border-border bg-background">
          <div className="grid grid-cols-[1fr_100px_100px] border-b border-border text-xs font-medium md:grid-cols-[1fr_160px_160px]">
            <div className="p-4 text-muted-foreground">Feature</div>
            <div className="border-l border-border bg-foreground p-4 text-center text-background">
              Plaintext
            </div>
            <div className="border-l border-border p-4 text-center text-muted-foreground">
              Others
            </div>
          </div>
          {rows.map((row) => (
            <div
              key={row.feature}
              className="grid grid-cols-[1fr_100px_100px] border-border text-sm not-last:border-b md:grid-cols-[1fr_160px_160px]"
            >
              <div className="p-4">{row.feature}</div>
              <div className="flex items-center justify-center border-l border-border bg-muted/50">
                {row.us ? <Check className="size-4" /> : <Minus className="size-4 text-muted-foreground" />}
              </div>
              <div className="flex items-center justify-center border-l border-border">
                {row.them ? (
                  <Check className="size-4 text-muted-foreground" />
                ) : (
                  <Minus className="size-4 text-muted-foreground" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
