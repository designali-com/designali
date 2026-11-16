"use client"

import * as React from "react"
import {
  Check as CheckIcon,
  ChevronDown as ChevronDownIcon,
  Globe as GlobeIcon,
  Search as SearchIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"
import { cn } from "@workspace/ui/lib/utils"

const countries = [
  "Argentina",
  "Australia",
  "Austria",
  "Belgium",
  "Brazil",
  "Canada",
  "Chile",
  "Denmark",
  "Egypt",
  "Finland",
  "France",
  "Germany",
  "Ghana",
  "Greece",
  "India",
  "Indonesia",
  "Ireland",
  "Italy",
  "Japan",
  "Kenya",
  "Mexico",
  "Netherlands",
  "New Zealand",
  "Nigeria",
  "Norway",
  "Pakistan",
  "Peru",
  "Poland",
  "Portugal",
  "Singapore",
  "South Africa",
  "Spain",
  "Sweden",
  "Switzerland",
  "Turkey",
  "United Kingdom",
  "United States",
  "Vietnam",
]

export default function CountrySelectorDrawer() {
  const [query, setQuery] = React.useState("")
  const [country, setCountry] = React.useState("Portugal")
  const visible = countries.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <Drawer onOpenChange={(open) => !open && setQuery("")}>
      <DrawerTrigger
        render={
          <Button
            variant="outline"
            className="w-full max-w-60 justify-between"
          />
        }
      >
        <span className="flex items-center gap-2">
          <GlobeIcon />
          {country}
        </span>
        <ChevronDownIcon />
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex min-h-0 w-full max-w-sm flex-1 flex-col">
          <DrawerHeader>
            <DrawerTitle>Country of residence</DrawerTitle>
            <DrawerDescription>Used for tax and shipping.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-2">
            <InputGroup>
              <InputGroupAddon>
                <SearchIcon />
              </InputGroupAddon>
              <InputGroupInput
                placeholder="Search countries"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </InputGroup>
          </div>
          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-2 pb-4">
            {visible.map((item) => (
              <DrawerClose
                key={item}
                render={<button type="button" />}
                onClick={() => setCountry(item)}
                className={cn(
                  "flex items-center justify-between px-3 py-2 text-start hover:bg-muted",
                  item === country && "font-medium"
                )}
              >
                {item}
                {item === country && <CheckIcon className="size-4" />}
              </DrawerClose>
            ))}
            {visible.length === 0 && (
              <p className="py-6 text-center text-muted-foreground">
                No countries match.
              </p>
            )}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
