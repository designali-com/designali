import { CheckIcon, ChevronDownIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"

const features = [
  "Unlimited projects",
  "Up to 25 collaborators",
  "Version history for 90 days",
  "Priority email support",
  "Custom domains",
]

export default function PlanFeaturesDefaultOpen() {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <CardDescription>Team</CardDescription>
        <CardTitle className="text-3xl">
          $24
          <span className="text-sm font-normal text-muted-foreground">
            {" "}
            / seat / mo
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Collapsible defaultOpen>
          <CollapsibleTrigger
            render={
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-between px-0"
              >
                What&apos;s included
                <ChevronDownIcon className="transition-transform group-data-panel-open/button:rotate-180" />
              </Button>
            }
          />
          <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
            <ul className="flex flex-col gap-2 pt-2 text-sm">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <CheckIcon className="size-4 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Start free trial</Button>
      </CardFooter>
    </Card>
  )
}
