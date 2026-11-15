import { Bell, Heart, MessageCircle, Repeat2, Search, Smartphone } from "lucide-react"

const left = [
  { icon: Search, title: "Instant search", body: "Find any note by phrase, tag or the photo text inside it." },
  { icon: Bell, title: "Gentle nudges", body: "Reminders that wait until you are back at your desk." },
  { icon: Smartphone, title: "Offline first", body: "Everything works on a plane and syncs when you land." },
]
const right = [
  { icon: Repeat2, title: "Daily review", body: "A two-minute recap of what you captured yesterday." },
  { icon: MessageCircle, title: "Shared spaces", body: "Invite a partner to a list without sharing everything." },
  { icon: Heart, title: "Habit streaks", body: "Quiet progress tracking with no guilt-trip badges." },
]

function Column({ items, align }: { items: typeof left; align: "left" | "right" }) {
  return (
    <ul className="space-y-10">
      {items.map(({ icon: Icon, title, body }) => (
        <li
          key={title}
          className={`flex gap-4 ${align === "left" ? "lg:flex-row-reverse lg:text-right" : ""}`}
        >
          <span className="flex size-10 shrink-0 items-center justify-center border border-border bg-muted/60">
            <Icon className="size-4" />
          </span>
          <div>
            <h3 className="text-base font-medium">{title}</h3>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">{body}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default function Features17() {
  return (
    <section className="w-full bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="mx-auto max-w-2xl text-center text-3xl font-medium tracking-tight md:text-5xl">
          A notebook that fits the way you think.
        </h2>
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1fr_auto_1fr] lg:gap-14">
          <Column items={left} align="left" />
          <div className="mx-auto w-56 rounded-[2.5rem] border-8 border-foreground bg-background p-3 shadow-2xl">
            <div className="mx-auto h-4 w-16 rounded-full bg-foreground" />
            <div className="mt-5 space-y-2 px-1">
              <div className="text-sm font-medium">Today</div>
              {["Call the landlord", "Draft Q1 goals", "Book dentist", "Order birthday gift"].map(
                (t, i) => (
                  <div key={t} className="flex items-center gap-2 border border-border px-2 py-2 text-xs">
                    <span
                      className={`size-3 shrink-0 rounded-full border ${i < 2 ? "border-emerald-500 bg-emerald-500" : "border-border"}`}
                    />
                    <span className={i < 2 ? "text-muted-foreground line-through" : ""}>{t}</span>
                  </div>
                )
              )}
              <div className="mt-3 h-24 bg-gradient-to-br from-amber-200 to-rose-200 dark:from-amber-900/60 dark:to-rose-900/60" />
            </div>
          </div>
          <Column items={right} align="right" />
        </div>
      </div>
    </section>
  )
}
