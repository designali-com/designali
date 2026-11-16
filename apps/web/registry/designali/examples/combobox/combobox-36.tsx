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
import { InputGroupAddon } from "@workspace/ui/components/input-group"

const owners = ["Ali Imam", "Sara", "Omar"]

export default function ReadOnlyCombobox() {
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="owner">Account owner</FieldLabel>
      <Combobox items={owners} defaultValue="Ali Imam" readOnly>
        <ComboboxInput
          id="owner"
          readOnly
          showTrigger={false}
          className="w-full bg-muted/50"
        >
          <InputGroupAddon align="inline-end">
            <LockIcon />
          </InputGroupAddon>
        </ComboboxInput>
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
      <FieldDescription>
        Set by your organisation&apos;s directory sync.
      </FieldDescription>
    </Field>
  )
}
