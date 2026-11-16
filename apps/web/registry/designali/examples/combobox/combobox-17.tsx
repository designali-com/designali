"use client"

import * as React from "react"

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@workspace/ui/components/combobox"

type Contact = { name: string; email: string }

const contacts: Contact[] = [
  { name: "Ali Imam", email: "ali@designali.com" },
  { name: "Designali Support", email: "support@designali.com" },
  { name: "Designali Billing", email: "billing@designali.com" },
  { name: "Client Team", email: "client@example.com" },
]

const initialsOf = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")

export default function EmailRecipientsField() {
  const anchor = useComboboxAnchor()
  return (
    <div className="w-full max-w-md border">
      <div className="flex items-center gap-2 border-b px-3 py-2">
        <span className="text-xs text-muted-foreground">To</span>
        <Combobox
          multiple
          items={contacts}
          defaultValue={[contacts[0]!]}
          itemToStringLabel={(contact: Contact) => contact.name}
          isItemEqualToValue={(a, b) => a.email === b.email}
        >
          <ComboboxChips
            ref={anchor}
            className="flex-1 border-0 px-0 focus-within:ring-0 dark:bg-transparent"
          >
            <ComboboxValue>
              {(values: Contact[]) => (
                <React.Fragment>
                  {values.map((contact) => (
                    <ComboboxChip key={contact.email}>
                      <span className="flex size-4 items-center justify-center rounded-full bg-foreground text-[8px] text-background">
                        {initialsOf(contact.name)}
                      </span>
                      {contact.name}
                    </ComboboxChip>
                  ))}
                  <ComboboxChipsInput />
                </React.Fragment>
              )}
            </ComboboxValue>
          </ComboboxChips>
          <ComboboxContent anchor={anchor}>
            <ComboboxEmpty>No contacts found.</ComboboxEmpty>
            <ComboboxList>
              {(contact: Contact) => (
                <ComboboxItem key={contact.email} value={contact}>
                  <div className="flex flex-col">
                    <span>{contact.name}</span>
                    <span className="text-[11px] text-muted-foreground">
                      {contact.email}
                    </span>
                  </div>
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
      <div className="px-3 py-2 text-sm text-muted-foreground">
        Subject: Q4 planning notes
      </div>
    </div>
  )
}
