"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Label } from "@workspace/ui/components/label"

const filters = [
  {
    value: "category",
    title: "Category",
    options: ["Jackets", "Knitwear", "Shirts", "Trousers"],
  },
  { value: "size", title: "Size", options: ["XS", "S", "M", "L", "XL"] },
  {
    value: "color",
    title: "Colour",
    options: ["Black", "Navy", "Olive", "Stone"],
  },
]

export default function AccordionFilterSidebar() {
  const [selected, setSelected] = React.useState<Record<string, string[]>>({
    category: ["Knitwear"],
    size: [],
    color: [],
  })

  const toggle = (group: string, option: string, checked: boolean) =>
    setSelected((prev) => ({
      ...prev,
      [group]: checked
        ? [...(prev[group] ?? []), option]
        : (prev[group] ?? []).filter((o) => o !== option),
    }))

  return (
    <div className="w-full max-w-xs space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Filters</span>
        <Button
          size="xs"
          variant="link"
          onClick={() => setSelected({ category: [], size: [], color: [] })}
        >
          Clear all
        </Button>
      </div>
      <Accordion
        multiple
        defaultValue={["category", "size"]}
        className="border-y"
      >
        {filters.map((filter) => (
          <AccordionItem key={filter.value} value={filter.value}>
            <AccordionTrigger className="items-center">
              <span className="flex items-center gap-2">
                {filter.title}
                {(selected[filter.value]?.length ?? 0) > 0 && (
                  <Badge variant="secondary">
                    {selected[filter.value]?.length}
                  </Badge>
                )}
              </span>
              <ChevronDownIcon
                data-slot="accordion-trigger-icon"
                className="transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-180"
              />
            </AccordionTrigger>
            <AccordionContent className="space-y-2">
              {filter.options.map((option) => {
                const id = filter.value + "-" + option
                return (
                  <div key={option} className="flex items-center gap-2">
                    <Checkbox
                      id={id}
                      checked={
                        selected[filter.value]?.includes(option) ?? false
                      }
                      onCheckedChange={(checked) =>
                        toggle(filter.value, option, checked)
                      }
                    />
                    <Label htmlFor={id} className="font-normal">
                      {option}
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
