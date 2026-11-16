import {
  Warehouse as WarehouseIcon,
} from "@designali/icons"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command"
import { cn } from "@workspace/ui/lib/utils"

const aisles = ["A", "B", "C", "D", "E"]
const bins = aisles.flatMap((aisle) =>
  Array.from({ length: 20 }, (_, i) => ({
    id: aisle + "-" + String(i + 1).padStart(2, "0"),
    units: (i * 37 + aisle.charCodeAt(0)) % 140,
  }))
)

export default function LargeSkuLookup() {
  return (
    <Command className="w-full max-w-xs border">
      <CommandInput placeholder="Bin location, e.g. C-14" />
      <CommandList className="max-h-60">
        <CommandEmpty>Bin not found.</CommandEmpty>
        {aisles.map((aisle) => (
          <CommandGroup key={aisle} heading={"Aisle " + aisle}>
            {bins
              .filter((bin) => bin.id.startsWith(aisle))
              .map((bin) => (
                <CommandItem key={bin.id} value={bin.id}>
                  <WarehouseIcon />
                  <span className="font-sans">{bin.id}</span>
                  <span
                    className={cn(
                      "ms-auto text-[11px]",
                      bin.units < 15
                        ? "text-destructive"
                        : "text-muted-foreground"
                    )}
                  >
                    {bin.units} units
                  </span>
                </CommandItem>
              ))}
          </CommandGroup>
        ))}
      </CommandList>
    </Command>
  )
}
