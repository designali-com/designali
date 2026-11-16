import {
  ArrowRight,
  Check,
  X,
} from "@designali/icons"

const before = [
  "Quotes built in a spreadsheet, emailed as PDFs",
  "Site photos lost in five different group chats",
  "Invoices chased by phone at month end",
  "Nobody knows which crew is on which job",
]

const after = [
  "Branded quotes sent from the van, signed on the spot",
  "Every photo pinned to the job, with timestamp and GPS",
  "Automatic reminders and card payments on completion",
  "A live board of crews, jobs and travel time",
]

export default function Sections11() {
  return (
    <section className="w-full bg-muted/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mx-auto max-w-2xl text-center text-4xl font-semibold tracking-tight md:text-5xl">
          Running a trades business, before and after Plumbline.
        </h2>

        <div className="relative mt-14 grid gap-4 md:grid-cols-2">
          <div className="border border-border bg-background p-6 md:p-10">
            <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">The old way</p>
            <p className="mt-4 text-3xl font-semibold tracking-tight text-muted-foreground">11 hrs / week</p>
            <p className="text-xs text-muted-foreground">spent on admin per owner</p>
            <ul className="mt-8 space-y-4">
              {before.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                  <X className="mt-0.5 size-4 shrink-0 text-red-500 dark:text-red-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <span className="absolute top-1/2 left-1/2 z-10 hidden size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-border bg-background md:flex">
            <ArrowRight className="size-4" />
          </span>

          <div className="border border-foreground bg-foreground p-6 text-background md:p-10">
            <p className="text-xs font-medium tracking-widest uppercase opacity-60">With Plumbline</p>
            <p className="mt-4 text-3xl font-semibold tracking-tight">2.5 hrs / week</p>
            <p className="text-xs opacity-60">median across 3,200 businesses</p>
            <ul className="mt-8 space-y-4">
              {after.map((item) => (
                <li key={item} className="flex gap-3 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-emerald-400 dark:text-emerald-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
