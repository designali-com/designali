"use client"

import * as React from "react"
import {
  ChevronDown as ChevronDownIcon,
  Shield as ShieldIcon,
} from "@designali/icons"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Label } from "@workspace/ui/components/label"

const resources = [
  {
    value: "projects",
    title: "Client projects",
    actions: ["View", "Create", "Edit", "Delete"],
  },
  {
    value: "billing",
    title: "Billing",
    actions: ["View invoices", "Update payment method"],
  },
  {
    value: "members",
    title: "Members",
    actions: ["Invite", "Change roles", "Remove"],
  },
]

export default function AccordionRolePermissions() {
  const [granted, setGranted] = React.useState<Record<string, string[]>>({
    projects: ["View", "Create", "Edit"],
    billing: ["View invoices"],
    members: [],
  })

  const toggle = (resource: string, action: string, checked: boolean) =>
    setGranted((prev) => ({
      ...prev,
      [resource]: checked
        ? [...(prev[resource] ?? []), action]
        : (prev[resource] ?? []).filter((a) => a !== action),
    }))

  return (
    <div className="w-full max-w-sm space-y-2">
      <div className="flex items-center gap-2">
        <ShieldIcon className="size-4" />
        <span className="text-sm font-medium">Designali studio editor role</span>
      </div>
      <Accordion defaultValue={["projects"]} className="border px-3">
        {resources.map((resource) => (
          <AccordionItem key={resource.value} value={resource.value}>
            <AccordionTrigger className="items-center">
              {resource.title}
              <span className="ms-auto me-2 font-normal text-muted-foreground">
                {granted[resource.value]?.length ?? 0}/{resource.actions.length}
              </span>
              <ChevronDownIcon className="size-4 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-180" />
            </AccordionTrigger>
            <AccordionContent className="grid grid-cols-2 gap-2">
              {resource.actions.map((action) => {
                const id = resource.value + "-" + action
                return (
                  <div key={action} className="flex items-center gap-2">
                    <Checkbox
                      id={id}
                      checked={
                        granted[resource.value]?.includes(action) ?? false
                      }
                      onCheckedChange={(checked) =>
                        toggle(resource.value, action, checked)
                      }
                    />
                    <Label htmlFor={id} className="font-normal">
                      {action}
                    </Label>
                  </div>
                )
              })}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
