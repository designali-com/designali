"use client"

import * as React from "react"
import { MapPinIcon, PlusIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@workspace/ui/components/command"

const addresses = [
  { id: "home", label: "Home", line: "48 Willow Lane, Portland, OR 97205" },
  {
    id: "work",
    label: "Studio",
    line: "210 Market St, Suite 4, Portland, OR 97204",
  },
  { id: "parents", label: "Mom & Dad", line: "9 Orchard Rd, Boise, ID 83702" },
]

export default function CheckoutAddressPicker() {
  const [selected, setSelected] = React.useState("home")

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">Ship to</h3>
        <span className="text-xs text-muted-foreground">Step 2 of 3</span>
      </div>
      <Command className="border">
        <CommandInput placeholder="Search saved addresses..." />
        <CommandList>
          <CommandEmpty>No saved address matches.</CommandEmpty>
          <CommandGroup>
            {addresses.map((address) => (
              <CommandItem
                key={address.id}
                value={address.label + " " + address.line}
                data-checked={selected === address.id}
                onSelect={() => setSelected(address.id)}
              >
                <MapPinIcon />
                <div className="flex min-w-0 flex-col">
                  <span className="font-medium">{address.label}</span>
                  <span className="truncate text-[11px] text-muted-foreground">
                    {address.line}
                  </span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup>
            <CommandItem value="add-address">
              <PlusIcon />
              <span>Add a new address</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
      <Button className="w-full">Continue to payment</Button>
    </div>
  )
}
