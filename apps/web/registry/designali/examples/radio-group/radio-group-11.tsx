import {
  Lock as LockIcon,
} from "@designali/icons"

import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@workspace/ui/components/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

export default function AdminLockedRadioGroup() {
  return (
    <FieldSet className="w-full max-w-sm" disabled>
      <FieldLegend variant="label" className="flex items-center gap-1.5">
        <LockIcon className="size-3.5" />
        File sharing
      </FieldLegend>
      <RadioGroup defaultValue="org" disabled>
        <Field orientation="horizontal" data-disabled>
          <RadioGroupItem value="anyone" id="share-anyone" />
          <FieldLabel htmlFor="share-anyone" className="font-normal">
            Anyone with the link
          </FieldLabel>
        </Field>
        <Field orientation="horizontal" data-disabled>
          <RadioGroupItem value="org" id="share-org" />
          <FieldLabel htmlFor="share-org" className="font-normal">
            People in Designali
          </FieldLabel>
        </Field>
        <Field orientation="horizontal" data-disabled>
          <RadioGroupItem value="none" id="share-none" />
          <FieldLabel htmlFor="share-none" className="font-normal">
            Invited people only
          </FieldLabel>
        </Field>
      </RadioGroup>
      <FieldDescription>
        This setting is managed by your workspace admin.
      </FieldDescription>
    </FieldSet>
  )
}
