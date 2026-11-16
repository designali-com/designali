"use client"

import * as React from "react"
import {
  KeyRound as KeyRoundIcon,
} from "@designali/icons"

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@workspace/ui/components/combobox"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"

const groups = [
  { label: "Invoices", items: ["invoices:read", "invoices:write"] },
  {
    label: "Customers",
    items: ["customers:read", "customers:write", "customers:delete"],
  },
  { label: "Webhooks", items: ["webhooks:read", "webhooks:manage"] },
]

export default function GroupedScopesMulti() {
  const anchor = useComboboxAnchor()
  return (
    <Field className="w-full max-w-sm">
      <FieldLabel>Token scopes</FieldLabel>
      <Combobox
        multiple
        items={groups}
        defaultValue={["invoices:read", "customers:read"]}
      >
        <ComboboxChips ref={anchor}>
          <ComboboxValue>
            {(values: string[]) => (
              <React.Fragment>
                {values.map((scope) => (
                  <ComboboxChip key={scope} className="font-sans">
                    {scope}
                  </ComboboxChip>
                ))}
                <ComboboxChipsInput placeholder="Add scope" />
              </React.Fragment>
            )}
          </ComboboxValue>
        </ComboboxChips>
        <ComboboxContent anchor={anchor}>
          <ComboboxEmpty>No scopes found.</ComboboxEmpty>
          <ComboboxList>
            {(group: (typeof groups)[number]) => (
              <ComboboxGroup key={group.label} items={group.items}>
                <ComboboxLabel>{group.label}</ComboboxLabel>
                <ComboboxCollection>
                  {(scope: string) => (
                    <ComboboxItem
                      key={scope}
                      value={scope}
                      className="font-sans"
                    >
                      <KeyRoundIcon className="text-muted-foreground" />
                      {scope}
                    </ComboboxItem>
                  )}
                </ComboboxCollection>
              </ComboboxGroup>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      <FieldDescription>
        Grant only what this integration needs.
      </FieldDescription>
    </Field>
  )
}
