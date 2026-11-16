import {
  Code as CodeIcon,
  ChevronDown as ChevronDownIcon,
  Figma as FigmaIcon,
  Rocket as RocketIcon,
} from "@designali/icons"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"

const sizes = [
  { size: "Personal", chest: "1", length: "42" },
  { size: "Studio", chest: "5", length: "99" },
  { size: "Unlimited", chest: "∞", length: "199" },
]

export default function AccordionProductDetails() {
  return (
    <div className="w-full max-w-sm space-y-3">
      <div>
        <p className="text-sm font-semibold">Design Agency template</p>
        <p className="text-xs text-muted-foreground">
          $42.00 &middot; Next.js + Tailwind CSS
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
            A production-ready studio website by Designali. Built with Next.js,
            TypeScript and Tailwind CSS, with a matching Figma file.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="size">
          <AccordionTrigger className="tracking-wide uppercase">
            License guide
            <ChevronDownIcon
              data-slot="accordion-trigger-icon"
              className="transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-180"
            />
          </AccordionTrigger>
          <AccordionContent>
            <table className="w-full text-start">
              <thead className="text-muted-foreground">
                <tr className="border-b">
                  <th className="py-1 text-start font-normal">License</th>
                  <th className="py-1 text-start font-normal">Projects</th>
                  <th className="py-1 text-start font-normal">Price ($)</th>
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
            Workflow
            <ChevronDownIcon
              data-slot="accordion-trigger-icon"
              className="transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-180"
            />
          </AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-1.5 text-muted-foreground">
              <li className="flex items-center gap-2">
                <FigmaIcon className="size-3.5" />
                Customise the design in Figma
              </li>
              <li className="flex items-center gap-2">
                <CodeIcon className="size-3.5" />
                Edit the Next.js code
              </li>
              <li className="flex items-center gap-2">
                <RocketIcon className="size-3.5" />
                Deploy to Vercel
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
