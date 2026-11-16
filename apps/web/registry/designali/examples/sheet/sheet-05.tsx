"use client"

import * as React from "react"
import {
  Funnel as FilterIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Label } from "@workspace/ui/components/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"
import { Separator } from "@workspace/ui/components/separator"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"

const categories = ["Templates", "Blocks", "Icons", "Logos", "Illustrations"]
const sorts = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
]

export default function ProductFiltersSheet() {
  const [selected, setSelected] = React.useState<string[]>(["Blocks"])

  function toggle(category: string, checked: boolean) {
    setSelected((prev) =>
      checked ? [...prev, category] : prev.filter((c) => c !== category)
    )
  }

  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <FilterIcon data-icon="inline-start" />
        Filters
        {selected.length > 0 && <Badge>{selected.length}</Badge>}
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filter Designali products</SheetTitle>
          <SheetDescription>Narrow down 248 results.</SheetDescription>
        </SheetHeader>
        <div className="flex flex-1 flex-col gap-6 overflow-y-auto px-4">
          <div className="flex flex-col gap-3">
            <span className="font-medium">Category</span>
            {categories.map((category) => (
              <Label key={category} className="gap-2 font-normal">
                <Checkbox
                  checked={selected.includes(category)}
                  onCheckedChange={(checked) => toggle(category, checked)}
                />
                {category}
              </Label>
            ))}
          </div>
          <Separator />
          <div className="flex flex-col gap-3">
            <span className="font-medium">Sort by</span>
            <RadioGroup defaultValue="featured">
              {sorts.map((sort) => (
                <Label key={sort.value} className="gap-2 font-normal">
                  <RadioGroupItem value={sort.value} />
                  {sort.label}
                </Label>
              ))}
            </RadioGroup>
          </div>
        </div>
        <SheetFooter className="flex-row border-t">
          <Button
            variant="ghost"
            className="flex-1"
            onClick={() => setSelected([])}
          >
            Clear all
          </Button>
          <SheetClose render={<Button className="flex-1" />}>
            Show results
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
