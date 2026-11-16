"use client"

import * as React from "react"
import {
  MapPin as MapPinIcon,
  Plus as PlusIcon,
} from "@designali/icons"

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
  { id: "home", label: "Ali Imam", line: "ali@designali.com" },
  {
    id: "work",
    label: "Studio",
    line: "Designali · billing@designali.com",
  },
  { id: "parents", label: "Client", line: "client@example.com" },
]

export default function CheckoutAddressPicker() {
  const [selected, setSelected] = React.useState("home")

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">Bill to</h3>
        <span className="text-xs text-muted-foreground">Step 2 of 3</span>
      </div>
      <Command className="border">
        <CommandInput placeholder="Search billing contacts..." />
        <CommandList>
          <CommandEmpty>No billing contact matches.</CommandEmpty>
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
              <span>Add a billing contact</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
      <Button className="w-full">Continue to payment</Button>
    </div>
  )
}
