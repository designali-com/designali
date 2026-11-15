"use client"

import { AppleIcon } from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command"

const fruits = [
  "Apple",
  "Apricot",
  "Avocado",
  "Banana",
  "Blackberry",
  "Cherry",
  "Grape",
  "Pineapple",
]

export default function PrefixMatchFilter() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <p className="text-xs text-muted-foreground">
        Typing “ap” matches Apple and Apricot, but not Grape or Pineapple.
      </p>
      <Command
        className="border"
        filter={(value, search) =>
          value.toLowerCase().startsWith(search.toLowerCase()) ? 1 : 0
        }
      >
        <CommandInput placeholder="Search produce..." />
        <CommandList>
          <CommandEmpty>Nothing starts with that.</CommandEmpty>
          <CommandGroup heading="Produce">
            {fruits.map((fruit) => (
              <CommandItem key={fruit} value={fruit}>
                <AppleIcon />
                <span>{fruit}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  )
}
