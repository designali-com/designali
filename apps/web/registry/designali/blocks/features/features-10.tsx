import { Check, Minus } from "lucide-react"

const rows = [
  { feature: "Unlimited projects", us: true, them: false },
  { feature: "Real-time collaboration", us: true, them: true },
  { feature: "Version history", us: "Forever", them: "30 days" },
  { feature: "Code export", us: "React, Vue, HTML", them: "HTML only" },
  { feature: "Self-hosting option", us: true, them: false },
  { feature: "Priority support", us: "Included", them: "Add-on" },
]

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="mx-auto size-4" />
  if (value === false)
    return <Minus className="mx-auto size-4 text-muted-foreground" />
  return <span>{value}</span>
}

export default function Features10() {
  return (
    <section className="w-full bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
          Why teams switch to Canvas
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
          A side-by-side look at what you get compared with the typical
          design tool most teams start with.
        </p>
        <div className="mt-12 overflow-x-auto border border-border">
          <table className="w-full min-w-[520px] text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40 text-left">
                <th className="px-6 py-4 font-medium">Feature</th>
                <th className="w-40 px-6 py-4 text-center font-medium">
                  Canvas
                </th>
                <th className="w-40 px-6 py-4 text-center font-medium text-muted-foreground">
                  Typical tool
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.feature}
                  className="border-b border-border last:border-b-0"
                >
                  <td className="px-6 py-4">{row.feature}</td>
                  <td className="bg-muted/20 px-6 py-4 text-center">
                    <Cell value={row.us} />
                  </td>
                  <td className="px-6 py-4 text-center text-muted-foreground">
                    <Cell value={row.them} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
