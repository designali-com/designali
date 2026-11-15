import {
  CarrotIcon,
  ChevronDownIcon,
  ClockIcon,
  CookingPotIcon,
  UsersIcon,
} from "lucide-react"

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
  "2 cups arborio rice",
  "1 litre vegetable stock",
  "200 g chestnut mushrooms",
  "1 shallot, diced",
  "40 g parmesan",
]
const steps = [
  "Soften the shallot in butter over a low heat.",
  "Toast the rice for two minutes, then add stock a ladle at a time.",
  "Fold in the seared mushrooms and parmesan, rest for two minutes.",
]

export default function RecipeSections() {
  return (
    <Card className="w-full max-w-sm gap-3">
      <CardHeader>
        <CardTitle>Mushroom risotto</CardTitle>
        <CardDescription className="flex gap-3">
          <span className="flex items-center gap-1">
            <ClockIcon className="size-3.5" /> 35 min
          </span>
          <span className="flex items-center gap-1">
            <UsersIcon className="size-3.5" /> Serves 4
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
            Ingredients
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
            Method
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
