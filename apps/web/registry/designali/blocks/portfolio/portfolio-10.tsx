"use client"

import { ArrowRight, Check } from "@designali/icons"

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
    project: "Dalim Agency",
    headline: "One identity for a growing family of Dalim brands",
    body: "Dalim Agency, Fonts, Graphic and Visuals grew one by one. We built a shared identity so every brand feels part of the same studio.",
    deliverables: [
      "Logotype and monogram",
      "Brand guidelines",
      "Agency website",
    ],
    background: "url(/images/templates/dalim-agency-old.jpg) center / cover",
  },
  {
    id: "product",
    label: "Product",
    project: "Dalim UI",
    headline: "Components for designers who code",
    body: "Dalim UI paired every Figma component with production-ready React. It grew into the Designali library of 460+ blocks.",
    deliverables: [
      "Figma UI kit",
      "React and Tailwind components",
      "Design tokens",
    ],
    background: "url(/images/templates/dalim-ui-old.jpg) center / cover",
  },
  {
    id: "web",
    label: "Web",
    project: "Resort template",
    headline: "A resort site that loads fast on any connection",
    body: "Rooms, galleries and a booking flow built with Next.js and Tailwind CSS. Copy it from designali.com and make it yours.",
    deliverables: ["Marketing site", "Booking flow", "Dark mode"],
    background: "url(/images/templates/resort.jpg) center / cover",
  },
  {
    id: "motion",
    label: "Motion",
    project: "Dalim Visuals",
    headline: "CGI, 3D and motion for brands that move",
    body: "Product renders, abstract loops and launch visuals, from art direction to final frame. The same motion work powers Designali heroes.",
    deliverables: ["3D renders", "Motion loops", "Showreel"],
    background: "url(/images/templates/dalim-visuals-old.jpg) center / cover",
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
          <TabsList
            variant="line"
            className="w-full justify-start gap-6 border-b border-border"
          >
            {disciplines.map((d) => (
              <TabsTrigger
                key={d.id}
                value={d.id}
                className="flex-none px-0 text-sm"
              >
                {d.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {disciplines.map((d) => (
            <TabsContent key={d.id} value={d.id} className="text-sm">
              <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                <div className="relative aspect-[4/3] overflow-hidden border border-border">
                  <div
                    className="absolute inset-0"
                    style={{ background: d.background }}
                  />
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
                  <p className="mt-4 text-base leading-7 text-muted-foreground">
                    {d.body}
                  </p>
                  <ul className="mt-6 space-y-2 text-base">
                    {d.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <Check className="size-4 text-muted-foreground" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button
                      variant="outline"
                      nativeButton={false}
                      render={<a href="/work" />}
                    >
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
