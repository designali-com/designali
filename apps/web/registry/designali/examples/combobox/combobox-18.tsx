"use client"

import {
  Server as ServerIcon,
} from "@designali/icons"

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
} from "@workspace/ui/components/combobox"
import { cn } from "@workspace/ui/lib/utils"

type Region = { id: string; city: string; ms: number }

const groups: { label: string; items: Region[] }[] = [
  {
    label: "Europe",
    items: [
      { id: "fra", city: "Frankfurt", ms: 18 },
      { id: "ams", city: "Amsterdam", ms: 22 },
      { id: "lhr", city: "London", ms: 27 },
    ],
  },
  {
    label: "North America",
    items: [
      { id: "iad", city: "Virginia", ms: 94 },
      { id: "sfo", city: "San Francisco", ms: 148 },
    ],
  },
  {
    label: "Asia Pacific",
    items: [
      { id: "sin", city: "Singapore", ms: 182 },
      { id: "syd", city: "Sydney", ms: 274 },
    ],
  },
]

export default function ServerRegionLatency() {
  return (
    <div className="w-full max-w-xs">
      <Combobox
        items={groups}
        itemToStringLabel={(region: Region) => region.city}
      >
        <ComboboxInput placeholder="Pick a region" className="w-full" />
        <ComboboxContent>
          <ComboboxEmpty>No regions found.</ComboboxEmpty>
          <ComboboxList>
            {(group: (typeof groups)[number]) => (
              <ComboboxGroup key={group.label} items={group.items}>
                <ComboboxLabel>{group.label}</ComboboxLabel>
                <ComboboxCollection>
                  {(region: Region) => (
                    <ComboboxItem key={region.id} value={region}>
                      <ServerIcon className="text-muted-foreground" />
                      {region.city}
                      <span
                        className={cn(
                          "ml-auto text-[11px] tabular-nums",
                          region.ms < 50
                            ? "text-primary dark:text-primary"
                            : "text-muted-foreground"
                        )}
                      >
                        {region.ms} ms
                      </span>
                    </ComboboxItem>
                  )}
                </ComboboxCollection>
              </ComboboxGroup>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}
