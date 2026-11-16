import { cn } from "@workspace/ui/lib/utils"

const rowA = [
  { quote: "Onboarding new hires went from a week to a day.", name: "Lena Ortiz", role: "People Lead, Brightwater" },
  { quote: "Finally, docs that stay up to date on their own.", name: "Sam Okafor", role: "CTO, Fernhill" },
  { quote: "Our support backlog is half what it was in March.", name: "Mei Chen", role: "CX Manager, Tidepool" },
  { quote: "It replaced three tools and one very long wiki.", name: "Arjun Patel", role: "Eng Manager, Copperline" },
  { quote: "The search is uncannily good. It just finds things.", name: "Clara Dubois", role: "PM, Northgate" },
]
const rowB = [
  { quote: "Set it up on Friday, whole company was on it by Tuesday.", name: "Noah Fischer", role: "IT Lead, Quarry & Co" },
  { quote: "Our engineers stopped asking the same questions in chat.", name: "Hana Sato", role: "VP Eng, Lumenfield" },
  { quote: "Permissions are simple enough that legal signed off in a day.", name: "Diego Ruiz", role: "Counsel, Arbor Health" },
  { quote: "Worth it for the Slack integration alone.", name: "Ava Thompson", role: "Founder, Pinecrest" },
  { quote: "I trust what I read in it, which is new for a wiki.", name: "Felix Braun", role: "Analyst, Ridgeway" },
]

const tones = [
  "bg-primary/10 text-chart-4 dark:bg-primary/10 dark:text-chart-1",
  "bg-primary/10 text-chart-4 dark:bg-primary/10 dark:text-chart-1",
  "bg-primary/10 text-chart-4 dark:bg-primary/10 dark:text-chart-1",
  "bg-primary/10 text-chart-4 dark:bg-primary/10 dark:text-chart-1",
  "bg-primary/10 text-chart-4 dark:bg-primary/10 dark:text-chart-1",
]

function Row({ items, reverse }: { items: typeof rowA; reverse?: boolean }) {
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={cn(
          "flex w-max gap-4 pr-4 motion-reduce:animate-none",
          reverse
            ? "animate-[t08-scroll_45s_linear_infinite_reverse]"
            : "animate-[t08-scroll_45s_linear_infinite]"
        )}
      >
        {[...items, ...items].map((t, i) => (
          <figure key={i} className="w-72 shrink-0 border border-border bg-card p-5 md:w-80">
            <blockquote className="text-sm leading-6">&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <span className={cn("flex size-8 items-center justify-center rounded-full text-xs font-medium", tones[i % tones.length])}>
                {t.name.split(" ").map((p) => p[0]).join("")}
              </span>
              <span className="text-xs">
                <span className="block font-medium">{t.name}</span>
                <span className="text-muted-foreground">{t.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}

export default function Testimonials08() {
  return (
    <section className="w-full overflow-hidden bg-muted/30 py-20 md:py-28">
      <style>{`@keyframes t08-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
          Loved by 4,000 teams who hate wikis.
        </h2>
      </div>
      <div className="mt-14 space-y-4">
        <Row items={rowA} />
        <Row items={rowB} reverse />
      </div>
    </section>
  )
}
