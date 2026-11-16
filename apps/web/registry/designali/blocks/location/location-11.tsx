import {
  ChevronDown,
  MapPin,
} from "@designali/icons"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"

const regions = [
  {
    name: "Americas",
    shape: "M10 30 C 20 10, 45 8, 50 22 C 55 34, 40 40, 38 52 C 36 70, 28 90, 22 92 C 18 80, 26 60, 18 48 C 10 42, 6 38, 10 30 Z",
    offices: [
      { city: "Brand identity", address: "Remote · async with the Americas", type: "Service" },
      { city: "Web development", address: "Next.js and Tailwind CSS builds", type: "Service" },
      { city: "Templates", address: "Available on designali.com", type: "Online" },
    ],
  },
  {
    name: "Europe & Africa",
    shape: "M30 12 C 45 6, 66 10, 70 22 C 72 32, 58 34, 62 46 C 68 62, 60 84, 48 90 C 40 78, 44 62, 34 52 C 26 44, 20 24, 30 12 Z",
    offices: [
      { city: "UI/UX design", address: "Remote · live calls across Europe", type: "Service" },
      { city: "Design systems", address: "Tokens, components and docs", type: "Service" },
      { city: "CGI and 3D", address: "Renders and motion for brands", type: "Service" },
      { city: "Blocks", address: "460+ blocks on designali.com", type: "Online" },
    ],
  },
  {
    name: "Asia Pacific",
    shape: "M14 20 C 40 6, 86 10, 90 30 C 92 44, 70 46, 62 56 C 56 64, 44 58, 36 50 C 26 42, 6 34, 14 20 Z M66 72 C 76 66, 90 70, 88 80 C 84 90, 66 88, 66 72 Z",
    offices: [
      { city: "Digital products", address: "Remote · design and code end to end", type: "Service" },
      { city: "AI workflows", address: "AI-assisted design and development", type: "Service" },
      { city: "Icons", address: "4000+ in @designali/icons", type: "Online" },
    ],
  },
]

export default function Location11() {
  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Services by region
          </h2>
          <p className="text-sm text-muted-foreground">
            10 services &middot; Designali, remote worldwide
          </p>
        </div>

        <Accordion className="mt-10 border-t" defaultValue={["Europe & Africa"]}>
          {regions.map((region) => (
            <AccordionItem key={region.name} value={region.name} className="border-b">
              <AccordionTrigger className="items-center gap-4 py-6 hover:no-underline">
                <svg viewBox="0 0 100 100" className="size-12 shrink-0 fill-muted-foreground/30" aria-hidden>
                  <path d={region.shape} />
                </svg>
                <span className="flex-1 text-xl font-medium tracking-tight md:text-2xl">
                  {region.name}
                </span>
                <span className="text-sm font-normal text-muted-foreground">
                  {region.offices.length}
                </span>
                <ChevronDown className="size-5 shrink-0 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-180" />
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <ul className="grid gap-px border bg-border sm:grid-cols-2">
                  {region.offices.map((office) => (
                    <li key={office.city} className="flex gap-3 bg-background p-5 sm:last:odd:col-span-2">
                      <MapPin className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                      <div className="flex-1 text-sm">
                        <p className="flex items-center gap-2 font-medium">
                          {office.city}
                          {office.type === "HQ" && (
                            <span className="bg-primary px-1.5 py-0.5 text-[10px] text-primary-foreground">
                              HQ
                            </span>
                          )}
                        </p>
                        <p className="text-muted-foreground">{office.address}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">{office.type !== "HQ" && office.type}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
