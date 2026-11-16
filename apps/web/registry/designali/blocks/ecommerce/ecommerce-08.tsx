import {
  Check,
  Minus,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
import { IMac } from "@/registry/designali/ui/apple/imac"
import { IPhone } from "@/registry/designali/ui/apple/iphone"
import { Macbook } from "@/registry/designali/ui/apple/macbook"

const models = [
  { name: "Designali Solo", price: 49, tag: "" },
  { name: "Designali Pro", price: 149, tag: "Most popular" },
  { name: "Designali Studio", price: 349, tag: "" },
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

function Device({ index }: { index: number }) {
  const screen = (
    <img src="/images/templates/design-agency.jpg" alt="" className="size-full object-cover object-top" />
  )
  return (
    <div className="mx-auto flex aspect-square w-full max-w-36 items-end justify-center">
      {index === 0 && (
        <IPhone size="sm" color="silver" className="h-full! max-w-full">
          {screen}
        </IPhone>
      )}
      {index === 1 && (
        <Macbook variant="macbook-pro" color="silver" size="sm" className="w-full! max-w-full">
          {screen}
        </Macbook>
      )}
      {index === 2 && (
        <IMac size="sm" color="silver" className="w-full! max-w-full">
          {screen}
        </IMac>
      )}
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
                {models.map((m, index) => (
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
                    <Device index={index} />
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
