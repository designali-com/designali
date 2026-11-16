"use client"

import {
  Lock as LockIcon,
} from "@designali/icons"

import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@workspace/ui/components/combobox"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"

const plans = ["Starter", "Team", "Business", "Enterprise"]

export default function DisabledCombobox() {
  return (
    <Field className="w-full max-w-xs" data-disabled>
      <FieldLabel>Billing plan</FieldLabel>
      <Combobox items={plans} defaultValue="Business" disabled>
        <ComboboxInput disabled className="w-full" />
        <ComboboxContent>
          <ComboboxList>
            {(item: string) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      <FieldDescription className="flex items-center gap-1">
        <LockIcon className="size-3" />
        Only workspace owners can change the plan.
      </FieldDescription>
    </Field>
  )
}
