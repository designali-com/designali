import { Compass, Feather, Handshake, Hourglass, Scale } from "lucide-react"

export default function Sections07() {
  return (
    <section className="w-full bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-xl text-4xl font-semibold tracking-tight md:text-5xl">
            Five values we hire, fire and promote on.
          </h2>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground">
            Written in 2019, rewritten twice. They are the first thing every
            new teammate reads.
          </p>
        </div>

        <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-6">
          <article className="flex flex-col justify-between gap-16 bg-foreground p-8 text-background md:col-span-2 md:p-10 lg:col-span-3 lg:row-span-2">
            <Compass className="size-6" />
            <div>
              <p className="font-mono text-xs opacity-60">01</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Customers over consensus
              </h3>
              <p className="mt-4 max-w-md text-sm leading-6 opacity-70">
                When we disagree, the tie-breaker is a recording of a real
                customer, not the most senior voice in the room.
              </p>
            </div>
          </article>

          <article className="border border-border bg-background p-6 md:col-span-2 lg:col-span-3">
            <div className="flex items-center justify-between">
              <p className="font-mono text-xs text-muted-foreground">02</p>
              <Feather className="size-5 text-muted-foreground" />
            </div>
            <h3 className="mt-6 text-xl font-semibold tracking-tight">Write it down</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Decisions live in docs, not in DMs. If it is not written, it did not happen.
            </p>
          </article>

          <article className="border border-border bg-background p-6 lg:col-span-1">
            <p className="font-mono text-xs text-muted-foreground">03</p>
            <Scale className="mt-6 size-5" />
            <h3 className="mt-3 text-base font-semibold">Fair by default</h3>
          </article>

          <article className="border border-border bg-background p-6 lg:col-span-2">
            <div className="flex items-center justify-between">
              <p className="font-mono text-xs text-muted-foreground">04</p>
              <Hourglass className="size-5 text-muted-foreground" />
            </div>
            <h3 className="mt-6 text-xl font-semibold tracking-tight">Slow is smooth</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              We ship weekly, but we never rush a migration.
            </p>
          </article>

          <article className="flex flex-col justify-between gap-6 border border-border bg-gradient-to-br from-amber-100 to-orange-200 p-6 md:col-span-2 md:flex-row lg:col-span-6 md:items-center dark:from-amber-500/15 dark:to-orange-500/20">
            <div className="flex items-center gap-4">
              <Handshake className="size-6 shrink-0" />
              <div>
                <p className="font-mono text-xs text-muted-foreground">05</p>
                <h3 className="text-xl font-semibold tracking-tight">Leave it better</h3>
              </div>
            </div>
            <p className="max-w-lg text-sm leading-6 text-muted-foreground md:text-right">
              Every codebase, doc and relationship should be in better shape
              after you touched it than before.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
