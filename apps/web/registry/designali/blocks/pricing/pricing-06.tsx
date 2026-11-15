import { Check, Minus } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const plans = ["Basic", "Studio", "Enterprise"]

const rows: { feature: string; values: (boolean | string)[] }[] = [
  { feature: "Projects", values: ["3", "Unlimited", "Unlimited"] },
  { feature: "Team members", values: ["1", "Up to 15", "Unlimited"] },
  { feature: "Block library", values: [true, true, true] },
  { feature: "Figma source files", values: [false, true, true] },
  { feature: "Private registry", values: [false, true, true] },
  { feature: "SSO and SCIM", values: [false, false, true] },
  { feature: "Audit log", values: [false, false, true] },
  {
    feature: "Support",
    values: ["Community", "Email, 24h", "Dedicated manager"],
  },
]

export default function Pricing06() {
  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Compare plans
        </h2>
        <p className="mt-3 text-muted-foreground">
          Every plan includes free updates for life.
        </p>
        <div className="mt-10 overflow-x-auto border border-border">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="p-4 text-left font-normal text-muted-foreground">
                  Features
                </th>
                {plans.map((plan, i) => (
                  <th
                    key={plan}
                    className="border-l border-border p-4 text-left"
                  >
                    <p className="font-medium">{plan}</p>
                    <p className="mt-1 text-2xl font-semibold tracking-tight">
                      {["$12", "$48", "Custom"][i]}
                    </p>
                    <Button
                      size="sm"
                      variant={i === 1 ? "default" : "outline"}
                      className="mt-3 w-full"
                    >
                      {i === 2 ? "Contact sales" : "Get started"}
                    </Button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.feature}
                  className="border-b border-border last:border-b-0"
                >
                  <td className="p-4">{row.feature}</td>
                  {row.values.map((value, i) => (
                    <td key={i} className="border-l border-border p-4">
                      {value === true ? (
                        <Check className="size-4" aria-label="Included" />
                      ) : value === false ? (
                        <Minus
                          className="size-4 text-muted-foreground"
                          aria-label="Not included"
                        />
                      ) : (
                        value
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
