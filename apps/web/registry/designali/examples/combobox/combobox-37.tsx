"use client"

import * as React from "react"
import {
  UserPlus as UserPlusIcon,
  UserSearch as UserSearchIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@workspace/ui/components/combobox"

const teammates = ["Ali Imam", "Bilal", "Chloe", "Diego"]

export default function EmptyStateInvite() {
  const [query, setQuery] = React.useState("")
  return (
    <div className="w-full max-w-xs">
      <Combobox
        items={teammates}
        inputValue={query}
        onInputValueChange={setQuery}
      >
        <ComboboxInput
          placeholder="Add a reviewer (try 'zoe')"
          className="w-full"
        />
        <ComboboxContent>
          <ComboboxEmpty className="flex-col items-center gap-2 py-4">
            <UserSearchIcon className="size-5" />
            <span>Nobody named &quot;{query}&quot; in this workspace.</span>
            <Button size="xs" variant="outline">
              <UserPlusIcon />
              Invite by email
            </Button>
          </ComboboxEmpty>
          <ComboboxList>
            {(item: string) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}
