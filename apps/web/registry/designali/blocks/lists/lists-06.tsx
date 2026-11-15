import { AtSign, GitMerge, type LucideIcon, MessageSquare, UserPlus, Zap } from "lucide-react"

type Activity = {
  who: string
  initials: string
  tone: string
  icon: LucideIcon
  action: string
  target: string
  time: string
  quote?: string
  unread?: boolean
}

const days: { label: string; items: Activity[] }[] = [
  {
    label: "Today",
    items: [
      { who: "Hana Sato", initials: "HS", tone: "bg-rose-500", icon: AtSign, action: "mentioned you in", target: "Onboarding flow v3", time: "12m", quote: "Can we get the empty state copy reviewed before Thursday's crit?", unread: true },
      { who: "Tomás Ibarra", initials: "TI", tone: "bg-sky-600", icon: GitMerge, action: "merged", target: "#2184 Canvas zoom fixes", time: "48m", unread: true },
      { who: "Automation", initials: "⚡", tone: "bg-amber-500", icon: Zap, action: "moved 6 issues to", target: "Ready for QA", time: "2h" },
    ],
  },
  {
    label: "Yesterday",
    items: [
      { who: "Priya Raman", initials: "PR", tone: "bg-violet-600", icon: MessageSquare, action: "replied to", target: "Q1 roadmap draft", time: "Tue 16:20", quote: "Agree on pushing exports to Q2. Let's keep the AI summaries scope tight." },
      { who: "Lukas Weber", initials: "LW", tone: "bg-lime-700", icon: UserPlus, action: "invited 3 people to", target: "Brand refresh", time: "Tue 11:02" },
      { who: "Zara Malik", initials: "ZM", tone: "bg-emerald-600", icon: MessageSquare, action: "commented on", target: "Enterprise SSO spec", time: "Tue 09:45" },
    ],
  },
]

export default function Lists06() {
  return (
    <section className="w-full bg-muted/30 py-24">
      <div className="mx-auto max-w-2xl px-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">Activity</h2>
          <a href="#" className="text-xs text-muted-foreground hover:text-foreground">
            Mark all as read
          </a>
        </div>

        <div className="mt-8 space-y-10">
          {days.map((day) => (
            <div key={day.label}>
              <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">{day.label}</p>
              <ol className="mt-4 border border-border bg-background">
                {day.items.map((item) => (
                  <li key={item.target} className="relative flex gap-4 border-b border-border p-5 last:border-b-0">
                    {item.unread && <span className="absolute top-0 left-0 h-full w-0.5 bg-sky-500" />}
                    <div className="relative shrink-0">
                      <span className={`flex size-9 items-center justify-center rounded-full text-xs font-semibold text-white ${item.tone}`}>
                        {item.initials}
                      </span>
                      <span className="absolute -right-1 -bottom-1 flex size-5 items-center justify-center rounded-full border border-border bg-background">
                        <item.icon className="size-3 text-muted-foreground" />
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-sm leading-6">
                          <span className="font-medium">{item.who}</span>{" "}
                          <span className="text-muted-foreground">{item.action}</span>{" "}
                          <a href="#" className="font-medium underline-offset-4 hover:underline">
                            {item.target}
                          </a>
                        </p>
                        <time className="shrink-0 font-mono text-[10px] text-muted-foreground">{item.time}</time>
                      </div>
                      {item.quote && (
                        <p className="mt-2 border-l-2 border-border pl-3 text-sm leading-6 text-muted-foreground">
                          {item.quote}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
