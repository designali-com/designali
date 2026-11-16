import {
  Command,
  Database,
  Sparkles,
  Workflow,
} from "@designali/icons"

export default function Features07() {
  return (
    <section className="w-full bg-muted/30 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-2xl text-3xl font-medium tracking-tight md:text-5xl">
          A design-to-code studio that keeps up with how fast you think.
        </h2>
        <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-6 md:grid-rows-2">
          <div className="flex flex-col justify-between bg-background p-8 md:col-span-4 md:row-span-2">
            <Sparkles className="size-5 text-muted-foreground" />
            <div className="my-10 space-y-2 border border-border p-4 font-mono text-xs">
              <p className="text-muted-foreground">/generate hero block</p>
              <p>
                Hero section created with Next.js, Tailwind CSS and
                @designali/icons. Ready to copy into your project.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium">AI-assisted design workflows</h3>
              <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
                Designali blends AI workflows with hand-crafted design, so
                you ship polished interfaces faster.
              </p>
            </div>
          </div>
          <div className="bg-background p-8 md:col-span-2">
            <Command className="size-5 text-muted-foreground" />
            <h3 className="mt-6 font-medium">Copy and paste</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Every block is one copy away from your codebase.
            </p>
          </div>
          <div className="bg-background p-8 md:col-span-2">
            <Workflow className="size-5 text-muted-foreground" />
            <h3 className="mt-6 font-medium">Design systems</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Tokens and components that keep Figma and code in sync.
            </p>
          </div>
          <div className="flex flex-col gap-6 bg-background p-8 md:col-span-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <Database className="size-5 text-muted-foreground" />
              <div>
                <h3 className="font-medium">Built on a modern stack</h3>
                <p className="text-sm text-muted-foreground">
                  Every Designali block ships with the same tools.
                </p>
              </div>
            </div>
            <div className="flex gap-2 text-xs">
              {["Next.js", "React", "TypeScript", "Tailwind"].map((format) => (
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
