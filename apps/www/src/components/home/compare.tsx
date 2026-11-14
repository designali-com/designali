import { Section } from "./section-shell"

const rows = [
  ["Investment", "$2,000 / month, flat", "Salary, benefits and equipment", "Low rate, rework adds up"],
  ["Time to start", "Within days", "Weeks to months to hire", "Weeks to find a good one"],
  ["Skill range", "Brand, web, UI/UX, motion and dev", "One person's skill set", "Usually one skill each"],
  ["Collaboration", "Direct line to your designer", "You manage them", "You manage each freelancer"],
  ["Risk", "Pause or cancel anytime", "A hard hire to undo", "Quality is a gamble"],
]

export function Compare() {
  return (
    <Section title="How we compare" eyebrow="Designali vs. the usual options">
      <div className="overflow-x-auto border border-dotted">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-dotted text-xs text-muted-foreground">
              <th className="p-4 font-normal" />
              <th className="p-4 font-medium text-primary">Designali</th>
              <th className="p-4 font-normal">In-house hire</th>
              <th className="p-4 font-normal">Freelancers</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([k, ...v]) => (
              <tr key={k} className="border-b border-dotted last:border-b-0">
                <th className="p-4 font-medium">{k}</th>
                {v.map((c, i) => (
                  <td key={i} className={i === 0 ? "bg-muted/40 p-4" : "p-4 text-muted-foreground"}>
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  )
}
