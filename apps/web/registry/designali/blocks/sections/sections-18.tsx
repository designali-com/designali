import { Figma, Nextjs, TailwindCSS, TypeScript, Vercel } from "@designali/logos"

const rounds = [
  { stage: "Blocks", date: "/blocks", amount: "460+", lead: "Sections for every page" },
  { stage: "Landing pages", date: "/templates", amount: "240+", lead: "Pages ready to launch" },
  { stage: "UI designs", date: "/ui", amount: "2300+", lead: "Examples to learn from" },
]

const stack = [
  { name: "Next.js", logo: <Nextjs className="size-6" /> },
  { name: "TypeScript", logo: <TypeScript className="size-6" /> },
  { name: "Tailwind CSS", logo: <TailwindCSS className="size-6" /> },
  { name: "Figma", logo: <Figma className="size-6" /> },
  { name: "Vercel", logo: <Vercel className="size-6" /> },
  { name: "React", logo: null },
  { name: "shadcn-style UI", logo: null },
  { name: "AI workflows", logo: null },
]

const packages = [
  { name: "@designali/icons", note: "4000+ icons for React" },
  { name: "@designali/logos", note: "Brand logos as components" },
  { name: "@designali/vectors", note: "Illustrations and abstract shapes" },
]

const initials = (name: string) =>
  name
    .replace("@designali/", "")
    .split(/[\s-]/)
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase())
    .join("")
    .slice(0, 2)

export default function Sections18() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Built with the tools we use every day.
          </h2>
          <p className="text-sm leading-6 text-muted-foreground md:text-right">
            <span className="text-2xl font-semibold text-foreground">3000+</span>{" "}
            resources on designali.com
          </p>
        </div>

        <ol className="mt-14 grid border border-border md:grid-cols-3">
          {rounds.map((round, index) => (
            <li
              key={round.stage}
              className="relative border-border p-6 not-last:border-b md:not-last:border-r md:not-last:border-b-0 md:p-8"
            >
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{round.stage}</span>
                <span>{round.date}</span>
              </div>
              <p className="mt-6 text-4xl font-semibold tracking-tight">{round.amount}</p>
              <p className="mt-2 text-sm text-muted-foreground">{round.lead}</p>
              <div className="mt-6 h-1 bg-muted">
                <div className="h-full bg-primary" style={{ width: `${[20, 10, 100][index]}%` }} />
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div>
            <h3 className="text-sm font-medium">Our stack</h3>
            <ul className="mt-6 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
              {stack.map((item) => (
                <li key={item.name} className="flex h-24 items-center justify-center gap-2 bg-background px-3 text-center">
                  {item.logo ?? (
                    <span className="flex size-7 shrink-0 items-center justify-center bg-muted text-[10px]">
                      {initials(item.name)}
                    </span>
                  )}
                  <span className="text-xs font-medium sm:text-sm">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium">Designali packages</h3>
            <ul className="mt-6 divide-y divide-border border-y border-border">
              {packages.map((pkg) => (
                <li key={pkg.name} className="flex items-center gap-4 py-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium">
                    {initials(pkg.name)}
                  </span>
                  <span>
                    <code className="block font-mono text-sm font-medium">{pkg.name}</code>
                    <span className="text-xs text-muted-foreground">{pkg.note}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
