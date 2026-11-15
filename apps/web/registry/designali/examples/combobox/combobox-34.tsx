"use client"

import * as React from "react"
import { CalendarIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  Combobox,
  ComboboxContent,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  ComboboxValue,
} from "@workspace/ui/components/combobox"

const presets = [
  "Today",
  "Yesterday",
  "Last 7 days",
  "Last 30 days",
  "This quarter",
  "Year to date",
]
const visitors: Record<string, string> = {
  Today: "1,204",
  Yesterday: "1,388",
  "Last 7 days": "9,870",
  "Last 30 days": "41,312",
  "This quarter": "96,540",
  "Year to date": "402,118",
}

export default function DashboardDatePresets() {
  const [range, setRange] = React.useState<string | null>("Last 7 days")
  return (
    <Card className="w-full max-w-xs" size="sm">
      <CardHeader>
        <CardDescription>Unique visitors</CardDescription>
        <CardTitle className="text-2xl">
          {range ? visitors[range] : "-"}
        </CardTitle>
        <CardAction>
          <Combobox items={presets} value={range} onValueChange={setRange}>
            <ComboboxTrigger render={<Button variant="outline" size="xs" />}>
              <CalendarIcon />
              <ComboboxValue />
            </ComboboxTrigger>
            <ComboboxContent className="w-40" align="end">
              <ComboboxList>
                {(item: string) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </CardAction>
      </CardHeader>
    </Card>
  )
}
