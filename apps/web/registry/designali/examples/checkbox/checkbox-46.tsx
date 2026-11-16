"use client"

import * as React from "react"

import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@workspace/ui/components/field"
import { cn } from "@workspace/ui/lib/utils"

const aisles = [
  { name: "Brand", items: ["Logo", "Color palette", "Typography"] },
  { name: "UI", items: ["Wireframes", "Design system"] },
  { name: "Code", items: ["Next.js setup", "Tailwind config", "Vercel deploy"] },
]

export default function GroceryListByAisle() {
  const [got, setGot] = React.useState<string[]>(["Color palette", "Design system"])

  return (
    <div className="flex w-full max-w-xs flex-col gap-5">
      {aisles.map((aisle) => {
        const count = aisle.items.filter((i) => got.includes(i)).length
        return (
          <FieldSet key={aisle.name}>
            <FieldLegend
              variant="label"
              className="flex w-full items-center justify-between"
            >
              {aisle.name}
              <span className="font-normal text-muted-foreground">
                {count}/{aisle.items.length}
              </span>
            </FieldLegend>
            <FieldGroup className="gap-2.5">
              {aisle.items.map((item) => (
                <Field key={item} orientation="horizontal">
                  <Checkbox
                    id={"grocery-" + item}
                    checked={got.includes(item)}
                    onCheckedChange={(checked) =>
                      setGot((list) =>
                        checked
                          ? [...list, item]
                          : list.filter((i) => i !== item)
                      )
                    }
                  />
                  <FieldLabel
                    htmlFor={"grocery-" + item}
                    className={cn(
                      "font-normal",
                      got.includes(item) && "text-muted-foreground line-through"
                    )}
                  >
                    {item}
                  </FieldLabel>
                </Field>
              ))}
            </FieldGroup>
          </FieldSet>
        )
      })}
    </div>
  )
}
