import {
  Cookie as CookieIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"
import { Label } from "@workspace/ui/components/label"
import { Switch } from "@workspace/ui/components/switch"

const categories = [
  { id: "necessary", label: "Strictly necessary", locked: true },
  { id: "analytics", label: "Analytics", locked: false },
  { id: "marketing", label: "Marketing", locked: false },
]

export default function CookiePreferences() {
  return (
    <Collapsible className="w-full max-w-md space-y-3 border bg-background p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <CookieIcon className="mt-0.5 size-5 shrink-0" />
        <p className="text-sm text-muted-foreground">
          We use cookies to keep you signed in and to understand how the product
          is used.
        </p>
      </div>
      <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
        <div className="flex flex-col gap-3 border-t pt-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex items-center justify-between"
            >
              <Label htmlFor={"cookie-" + category.id}>{category.label}</Label>
              <Switch
                id={"cookie-" + category.id}
                defaultChecked={category.locked}
                disabled={category.locked}
              />
            </div>
          ))}
        </div>
      </CollapsibleContent>
      <div className="flex flex-wrap justify-end gap-2">
        <CollapsibleTrigger render={<Button variant="ghost" size="sm" />}>
          Customise
        </CollapsibleTrigger>
        <Button variant="outline" size="sm">
          Reject all
        </Button>
        <Button size="sm">Accept all</Button>
      </div>
    </Collapsible>
  )
}
