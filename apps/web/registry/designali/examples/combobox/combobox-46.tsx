"use client"

import { ClockIcon, UsersIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import {
  Combobox,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
} from "@workspace/ui/components/combobox"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@workspace/ui/components/input-group"

const groups = [
  { label: "Recent", items: ["Hamid Rahimi", "Julia Novak"] },
  {
    label: "All contacts",
    items: [
      "Aiko Tanaka",
      "Bruno Silva",
      "Hamid Rahimi",
      "Julia Novak",
      "Marta Kowalski",
      "Sean O'Neill",
    ],
  },
]

export default function RecentContactsGroup() {
  return (
    <div className="w-full max-w-xs space-y-3 border p-4">
      <p className="text-sm font-semibold">Send money</p>
      <Combobox items={groups}>
        <ComboboxInput placeholder="Recipient name" className="w-full" />
        <ComboboxContent>
          <ComboboxEmpty>No contacts found.</ComboboxEmpty>
          <ComboboxList>
            {(group: (typeof groups)[number], index: number) => (
              <ComboboxGroup key={group.label} items={group.items}>
                <ComboboxLabel className="flex items-center gap-1.5">
                  {index === 0 ? (
                    <ClockIcon className="size-3" />
                  ) : (
                    <UsersIcon className="size-3" />
                  )}
                  {group.label}
                </ComboboxLabel>
                <ComboboxCollection>
                  {(name: string) => (
                    <ComboboxItem key={group.label + name} value={name}>
                      <Avatar size="sm">
                        <AvatarFallback>
                          {name
                            .split(" ")
                            .map((p) => p[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      {name}
                    </ComboboxItem>
                  )}
                </ComboboxCollection>
                {index === 0 && <ComboboxSeparator className="my-1" />}
              </ComboboxGroup>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput
          placeholder="0.00"
          inputMode="decimal"
          aria-label="Amount"
        />
      </InputGroup>
      <Button className="w-full">Continue</Button>
    </div>
  )
}
