"use client"

import * as React from "react"
import {
  ListFilter as ListFilterIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
} from "@workspace/ui/components/combobox"
import { Separator } from "@workspace/ui/components/separator"

const statuses = ["Draft", "Scheduled", "Published", "Archived", "Needs review"]

export default function MultiSelectCountTrigger() {
  const [value, setValue] = React.useState<string[]>(["Draft", "Needs review"])
  return (
    <div className="flex items-center gap-2">
      <Combobox
        multiple
        items={statuses}
        value={value}
        onValueChange={setValue}
      >
        <ComboboxTrigger
          render={
            <Button variant="outline" size="sm" className="border-dashed" />
          }
        >
          <ListFilterIcon />
          Status
          {value.length > 0 && (
            <>
              <Separator orientation="vertical" className="mx-1 h-4" />
              <Badge variant="secondary" className="px-1">
                {value.length} selected
              </Badge>
            </>
          )}
        </ComboboxTrigger>
        <ComboboxContent className="w-48">
          <ComboboxInput showTrigger={false} placeholder="Filter status" />
          <ComboboxEmpty>No statuses.</ComboboxEmpty>
          <ComboboxList>
            {(item: string) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
          {value.length > 0 && (
            <div className="border-t p-1">
              <Button
                variant="ghost"
                size="xs"
                className="w-full"
                onClick={() => setValue([])}
              >
                Clear filters
              </Button>
            </div>
          )}
        </ComboboxContent>
      </Combobox>
    </div>
  )
}
