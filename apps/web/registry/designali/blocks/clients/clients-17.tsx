"use client"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

const industries = [
  {
    id: "fintech",
    label: "Templates",
    stat: "240+ landing pages",
    names: ["Portfolio Simple", "Design Agency", "Resort", "AI", "Vercel", "Ali Imam Portfolio"],
  },
  {
    id: "health",
    label: "Blocks",
    stat: "460+ blocks",
    names: ["Hero", "Pricing", "FAQs", "Contact", "Analytics", "Authentication"],
  },
  {
    id: "commerce",
    label: "Components",
    stat: "Bento to Marquee",
    names: ["Bento", "Number Counter", "Gauge", "Dot Pattern", "Marquee", "Typewriter"],
  },
  {
    id: "devtools",
    label: "Libraries",
    stat: "4,000+ icons",
    names: ["@designali/icons", "@designali/logos", "@designali/vectors", "Dalim UI", "Dalim Icons", "Dalim Fonts"],
  },
]

export default function Clients17() {
  return (
    <section className="w-full bg-background py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Tabs defaultValue="fintech" className="gap-0">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Built for every part of your site
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                See what ships from the Designali studio.
              </p>
            </div>
            <div className="-mx-6 overflow-x-auto px-6 md:mx-0 md:px-0">
              <TabsList variant="line" className="h-10">
                {industries.map((industry) => (
                  <TabsTrigger
                    key={industry.id}
                    value={industry.id}
                    className="px-3 text-sm"
                  >
                    {industry.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </div>
          {industries.map((industry) => (
            <TabsContent key={industry.id} value={industry.id} className="mt-10">
              <div className="grid grid-cols-2 border-t border-l border-border sm:grid-cols-3 lg:grid-cols-6">
                {industry.names.map((name) => (
                  <div
                    key={name}
                    className="flex h-24 items-center justify-center border-r border-b border-border px-3 text-center text-base font-semibold tracking-tight text-muted-foreground"
                  >
                    {name}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">
                  {industry.stat}
                </span>{" "}
                ship from the same Designali design system.
              </p>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
