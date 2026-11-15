import { Apple, Smartphone, Star } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const pattern = [
  "1111111001011111110",
  "1000001010001000001",
  "1011101001101011101",
  "1011101100101011101",
  "1011101011001011101",
  "1000001001101000001",
  "1111111010101111111",
  "0000000011000000000",
  "1101011100111010110",
  "0110100011010101101",
  "1011011101101100110",
  "0000000010110010101",
  "1111111001011101011",
  "1000001011100110100",
  "1011101000111011011",
  "1011101011010001100",
  "1011101001101110101",
  "1000001010011001010",
  "1111111011101010111",
]

export default function CallToAction17() {
  return (
    <section className="w-full bg-background px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 border border-border bg-gradient-to-br from-emerald-50 to-background p-8 md:grid-cols-[1fr_auto] md:p-14 dark:from-emerald-950/30">
        <div>
          <div className="flex items-center gap-1 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-current" />
            ))}
            <span className="ml-2 text-xs text-muted-foreground">
              4.8 from 21,000 ratings
            </span>
          </div>
          <h2 className="mt-5 text-3xl font-medium tracking-tight md:text-5xl">
            Your budget, in your pocket.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
            Tally syncs every account overnight and tells you, in plain words,
            what you can safely spend today.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" nativeButton={false} render={<a href="#" />}>
              <Apple data-icon="inline-start" />
              App Store
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<a href="#" />}
            >
              <Smartphone data-icon="inline-start" />
              Google Play
            </Button>
          </div>
        </div>
        <div className="hidden flex-col items-center gap-3 md:flex">
          <div className="border border-border bg-white p-3">
            <div
              className="grid size-40 gap-0"
              style={{ gridTemplateColumns: "repeat(19, minmax(0, 1fr))" }}
              aria-hidden
            >
              {pattern.flatMap((row, r) =>
                row
                  .split("")
                  .map((c, col) => (
                    <span
                      key={`${r}-${col}`}
                      className={c === "1" ? "bg-neutral-900" : "bg-white"}
                    />
                  ))
              )}
            </div>
          </div>
          <span className="text-xs text-muted-foreground">
            Scan to download
          </span>
        </div>
      </div>
    </section>
  )
}
