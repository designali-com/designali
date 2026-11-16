import {
  CircleQuestionMark as CircleHelpIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

export default function FieldHelpExplainer() {
  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="tax-id">Tax ID</FieldLabel>
      <Input id="tax-id" placeholder="GB 123 4567 89" />
      <Collapsible>
        <CollapsibleTrigger
          render={
            <Button
              variant="link"
              size="xs"
              className="h-auto px-0 text-muted-foreground"
            />
          }
        >
          <CircleHelpIcon />
          Why do we need this?
        </CollapsibleTrigger>
        <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
          <FieldDescription className="mt-1 border-l-2 pl-3">
            Businesses in the EU and UK can be invoiced without VAT when a valid
            tax ID is on file. We never share it outside of your invoices.
          </FieldDescription>
        </CollapsibleContent>
      </Collapsible>
    </Field>
  )
}
