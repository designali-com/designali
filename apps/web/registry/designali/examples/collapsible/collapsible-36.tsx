"use client"

import * as React from "react"
import { ChevronDownIcon, ShieldIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"
import { Label } from "@workspace/ui/components/label"

const groups = [
  {
    id: "projects",
    label: "Projects",
    scopes: ["View", "Create", "Archive", "Delete"],
  },
  {
    id: "billing",
    label: "Billing",
    scopes: ["View invoices", "Update payment method"],
  },
]

export default function RoleScopesEditor() {
  const [granted, setGranted] = React.useState<string[]>([
    "projects:View",
    "projects:Create",
  ])
  const toggle = (key: string, on: boolean) =>
    setGranted((prev) => (on ? [...prev, key] : prev.filter((k) => k !== key)))
  return (
    <div className="w-full max-w-sm space-y-2">
      <p className="text-sm font-semibold">Editor role</p>
      {groups.map((group) => {
        const count = group.scopes.filter((scope) =>
          granted.includes(group.id + ":" + scope)
        ).length
        return (
          <Collapsible
            key={group.id}
            defaultOpen={group.id === "projects"}
            className="border"
          >
            <CollapsibleTrigger
              render={
                <Button variant="ghost" className="w-full justify-start">
                  <ShieldIcon />
                  {group.label}
                  <span className="ml-auto text-xs text-muted-foreground">
                    {count}/{group.scopes.length}
                  </span>
                  <ChevronDownIcon className="transition-transform group-data-panel-open/button:rotate-180" />
                </Button>
              }
            />
            <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
              <div className="grid grid-cols-2 gap-2 border-t p-3">
                {group.scopes.map((scope) => {
                  const key = group.id + ":" + scope
                  return (
                    <div key={key} className="flex items-center gap-2">
                      <Checkbox
                        id={key}
                        checked={granted.includes(key)}
                        onCheckedChange={(on) => toggle(key, on)}
                      />
                      <Label htmlFor={key} className="font-normal">
                        {scope}
                      </Label>
                    </div>
                  )
                })}
              </div>
            </CollapsibleContent>
          </Collapsible>
        )
      })}
    </div>
  )
}
