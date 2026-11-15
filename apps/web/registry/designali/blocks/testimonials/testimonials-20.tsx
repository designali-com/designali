import { cn } from "@workspace/ui/lib/utils"

const thread = [
  { from: "them", name: "Tess", text: "ok honest question, is Hearth worth it for a 6-person team?" },
  { from: "us", name: "Marcus", text: "We switched in January. Standups went from 30 min to 10 because everyone already sees what changed." },
  { from: "us", name: "Marcus", text: "Also the weekly digest is the only work email I actually read lol" },
  { from: "them", name: "Tess", text: "what about client stuff? we juggle like 8 accounts" },
  { from: "other", name: "Priya", text: "Client portals are the killer feature for us. They see progress, stop emailing for updates. Saved me ~5 hrs a week." },
  { from: "them", name: "Tess", text: "sold. signing up now" },
]

const avatar: Record<string, string> = {
  Tess: "bg-rose-200 text-rose-900 dark:bg-rose-900 dark:text-rose-100",
  Marcus: "bg-sky-200 text-sky-900 dark:bg-sky-900 dark:text-sky-100",
  Priya: "bg-amber-200 text-amber-900 dark:bg-amber-900 dark:text-amber-100",
}

export default function Testimonials20() {
  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2">
        <div>
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Overheard in a founders&apos; group chat
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-5xl">
            The best reviews happen when we are not in the room.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
            Shared with permission from members of a small-agency community.
            Names changed, typos kept.
          </p>
        </div>
        <div className="border border-border bg-muted/30 p-4 md:p-6">
          <div className="mb-4 flex items-center justify-between border-b border-border pb-3 text-xs text-muted-foreground">
            <span className="font-medium text-foreground"># tools-and-stack</span>
            <span>3 members</span>
          </div>
          <ul className="space-y-3">
            {thread.map((m, i) => {
              const mine = m.from === "them"
              return (
                <li key={i} className={cn("flex items-end gap-2", mine && "flex-row-reverse")}>
                  <span className={cn("flex size-7 shrink-0 items-center justify-center rounded-full text-[10px] font-medium", avatar[m.name])}>
                    {m.name[0]}
                  </span>
                  <div
                    className={cn(
                      "max-w-[80%] px-3.5 py-2.5 text-sm leading-6",
                      mine
                        ? "rounded-2xl rounded-br-sm bg-primary text-primary-foreground"
                        : "rounded-2xl rounded-bl-sm border border-border bg-background"
                    )}
                  >
                    {!mine && <div className="mb-0.5 text-[11px] font-medium text-muted-foreground">{m.name}</div>}
                    {m.text}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
