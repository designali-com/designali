const rounds = [
  { stage: "Pre-seed", date: "Mar 2022", amount: "$1.2M", lead: "Lantern Ventures" },
  { stage: "Seed", date: "Jan 2023", amount: "$6.5M", lead: "Halcyon Partners" },
  { stage: "Series A", date: "Sep 2025", amount: "$28M", lead: "Meridian Capital" },
]

const backers = [
  "Lantern Ventures",
  "Halcyon Partners",
  "Meridian Capital",
  "Northgate Fund",
  "Copperline",
  "Basalt Angels",
  "Field & Ash",
  "Orchard Syndicate",
]

const angels = [
  { name: "Priya Natarajan", note: "ex-VP Eng, payments platform" },
  { name: "Lukas Brenner", note: "Founder, open-source database" },
  { name: "Amaka Eze", note: "Former COO, logistics marketplace" },
]

const initials = (name: string) =>
  name
    .replace("&", "")
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)

export default function Sections18() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Backed by people who have built this before.
          </h2>
          <p className="text-sm leading-6 text-muted-foreground md:text-right">
            <span className="text-2xl font-semibold text-foreground">$35.7M</span> raised to date
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
                <span className="font-mono">{round.date}</span>
              </div>
              <p className="mt-6 text-4xl font-semibold tracking-tight">{round.amount}</p>
              <p className="mt-2 text-sm text-muted-foreground">Led by {round.lead}</p>
              <div className="mt-6 h-1 bg-muted">
                <div className="h-full bg-foreground" style={{ width: `${[8, 26, 100][index]}%` }} />
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div>
            <h3 className="text-sm font-medium">Institutional investors</h3>
            <ul className="mt-6 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
              {backers.map((backer) => (
                <li key={backer} className="flex h-24 items-center justify-center gap-2 bg-background px-3 text-center">
                  <span className="flex size-7 shrink-0 items-center justify-center bg-muted font-mono text-[10px]">
                    {initials(backer)}
                  </span>
                  <span className="text-xs font-medium sm:text-sm">{backer}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium">Angels</h3>
            <ul className="mt-6 divide-y divide-border border-y border-border">
              {angels.map((angel) => (
                <li key={angel.name} className="flex items-center gap-4 py-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium">
                    {initials(angel.name)}
                  </span>
                  <span>
                    <span className="block text-sm font-medium">{angel.name}</span>
                    <span className="text-xs text-muted-foreground">{angel.note}</span>
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
