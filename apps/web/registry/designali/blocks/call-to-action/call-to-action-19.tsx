import {
  ArrowRight,
} from "@designali/icons"

const links = [
  ["Start a project", "Tell us what you are building"],
  ["Book a call", "30 minutes with Ali Imam"],
  ["See our work", "Projects at designali.com/work"],
]

export default function CallToAction19() {
  return (
    <section className="w-full overflow-hidden bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Designali, design se code tak
        </p>
        <h2 className="mt-6 text-[13vw] leading-[0.9] font-medium tracking-tighter break-words md:text-[9rem]">
          Let&apos;s make
          <br />
          <span className="text-muted-foreground">something good.</span>
        </h2>
        <div className="mt-14 border-t border-border">
          {links.map(([title, sub]) => (
            <a
              key={title}
              href="#"
              className="group flex items-center justify-between gap-6 border-b border-border py-6 transition-colors hover:bg-muted/40 md:px-4"
            >
              <div className="min-w-0">
                <div className="text-xl font-medium tracking-tight md:text-3xl">
                  {title}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{sub}</div>
              </div>
              <span className="flex size-11 shrink-0 items-center justify-center border border-border transition-colors group-hover:bg-foreground group-hover:text-background">
                <ArrowRight className="size-5 transition-transform group-hover:-rotate-45" />
              </span>
            </a>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Or write directly to{" "}
          <a href="mailto:hello@designali.com" className="text-foreground underline underline-offset-4">
            hello@designali.com
          </a>
        </p>
      </div>
    </section>
  )
}
