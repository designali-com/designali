import {
  ChevronDown as ChevronDownIcon,
} from "@designali/icons"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent } from "@workspace/ui/components/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"

export function CollapsibleBasic() {
  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardContent>
        <Collapsible className="rounded-md data-open:bg-muted">
          <CollapsibleTrigger
            render={
              <Button variant="ghost" className="w-full">
                Template details
                <ChevronDownIcon className="ml-auto group-data-panel-open/button:rotate-180" />
              </Button>
            }
          />
          <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
            <div>
              Built with Next.js, React, TypeScript and Tailwind CSS. Ships with
              Designali blocks and icons.
            </div>
            <Button size="xs">View template</Button>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  )
}