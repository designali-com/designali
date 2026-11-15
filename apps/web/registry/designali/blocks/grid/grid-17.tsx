import { Check, GitPullRequest, Sparkles } from "lucide-react"

const bars = [42, 58, 51, 66, 72, 64, 81, 77, 88, 94, 86, 98]
const reviewers = [
  { initials: "AO", tone: "bg-orange-500" },
  { initials: "TI", tone: "bg-sky-600" },
  { initials: "HS", tone: "bg-rose-500" },
  { initials: "NC", tone: "bg-emerald-600" },
]

export default function Grid17() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Your whole release, in one window.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Shipyard pulls builds, reviews, flags and metrics into a single view
            so nobody has to ask &ldquo;is it out yet?&rdquo;
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-6">
          {/* Chart */}
          <div className="flex flex-col border border-border bg-card p-6 md:col-span-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-medium">Deploy frequency</h3>
                <p className="text-sm text-muted-foreground">Production deploys per week</p>
              </div>
              <span className="font-mono text-2xl font-semibold">98</span>
            </div>
            <div className="mt-8 flex h-40 items-end gap-1.5 md:gap-2">
              {bars.map((value, index) => (
                <div
                  key={index}
                  className={index === bars.length - 1 ? "flex-1 bg-foreground" : "flex-1 bg-muted-foreground/25"}
                  style={{ height: `${value}%` }}
                />
              ))}
            </div>
          </div>

          {/* Reviewers */}
          <div className="flex flex-col justify-between gap-8 border border-border bg-card p-6 md:col-span-2">
            <div>
              <GitPullRequest className="size-5 text-muted-foreground" />
              <h3 className="mt-4 font-medium">Review in parallel</h3>
              <p className="mt-1 text-sm text-muted-foreground">Median time to approval: 42 minutes.</p>
            </div>
            <div className="flex items-center">
              {reviewers.map((reviewer) => (
                <span
                  key={reviewer.initials}
                  className={`-ml-2 flex size-10 items-center justify-center rounded-full border-2 border-card text-xs font-semibold text-white first:ml-0 ${reviewer.tone}`}
                >
                  {reviewer.initials}
                </span>
              ))}
              <span className="-ml-2 flex size-10 items-center justify-center rounded-full border-2 border-card bg-muted text-xs font-medium">
                +9
              </span>
            </div>
          </div>

          {/* Flags */}
          <div className="border border-border bg-card p-6 md:col-span-2">
            <h3 className="font-medium">Feature flags</h3>
            <ul className="mt-5 space-y-3">
              {[
                ["new-checkout", true],
                ["ai-summaries", true],
                ["legacy-export", false],
              ].map(([flag, on]) => (
                <li key={String(flag)} className="flex items-center justify-between gap-4">
                  <span className="font-mono text-xs">{flag}</span>
                  <span
                    className={`flex h-5 w-9 items-center p-0.5 transition-colors ${
                      on ? "justify-end bg-emerald-500" : "justify-start bg-muted"
                    }`}
                  >
                    <span className="size-4 bg-white shadow-sm" />
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Code */}
          <div className="overflow-hidden border border-border bg-neutral-950 p-6 text-neutral-100 md:col-span-2">
            <p className="text-xs text-neutral-400">shipyard.config.ts</p>
            <pre className="mt-4 overflow-x-auto font-mono text-xs leading-6">
              <code>
                <span className="text-violet-300">export default</span> {"{"}
                {"\n"}  regions: [<span className="text-emerald-300">&quot;fra&quot;</span>, <span className="text-emerald-300">&quot;iad&quot;</span>],
                {"\n"}  canary: <span className="text-amber-300">0.05</span>,
                {"\n"}  rollback: <span className="text-sky-300">&quot;auto&quot;</span>,
                {"\n"}{"}"}
              </code>
            </pre>
          </div>

          {/* AI summary */}
          <div className="flex flex-col gap-4 border border-border bg-card p-6 md:col-span-2">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Sparkles className="size-4" /> Release summary
            </div>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {["Checkout v2 live for 5% of EU traffic", "3 migrations applied, 0 errors", "Error rate flat at 0.02%"].map((line) => (
                <li key={line} className="flex gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
