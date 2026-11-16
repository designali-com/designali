import {
  Check,
  Minus,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const models = [
  { name: "Designali Solo", price: 49, tag: "", tone: "from-zinc-300 to-zinc-100 dark:from-zinc-700 dark:to-zinc-900" },
  { name: "Designali Pro", price: 149, tag: "Most popular", tone: "from-stone-500 to-stone-200 dark:from-stone-600 dark:to-stone-900" },
  { name: "Designali Studio", price: 349, tag: "", tone: "from-neutral-800 to-neutral-400 dark:from-neutral-500 dark:to-neutral-900" },
]

const rows: { label: string; values: (string | boolean)[] }[] = [
  { label: "Templates", values: ["1 template", "All templates", "All templates"] },
  { label: "Seats", values: ["1 seat", "1 seat", "10 seats"] },
  { label: "460+ blocks", values: [false, true, true] },
  { label: "Designali Icons Pro", values: [false, true, true] },
  { label: "Figma files", values: ["Template only", "Included", "Included, editable"] },
  { label: "Projects", values: ["1 project", "Unlimited", "Unlimited"] },
  { label: "Call with Ali Imam", values: [false, false, true] },
  { label: "Free updates", values: ["1 year", "2 years", "Lifetime"] },
]

function Machine({ tone }: { tone: string }) {
  return (
    <div className={cn("relative mx-auto aspect-square w-full max-w-36 bg-gradient-to-b", tone)}>
      <span className="absolute inset-x-[18%] top-[14%] h-[14%] bg-background/40" />
      <span className="absolute top-[38%] left-1/2 h-[20%] w-[18%] -translate-x-1/2 bg-foreground/70" />
      <span className="absolute inset-x-[22%] bottom-[10%] h-[6%] bg-foreground/50" />
    </div>
  )
}

export default function Ecommerce08() {
  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">Compare Designali licenses</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Every license includes Next.js, React and Tailwind CSS source code and a 14-day refund window.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr>
                <th className="w-1/4" />
                {models.map((m) => (
                  <th
                    key={m.name}
                    scope="col"
                    className={cn(
                      "w-1/4 border-x border-t border-transparent p-4 align-bottom font-normal",
                      m.tag && "border-border bg-muted/40"
                    )}
                  >
                    {m.tag ? (
                      <span className="mb-3 inline-block bg-primary px-2 py-0.5 text-[10px] tracking-wide text-primary-foreground uppercase">
                        {m.tag}
                      </span>
                    ) : (
                      <span className="mb-3 inline-block h-5" />
                    )}
                    <Machine tone={m.tone} />
                    <p className="mt-4 font-medium">{m.name}</p>
                    <p className="mt-1 text-muted-foreground tabular-nums">${m.price}</p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-b border-border">
                  <th scope="row" className="py-3 pr-4 text-left font-normal text-muted-foreground">
                    {row.label}
                  </th>
                  {row.values.map((v, i) => (
                    <td
                      key={i}
                      className={cn("border-x border-transparent px-4 py-3 text-center", models[i]?.tag && "border-border bg-muted/40")}
                    >
                      {typeof v === "boolean" ? (
                        v ? (
                          <Check className="mx-auto size-4" aria-label="Yes" />
                        ) : (
                          <Minus className="mx-auto size-4 text-muted-foreground/50" aria-label="No" />
                        )
                      ) : (
                        v
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td />
                {models.map((m) => (
                  <td
                    key={m.name}
                    className={cn("border-x border-b border-transparent p-4", m.tag && "border-border bg-muted/40")}
                  >
                    <Button className="w-full" variant={m.tag ? "default" : "outline"}>
                      Add to cart
                    </Button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
