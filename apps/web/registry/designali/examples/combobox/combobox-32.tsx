"use client"

import * as React from "react"
import {
  ArrowUpDownIcon,
  PlaneLandingIcon,
  PlaneTakeoffIcon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@workspace/ui/components/combobox"
import { InputGroupAddon } from "@workspace/ui/components/input-group"

type Airport = { code: string; city: string }

const airports: Airport[] = [
  { code: "LHR", city: "London Heathrow" },
  { code: "CDG", city: "Paris Charles de Gaulle" },
  { code: "JFK", city: "New York JFK" },
  { code: "LIS", city: "Lisbon" },
  { code: "HND", city: "Tokyo Haneda" },
  { code: "SIN", city: "Singapore Changi" },
]

function AirportField({
  label,
  icon,
  value,
  onChange,
}: {
  label: string
  icon: React.ReactNode
  value: Airport | null
  onChange: (a: Airport | null) => void
}) {
  return (
    <Combobox
      items={airports}
      value={value}
      onValueChange={onChange}
      itemToStringLabel={(a: Airport) => a.code + " · " + a.city}
    >
      <ComboboxInput
        placeholder={label}
        aria-label={label}
        className="w-full"
        showTrigger={false}
      >
        <InputGroupAddon>{icon}</InputGroupAddon>
      </ComboboxInput>
      <ComboboxContent>
        <ComboboxEmpty>No airports found.</ComboboxEmpty>
        <ComboboxList>
          {(a: Airport) => (
            <ComboboxItem key={a.code} value={a}>
              <span className="w-9 font-mono font-semibold">{a.code}</span>
              {a.city}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

export default function FlightRouteSearch() {
  const [from, setFrom] = React.useState<Airport | null>(airports[3]!)
  const [to, setTo] = React.useState<Airport | null>(null)
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <AirportField
        label="From"
        icon={<PlaneTakeoffIcon />}
        value={from}
        onChange={setFrom}
      />
      <div className="flex justify-center">
        <Button
          variant="outline"
          size="icon-sm"
          aria-label="Swap airports"
          onClick={() => {
            setFrom(to)
            setTo(from)
          }}
        >
          <ArrowUpDownIcon />
        </Button>
      </div>
      <AirportField
        label="To"
        icon={<PlaneLandingIcon />}
        value={to}
        onChange={setTo}
      />
      <Button className="mt-1" disabled={!from || !to}>
        Search flights
      </Button>
    </div>
  )
}
