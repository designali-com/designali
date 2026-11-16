import {
  ChevronDown as ChevronDownIcon,
} from "@designali/icons"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"

export default function AccordionPropertiesInspector() {
  return (
    <div className="w-full max-w-60 border bg-background">
      <div className="border-b px-2 py-1.5 text-[11px] font-medium">
        Designali hero card
      </div>
      <Accordion multiple defaultValue={["layout", "fill"]}>
        <AccordionItem value="layout">
          <AccordionTrigger className="px-2 py-1.5 text-[11px] tracking-wide text-muted-foreground uppercase hover:no-underline">
            Layout
            <ChevronDownIcon
              data-slot="accordion-trigger-icon"
              className="size-3! transition-transform group-aria-expanded/accordion-trigger:rotate-180"
            />
          </AccordionTrigger>
          <AccordionContent className="grid grid-cols-2 gap-1.5 px-2">
            {["X", "Y", "W", "H"].map((axis, i) => (
              <label key={axis} className="flex items-center border">
                <span className="w-5 text-center text-[10px] text-muted-foreground">
                  {axis}
                </span>
                <input
                  defaultValue={[120, 48, 320, 180][i]}
                  className="h-6 w-full min-w-0 bg-transparent text-[11px] outline-none"
                />
              </label>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="fill">
          <AccordionTrigger className="px-2 py-1.5 text-[11px] tracking-wide text-muted-foreground uppercase hover:no-underline">
            Fill
            <ChevronDownIcon
              data-slot="accordion-trigger-icon"
              className="size-3! transition-transform group-aria-expanded/accordion-trigger:rotate-180"
            />
          </AccordionTrigger>
          <AccordionContent className="flex items-center gap-1.5 px-2">
            <span className="size-5 border bg-linear-to-br from-primary to-primary" />
            <span className="flex-1 font-sans text-[11px]">Gradient</span>
            <span className="text-[11px] text-muted-foreground">100%</span>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="effects">
          <AccordionTrigger className="px-2 py-1.5 text-[11px] tracking-wide text-muted-foreground uppercase hover:no-underline">
            Effects
            <ChevronDownIcon
              data-slot="accordion-trigger-icon"
              className="size-3! transition-transform group-aria-expanded/accordion-trigger:rotate-180"
            />
          </AccordionTrigger>
          <AccordionContent className="px-2 text-[11px] text-muted-foreground">
            Drop shadow &middot; 0 4 12 / 16%
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
