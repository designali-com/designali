"use client"

import {
  Cpu as CpuIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@workspace/ui/components/combobox"

type Machine = { id: string; label: string; spec: string; locked: boolean }

const machines: Machine[] = [
  { id: "s", label: "Small", spec: "1 vCPU · 2 GB", locked: false },
  { id: "m", label: "Medium", spec: "2 vCPU · 4 GB", locked: false },
  { id: "l", label: "Large", spec: "4 vCPU · 16 GB", locked: true },
  { id: "xl", label: "X-Large", spec: "8 vCPU · 32 GB", locked: true },
]

export default function PlanTierDisabledItems() {
  return (
    <div className="w-full max-w-xs">
      <Combobox
        items={machines}
        defaultValue={machines[0]}
        itemToStringLabel={(machine: Machine) => machine.label}
      >
        <ComboboxInput placeholder="Machine size" className="w-full" />
        <ComboboxContent>
          <ComboboxList>
            {(machine: Machine) => (
              <ComboboxItem
                key={machine.id}
                value={machine}
                disabled={machine.locked}
              >
                <CpuIcon className="text-muted-foreground" />
                <span className="flex-1">{machine.label}</span>
                <span className="text-[11px] text-muted-foreground">
                  {machine.spec}
                </span>
                {machine.locked && (
                  <Badge variant="outline" className="h-4 px-1 text-[10px]">
                    Pro
                  </Badge>
                )}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}
