import {
  Check,
  ChevronLeft,
  LockKeyhole,
} from "@designali/icons"

const steps = ["Cart", "Details", "Payment", "Download"]
const current = 2

export default function Header19() {
  return (
    <section className="w-full bg-background">
      <header className="border-b">
        <div className="mx-auto grid h-16 max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-6">
          <a href="#" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            <ChevronLeft className="size-4" />
            <span className="hidden sm:inline">Back to templates</span>
          </a>
          <a href="#" className="justify-self-center text-lg font-semibold tracking-[0.2em] uppercase">
            designali
          </a>
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <LockKeyhole className="size-3.5" />
            <span className="hidden sm:inline">Secure checkout</span>
          </p>
        </div>
      </header>
      <div className="border-b bg-muted/30">
        <ol className="mx-auto flex max-w-3xl items-center px-6 py-4">
          {steps.map((step, index) => {
            const done = index < current
            const active = index === current
            return (
              <li key={step} className="flex flex-1 items-center last:flex-none">
                <span className="flex items-center gap-2">
                  <span
                    className={`flex size-6 shrink-0 items-center justify-center rounded-full text-[11px] font-medium ${
                      done
                        ? "bg-foreground text-background"
                        : active
                          ? "border-2 border-foreground"
                          : "border text-muted-foreground"
                    }`}
                  >
                    {done ? <Check className="size-3.5" /> : index + 1}
                  </span>
                  <span
                    className={`text-sm ${active ? "font-medium" : done ? "" : "text-muted-foreground"} ${
                      active ? "" : "hidden sm:inline"
                    }`}
                  >
                    {step}
                  </span>
                </span>
                {index < steps.length - 1 && (
                  <span className={`mx-3 h-px flex-1 ${done ? "bg-foreground" : "bg-border"}`} />
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
