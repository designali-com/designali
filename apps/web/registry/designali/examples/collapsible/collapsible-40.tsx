import {
  Carrot as CarrotIcon,
  ChevronDown as ChevronDownIcon,
  Clock as ClockIcon,
  CookingPot as CookingPotIcon,
  Users as UsersIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"

const ingredients = [
  "Logo mark and wordmark",
  "Colour palette and type scale",
  "Icon set from @designali/icons",
  "Figma brand guidelines",
  "Next.js landing page",
]
const steps = [
  "Discovery call with Ali Imam to define the brand.",
  "Explore logo directions, then refine one in Figma.",
  "Hand off the design system and ship the site to Vercel.",
]

export default function RecipeSections() {
  return (
    <Card className="w-full max-w-sm gap-3">
      <CardHeader>
        <CardTitle>Brand identity sprint</CardTitle>
        <CardDescription className="flex gap-3">
          <span className="flex items-center gap-1">
            <ClockIcon className="size-3.5" /> 2 weeks
          </span>
          <span className="flex items-center gap-1">
            <UsersIcon className="size-3.5" /> Team of 2
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Collapsible defaultOpen>
          <CollapsibleTrigger
            render={
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start"
              />
            }
          >
            <CarrotIcon />
            Deliverables
            <ChevronDownIcon className="ml-auto transition-transform group-data-panel-open/button:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
            <ul className="list-disc space-y-1 py-2 pl-8 text-sm">
              {ingredients.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible>
          <CollapsibleTrigger
            render={
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start"
              />
            }
          >
            <CookingPotIcon />
            Process
            <ChevronDownIcon className="ml-auto transition-transform group-data-panel-open/button:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
            <ol className="list-decimal space-y-1 py-2 pl-8 text-sm">
              {steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  )
}
