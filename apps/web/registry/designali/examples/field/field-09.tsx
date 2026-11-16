import * as React from "react"

import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@workspace/ui/components/field"

const groups = [
  {
    legend: "Email",
    items: ["New Designali blocks", "Blog posts from Ali", "Billing receipts"],
  },
  { legend: "Push", items: ["Template updates", "Icon releases", "Studio messages"] },
]

export default function NotificationChannelsFieldSet() {
  return (
    <FieldGroup className="w-full max-w-sm">
      {groups.map((group, gi) => (
        <React.Fragment key={group.legend}>
          {gi > 0 && <FieldSeparator />}
          <FieldSet>
            <FieldLegend variant="label">
              {group.legend} notifications
            </FieldLegend>
            <FieldGroup data-slot="checkbox-group">
              {group.items.map((item, ii) => {
                const id = group.legend.toLowerCase() + "-" + ii
                return (
                  <Field key={item} orientation="horizontal">
                    <Checkbox id={id} defaultChecked={ii !== 2} />
                    <FieldLabel htmlFor={id} className="font-normal">
                      {item}
                    </FieldLabel>
                  </Field>
                )
              })}
            </FieldGroup>
          </FieldSet>
        </React.Fragment>
      ))}
    </FieldGroup>
  )
}
