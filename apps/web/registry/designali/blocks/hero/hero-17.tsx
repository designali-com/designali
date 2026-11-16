import {
  Bell,
  Moon,
  Smartphone,
  Star,
  TabletSmartphone,
} from "@designali/icons"

export default function Hero17() {
  return (
    <section className="w-full overflow-hidden bg-background px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <div className="flex items-center gap-3 text-sm">
            <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white">
              <Moon className="size-5" />
            </span>
            <span className="font-medium">Designali</span>
            <span className="text-muted-foreground">Mobile UI designs</span>
          </div>
          <h1 className="mt-8 text-4xl font-medium tracking-tight md:text-6xl">
            Mobile app designs, ready to ship.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground">
            Designali mobile UI kits for iPhone, iPad and Android — designed
            in Figma, built in code, and ready for your next app.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#"
              className="flex items-center gap-3 bg-foreground px-5 py-2.5 text-background transition-opacity hover:opacity-90"
            >
              <Smartphone className="size-6" />
              <span className="text-start leading-tight">
                <span className="block text-[10px] opacity-70">UI kit for</span>
                <span className="block text-sm font-medium">iPhone and iPad</span>
              </span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 border border-border px-5 py-2.5 transition-colors hover:bg-muted"
            >
              <TabletSmartphone className="size-6" />
              <span className="text-start leading-tight">
                <span className="block text-[10px] text-muted-foreground">UI kit for</span>
                <span className="block text-sm font-medium">Android</span>
              </span>
            </a>
          </div>
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6">
            <div>
              <dt className="text-xs text-muted-foreground">Rating</dt>
              <dd className="mt-1 flex items-center gap-1 text-lg font-medium">
                4.8 <Star className="size-4 fill-amber-400 text-amber-400" />
              </dd>
            </div>
            <div>
              <dt className="text-xs text-muted-foreground">UI designs</dt>
              <dd className="mt-1 text-lg font-medium">2300+</dd>
            </div>
            <div>
              <dt className="text-xs text-muted-foreground">Icons</dt>
              <dd className="mt-1 text-lg font-medium">4000+</dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-[300px]">
          <div
            aria-hidden
            className="absolute -inset-16 rounded-full bg-gradient-to-br from-indigo-500/30 to-violet-500/10 blur-3xl"
          />
          <div className="relative rounded-[2.5rem] border-[10px] border-foreground bg-gradient-to-b from-indigo-950 to-slate-950 p-5 text-white shadow-2xl">
            <div className="mx-auto h-5 w-24 rounded-full bg-foreground" />
            <p className="mt-8 text-xs text-white/60">Today</p>
            <p className="text-3xl font-medium">9:30 am</p>
            <p className="text-xs text-white/60">Design review in 35 min</p>
            <div className="mt-6 rounded-2xl bg-white/10 p-4">
              <p className="text-xs text-white/60">Now designing</p>
              <p className="mt-1 text-sm font-medium">Dalim UI landing page</p>
              <div className="mt-3 flex h-10 items-end gap-1">
                {[30, 60, 45, 80, 55, 90, 40, 70, 50, 65, 35, 75].map((height, index) => (
                  <span
                    key={index}
                    className="flex-1 rounded-full bg-white/60"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white/10 p-3">
                <p className="text-[10px] text-white/60">This week</p>
                <p className="text-lg font-medium">12 blocks</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-3">
                <p className="text-[10px] text-white/60">Shipped</p>
                <p className="text-lg font-medium">4 pages</p>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-3 rounded-2xl bg-white/10 p-3 text-xs">
              <Bell className="size-4" />
              Client handoff 4:00 to 4:30
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
