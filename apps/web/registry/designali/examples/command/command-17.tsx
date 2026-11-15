"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover"

const countries = [
  { code: "US", name: "United States", dial: "+1" },
  { code: "GB", name: "United Kingdom", dial: "+44" },
  { code: "DE", name: "Germany", dial: "+49" },
  { code: "IN", name: "India", dial: "+91" },
  { code: "BR", name: "Brazil", dial: "+55" },
  { code: "JP", name: "Japan", dial: "+81" },
  { code: "KE", name: "Kenya", dial: "+254" },
]

export default function CountryPhoneCodeSelect() {
  const [open, setOpen] = React.useState(false)
  const [country, setCountry] = React.useState(countries[0]!)

  return (
    <div className="flex w-full max-w-xs flex-col gap-1.5">
      <Label htmlFor="phone-number">Phone number</Label>
      <div className="flex">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger
            render={
              <Button variant="outline" className="shrink-0 border-e-0" />
            }
          >
            <span className="text-[10px] font-semibold">{country.code}</span>
            {country.dial}
            <ChevronDownIcon className="opacity-50" />
          </PopoverTrigger>
          <PopoverContent className="w-64 p-0" align="start">
            <Command>
              <CommandInput placeholder="Search country..." />
              <CommandList>
                <CommandEmpty>No country found.</CommandEmpty>
                <CommandGroup>
                  {countries.map((item) => (
                    <CommandItem
                      key={item.code}
                      value={item.name + " " + item.dial}
                      data-checked={item.code === country.code}
                      onSelect={() => {
                        setCountry(item)
                        setOpen(false)
                      }}
                    >
                      <span className="flex h-4 w-6 items-center justify-center bg-muted text-[9px] font-semibold">
                        {item.code}
                      </span>
                      <span>{item.name}</span>
                      <span className="text-muted-foreground">{item.dial}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        <Input id="phone-number" type="tel" placeholder="555 012 3456" />
      </div>
    </div>
  )
}
