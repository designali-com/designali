import { Command, Database, Sparkles, Workflow } from "lucide-react"

export default function Features07() {
  return (
    <section className="w-full bg-muted/30 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-2xl text-3xl font-medium tracking-tight md:text-5xl">
          A workspace that keeps up with how fast you think.
        </h2>
        <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-6 md:grid-rows-2">
          <div className="flex flex-col justify-between bg-background p-8 md:col-span-4 md:row-span-2">
            <Sparkles className="size-5 text-muted-foreground" />
            <div className="my-10 space-y-2 border border-border p-4 font-mono text-xs">
              <p className="text-muted-foreground">/summarise last sprint</p>
              <p>
                14 issues closed, 3 carried over. Checkout redesign shipped
                Tuesday; conversion up 6.2% week over week.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium">Ask anything about your work</h3>
              <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
                The assistant reads your docs, tickets and metrics so answers
                come with sources, not guesses.
              </p>
            </div>
          </div>
          <div className="bg-background p-8 md:col-span-2">
            <Command className="size-5 text-muted-foreground" />
            <h3 className="mt-6 font-medium">Keyboard first</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Every action is two keystrokes away from the command bar.
            </p>
          </div>
          <div className="bg-background p-8 md:col-span-2">
            <Workflow className="size-5 text-muted-foreground" />
            <h3 className="mt-6 font-medium">Automations</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Route, label and assign work with rules anyone can write.
            </p>
          </div>
          <div className="flex flex-col gap-6 bg-background p-8 md:col-span-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <Database className="size-5 text-muted-foreground" />
              <div>
                <h3 className="font-medium">Your data, exportable anytime</h3>
                <p className="text-sm text-muted-foreground">
                  CSV, JSON and a full REST API on every plan.
                </p>
              </div>
            </div>
            <div className="flex gap-2 text-xs">
              {["CSV", "JSON", "REST", "Webhooks"].map((format) => (
                <span key={format} className="border border-border px-2.5 py-1">
                  {format}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
