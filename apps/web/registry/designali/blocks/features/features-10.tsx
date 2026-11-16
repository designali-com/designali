import {
  Check,
  Minus,
} from "@designali/icons"

const rows = [
  { feature: "460+ copy-paste blocks", us: true, them: false },
  { feature: "Tailwind CSS styling", us: true, them: true },
  { feature: "Updates", us: "Lifetime", them: "1 year" },
  { feature: "Code", us: "Next.js, React, TS", them: "HTML only" },
  { feature: "4000+ icons included", us: true, them: false },
  { feature: "Support from Ali Imam", us: "Included", them: "Add-on" },
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
          Why designers switch to Designali
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
          A side-by-side look at what you get with Designali compared
          with a typical UI kit.
        </p>
        <div className="mt-12 overflow-x-auto border border-border">
          <table className="w-full min-w-[520px] text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40 text-left">
                <th className="px-6 py-4 font-medium">Feature</th>
                <th className="w-40 px-6 py-4 text-center font-medium">
                  Designali
                </th>
                <th className="w-40 px-6 py-4 text-center font-medium text-muted-foreground">
                  Typical UI kit
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
