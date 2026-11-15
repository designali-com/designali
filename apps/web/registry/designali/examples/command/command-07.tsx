"use client"

import * as React from "react"
import { GlobeIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@workspace/ui/components/command"
import { Label } from "@workspace/ui/components/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover"

const regions = [
  {
    region: "Americas",
    zones: [
      { id: "America/Los_Angeles", label: "Pacific Time", offset: "UTC-08:00" },
      { id: "America/Chicago", label: "Central Time", offset: "UTC-06:00" },
      { id: "America/New_York", label: "Eastern Time", offset: "UTC-05:00" },
      { id: "America/Sao_Paulo", label: "Brasilia Time", offset: "UTC-03:00" },
    ],
  },
  {
    region: "Europe & Africa",
    zones: [
      {
        id: "Europe/London",
        label: "Greenwich Mean Time",
        offset: "UTC+00:00",
      },
      {
        id: "Europe/Berlin",
        label: "Central European Time",
        offset: "UTC+01:00",
      },
      { id: "Africa/Nairobi", label: "East Africa Time", offset: "UTC+03:00" },
    ],
  },
  {
    region: "Asia Pacific",
    zones: [
      { id: "Asia/Kolkata", label: "India Standard Time", offset: "UTC+05:30" },
      { id: "Asia/Tokyo", label: "Japan Standard Time", offset: "UTC+09:00" },
      {
        id: "Australia/Sydney",
        label: "Australian Eastern Time",
        offset: "UTC+10:00",
      },
    ],
  },
]

export default function TimezoneCombobox() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("Europe/Berlin")
  const selected = regions
    .flatMap((r) => r.zones)
    .find((zone) => zone.id === value)

  return (
    <div className="flex w-full max-w-xs flex-col gap-1.5">
      <Label>Timezone</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          render={
            <Button variant="outline" className="w-full justify-between" />
          }
        >
          <span className="flex items-center gap-2 truncate">
            <GlobeIcon />
            {selected ? selected.label : "Select timezone"}
          </span>
          <span className="text-xs text-muted-foreground">
            {selected?.offset}
          </span>
        </PopoverTrigger>
        <PopoverContent className="w-(--anchor-width) p-0" align="start">
          <Command>
            <CommandInput placeholder="Search city or zone..." />
            <CommandList>
              <CommandEmpty>No timezone found.</CommandEmpty>
              {regions.map((region) => (
                <CommandGroup key={region.region} heading={region.region}>
                  {region.zones.map((zone) => (
                    <CommandItem
                      key={zone.id}
                      value={zone.id + " " + zone.label}
                      onSelect={() => {
                        setValue(zone.id)
                        setOpen(false)
                      }}
                    >
                      <span className="truncate">{zone.label}</span>
                      <CommandShortcut className="tracking-normal">
                        {zone.offset}
                      </CommandShortcut>
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <p className="text-xs text-muted-foreground">
        Used for reminders and meeting invites.
      </p>
    </div>
  )
}
