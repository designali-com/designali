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
    label: "Fintech",
    stat: "240+ financial teams",
    names: ["Nimbus Bank", "Ledgerly", "Coinpath", "Truecap", "Fairway Pay", "Minted"],
  },
  {
    id: "health",
    label: "Healthcare",
    stat: "90+ care providers",
    names: ["Oakmont Health", "Helix Bio", "Carewell", "Pulsewise", "Medara", "Lumen Clinics"],
  },
  {
    id: "commerce",
    label: "Commerce",
    stat: "410+ storefronts",
    names: ["Mosswood", "Threadline", "Bask & Co", "Parcelo", "Goodform", "Rally Goods"],
  },
  {
    id: "devtools",
    label: "Developer tools",
    stat: "180+ dev platforms",
    names: ["Ferro", "Stackway", "Deployr", "Quarry", "Bytewise", "Tessel"],
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
                Built for your industry
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                See who already ships with us in your space.
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
                rely on our blocks for regulated, high-traffic surfaces.
              </p>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
