"use client"

import { ArrowRight, Check } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

const disciplines = [
  {
    id: "brand",
    label: "Brand",
    project: "Ashgrove Distillery",
    headline: "A heritage gin brand that finally looks its age",
    body: "Ashgrove had been distilling since 1891 but looked like a startup. We dug through the archive and built an identity from their original copper still drawings.",
    deliverables: ["Logotype and monogram", "Bottle and label system", "Visitor centre signage"],
    background: "linear-gradient(135deg, oklch(0.42 0.07 160), oklch(0.75 0.08 95))",
  },
  {
    id: "product",
    label: "Product",
    project: "Shiftboard",
    headline: "Rota planning for nurses, designed on night shifts",
    body: "We spent six night shifts on two hospital wards before drawing a single screen. Swaps that took a week of messages now take two taps.",
    deliverables: ["Mobile app for iOS and Android", "Manager web dashboard", "Component library"],
    background: "linear-gradient(135deg, oklch(0.45 0.12 255), oklch(0.8 0.08 200))",
  },
  {
    id: "web",
    label: "Web",
    project: "Tidewater Festival",
    headline: "A festival site that holds up on a field with one bar of signal",
    body: "Line-ups, maps and timetables load in under a second on 3G and work offline once visited. The ticket page sold out 40,000 passes in a morning.",
    deliverables: ["Marketing site", "Offline timetable", "Ticketing integration"],
    background: "linear-gradient(135deg, oklch(0.55 0.16 20), oklch(0.85 0.1 70))",
  },
  {
    id: "motion",
    label: "Motion",
    project: "Vantage Optics",
    headline: "Launch films for a lens that shoots in the dark",
    body: "Three product films and a library of short loops for social, rendered entirely from CAD files before the first lens came off the line.",
    deliverables: ["Two-minute launch film", "28 social loops", "Retail display content"],
    background: "linear-gradient(135deg, oklch(0.3 0.05 290), oklch(0.65 0.16 320))",
  },
]

export default function Portfolio10() {
  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-2xl text-3xl font-medium tracking-tight md:text-5xl">
          One studio, four ways of working
        </h2>

        <Tabs defaultValue="brand" className="mt-10 gap-8">
          <TabsList variant="line" className="w-full justify-start gap-6 border-b border-border">
            {disciplines.map((d) => (
              <TabsTrigger key={d.id} value={d.id} className="flex-none px-0 text-sm">
                {d.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {disciplines.map((d) => (
            <TabsContent key={d.id} value={d.id} className="text-sm">
              <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                <div className="relative aspect-[4/3] overflow-hidden border border-border">
                  <div className="absolute inset-0" style={{ background: d.background }} />
                  <span className="absolute bottom-4 left-4 bg-background px-3 py-1.5 text-xs font-medium">
                    {d.project}
                  </span>
                </div>
                <div className="flex flex-col">
                  <p className="text-xs tracking-widest text-muted-foreground uppercase">
                    Featured {d.label.toLowerCase()} project
                  </p>
                  <h3 className="mt-3 text-2xl leading-tight font-medium tracking-tight md:text-3xl">
                    {d.headline}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-muted-foreground">{d.body}</p>
                  <ul className="mt-6 space-y-2 text-base">
                    {d.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <Check className="size-4 text-muted-foreground" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button variant="outline" nativeButton={false} render={<a href="#" />}>
                      See all {d.label.toLowerCase()} work
                      <ArrowRight />
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
