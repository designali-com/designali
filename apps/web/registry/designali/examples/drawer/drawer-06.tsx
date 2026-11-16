"use client"

import * as React from "react"
import {
  ListFilter as ListFilterIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@workspace/ui/components/field"
import { Slider } from "@workspace/ui/components/slider"

const categories = ["Templates", "Blocks", "Icons", "Logos", "Illustrations"]

export default function ProductFiltersDrawer() {
  const [selected, setSelected] = React.useState<string[]>(["Knitwear"])
  const [price, setPrice] = React.useState(150)
  const active = selected.length + (price < 300 ? 1 : 0)

  function toggle(category: string) {
    setSelected((current) =>
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category]
    )
  }

  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger render={<Button variant="outline" />}>
        <ListFilterIcon data-icon="inline-start" />
        Filters
        {active > 0 && <Badge className="ms-1">{active}</Badge>}
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Filters</DrawerTitle>
          <DrawerDescription>Showing 84 of 312 products</DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-1 flex-col gap-6 overflow-y-auto p-4">
          <FieldSet>
            <FieldLegend variant="label">Category</FieldLegend>
            <FieldGroup className="gap-3">
              {categories.map((category) => (
                <Field key={category} orientation="horizontal">
                  <Checkbox
                    id={"filter-" + category}
                    checked={selected.includes(category)}
                    onCheckedChange={() => toggle(category)}
                  />
                  <FieldLabel htmlFor={"filter-" + category}>
                    {category}
                  </FieldLabel>
                </Field>
              ))}
            </FieldGroup>
          </FieldSet>
          <Field>
            <div className="flex justify-between">
              <FieldLabel>Max price</FieldLabel>
              <span className="tabular-nums">{"$" + price}</span>
            </div>
            <Slider
              value={[price]}
              min={20}
              max={300}
              step={10}
              onValueChange={(value) =>
                setPrice(typeof value === "number" ? value : (value[0] ?? 0))
              }
              aria-label="Max price"
            />
          </Field>
        </div>
        <DrawerFooter className="flex-row border-t pt-4">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => {
              setSelected([])
              setPrice(300)
            }}
          >
            Reset
          </Button>
          <DrawerClose render={<Button className="flex-1" />}>
            Show results
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
