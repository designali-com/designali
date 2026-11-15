import {
  BanIcon,
  ChevronDownIcon,
  WashingMachineIcon,
  WindIcon,
} from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"

const sizes = [
  { size: "S", chest: "92", length: "70" },
  { size: "M", chest: "100", length: "72" },
  { size: "L", chest: "108", length: "74" },
]

export default function AccordionProductDetails() {
  return (
    <div className="w-full max-w-sm space-y-3">
      <div>
        <p className="text-sm font-semibold">Heavyweight cotton tee</p>
        <p className="text-xs text-muted-foreground">
          $42.00 &middot; Washed black
        </p>
      </div>
      <Accordion multiple defaultValue={["details"]} className="border-y">
        <AccordionItem value="details">
          <AccordionTrigger className="tracking-wide uppercase">
            Details
            <ChevronDownIcon
              data-slot="accordion-trigger-icon"
              className="transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-180"
            />
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            A boxy, dropped-shoulder tee in 280 gsm organic cotton. Garment dyed
            for a soft, lived-in feel.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="size">
          <AccordionTrigger className="tracking-wide uppercase">
            Size guide
            <ChevronDownIcon
              data-slot="accordion-trigger-icon"
              className="transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-180"
            />
          </AccordionTrigger>
          <AccordionContent>
            <table className="w-full text-start">
              <thead className="text-muted-foreground">
                <tr className="border-b">
                  <th className="py-1 text-start font-normal">Size</th>
                  <th className="py-1 text-start font-normal">Chest (cm)</th>
                  <th className="py-1 text-start font-normal">Length (cm)</th>
                </tr>
              </thead>
              <tbody>
                {sizes.map((row) => (
                  <tr key={row.size} className="border-b last:border-0">
                    <td className="py-1 font-medium">{row.size}</td>
                    <td className="py-1">{row.chest}</td>
                    <td className="py-1">{row.length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="care">
          <AccordionTrigger className="tracking-wide uppercase">
            Care
            <ChevronDownIcon
              data-slot="accordion-trigger-icon"
              className="transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-180"
            />
          </AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-1.5 text-muted-foreground">
              <li className="flex items-center gap-2">
                <WashingMachineIcon className="size-3.5" />
                Machine wash cold, inside out
              </li>
              <li className="flex items-center gap-2">
                <WindIcon className="size-3.5" />
                Line dry in the shade
              </li>
              <li className="flex items-center gap-2">
                <BanIcon className="size-3.5" />
                Do not bleach
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
