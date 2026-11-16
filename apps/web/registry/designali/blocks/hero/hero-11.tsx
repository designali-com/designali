import {
  ArrowRight,
  Calendar,
  Inbox,
  Sparkles,
  Users,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

export default function Hero11() {
  return (
    <section className="w-full bg-background px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-6 md:grid-rows-[auto_auto]">
        <div className="flex flex-col justify-between border border-border bg-card p-8 md:col-span-4 md:row-span-2 md:p-12">
          <div>
            <span className="inline-flex items-center gap-2 bg-muted px-2.5 py-1 text-xs">
              <Sparkles className="size-3.5" />
              Designali studio
            </span>
            <h1 className="mt-8 max-w-2xl text-4xl font-medium tracking-tight md:text-6xl">
              One studio for your brand, product and website.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">
              Designali takes your project from brand identity and UI/UX
              design to a production-ready Next.js build — design se code
              tak, handled end to end by Ali Imam.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button size="lg" nativeButton={false} render={<a href="/contact" />}>
              Start a project
              <ArrowRight />
            </Button>
            <Button size="lg" variant="outline" nativeButton={false} render={<a href="/work" />}>
              View our work
            </Button>
          </div>
        </div>

        <div className="border border-border bg-foreground p-6 text-background md:col-span-2">
          <Inbox className="size-5" />
          <p className="mt-6 text-5xl font-medium tracking-tight">460+</p>
          <p className="mt-2 text-sm opacity-70">
            production-ready blocks on designali.com
          </p>
        </div>

        <div className="border border-border p-6 md:col-span-2">
          <div className="flex items-center justify-between">
            <Users className="size-5" />
            <div className="flex -space-x-2">
              {["AI", "SR", "MK", "NJ"].map((initials, index) => (
                <span
                  key={initials}
                  className={`flex size-8 items-center justify-center rounded-full border-2 border-background text-[10px] font-medium text-white ${
                    ["bg-chart-1", "bg-chart-2", "bg-chart-3", "bg-chart-4"][index]
                  }`}
                >
                  {initials}
                </span>
              ))}
            </div>
          </div>
          <p className="mt-6 text-sm font-medium">Design and code, together</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Figma files and React code stay in sync from first draft to launch.
          </p>
        </div>

        <div className="border border-border p-6 md:col-span-3">
          <p className="text-xs text-muted-foreground">This week in the studio</p>
          <ul className="mt-4 space-y-3 text-sm">
            {[
              ["Dalim brand identity refresh", "Branding", "bg-amber-500"],
              ["Portfolio template, Next.js build", "Development", "bg-sky-500"],
              ["Dashboard UI kit for designali.com", "UI/UX", "bg-emerald-500"],
            ].map(([subject, tag, dot]) => (
              <li key={subject} className="flex items-center gap-3">
                <span className={`size-2 shrink-0 rounded-full ${dot}`} />
                <span className="min-w-0 flex-1 truncate">{subject}</span>
                <span className="shrink-0 text-xs text-muted-foreground">{tag}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4 border border-border bg-muted/50 p-6 md:col-span-3">
          <Calendar className="size-5 shrink-0" />
          <p className="text-sm">
            <span className="font-medium">Remote, worldwide.</span>{" "}
            <span className="text-muted-foreground">
              Working with clients across timezones — reach us at hello@designali.com.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
