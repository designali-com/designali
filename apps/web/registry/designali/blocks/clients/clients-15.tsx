import { Button } from "@workspace/ui/components/button"

import { Marquee } from "@/registry/designali/ui/marquee"

const columns = [
  ["Designali", "Dalim", "Dalim Agency", "Dalim Fonts", "Dalim Graphic"],
  ["Dalim Icons", "Dalim Tools", "Dalim UI", "Dalim Works", "Dalim Visuals"],
  ["Designali Icons", "Designali Logos", "Designali Vectors", "Designali Blocks", "Designali Templates"],
]

function Column({ names, duration }: { names: string[]; duration: number }) {
  return (
    <Marquee vertical speed={duration} gap="1rem" repeat={3} className="h-full p-0">
      {names.map((name) => (
        <div
          key={name}
          className="flex h-20 items-center justify-center border border-border bg-background px-3 text-sm font-semibold tracking-tight text-muted-foreground sm:text-base"
        >
          {name}
        </div>
      ))}
    </Marquee>
  )
}

export default function Clients15() {
  return (
    <section className="w-full border-y border-border bg-muted/30">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-0">
        <div className="lg:py-24">
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Customers
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Designed by a studio that sweats the details.
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-muted-foreground">
            Every Designali and Dalim brand, website and library is designed
            and coded by Ali Imam, design se code tak.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button nativeButton={false} render={<a href="#" />}>
              Start building
            </Button>
            <Button
              variant="outline"
              nativeButton={false}
              render={<a href="#" />}
            >
              Talk to Ali
            </Button>
          </div>
        </div>
        <div className="grid h-[420px] grid-cols-3 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] lg:h-[560px]">
          <Column names={columns[0]!} duration={22} />
          <Column names={columns[1]!} duration={30} />
          <Column names={columns[2]!} duration={26} />
        </div>
      </div>
    </section>
  )
}
