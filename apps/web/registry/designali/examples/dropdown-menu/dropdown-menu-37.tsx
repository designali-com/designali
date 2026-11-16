"use client"

import * as React from "react"
import {
  ChevronDown as ChevronDownIcon,
  MapPin as MapPinIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

const regions = [
  {
    name: "Europe",
    countries: [
      "Austria",
      "Belgium",
      "Denmark",
      "Finland",
      "Ireland",
      "Portugal",
    ],
  },
  {
    name: "Americas",
    countries: ["Argentina", "Brazil", "Canada", "Chile", "Mexico"],
  },
  {
    name: "Asia Pacific",
    countries: [
      "Australia",
      "Japan",
      "New Zealand",
      "Singapore",
      "South Korea",
    ],
  },
]

export default function ScrollableCountryMenu() {
  const [country, setCountry] = React.useState("Portugal")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<Button variant="outline" className="w-48 justify-between" />}
      >
        <span className="flex items-center gap-2">
          <MapPinIcon />
          {country}
        </span>
        <ChevronDownIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-h-64">
        <DropdownMenuRadioGroup value={country} onValueChange={setCountry}>
          {regions.map((region, index) => (
            <DropdownMenuGroup key={region.name}>
              {index > 0 && <DropdownMenuSeparator />}
              <DropdownMenuLabel>{region.name}</DropdownMenuLabel>
              {region.countries.map((c) => (
                <DropdownMenuRadioItem key={c} value={c}>
                  {c}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuGroup>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
