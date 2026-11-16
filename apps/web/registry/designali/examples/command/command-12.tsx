"use client"

import * as React from "react"
import {
  Package as PackageIcon,
} from "@designali/icons"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command"
import { Spinner } from "@workspace/ui/components/spinner"

const catalog = [
  "Portfolio template",
  "Design agency template",
  "Hero blocks",
  "Pricing blocks",
  "Icon pack",
  "Logo library",
  "iPhone mockup",
  "Dot pattern",
]

export default function AsyncSearchLoading() {
  const [query, setQuery] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [results, setResults] = React.useState<string[]>(catalog.slice(0, 4))

  const onQueryChange = (value: string) => {
    setQuery(value)
    setLoading(true)
  }

  React.useEffect(() => {
    const timer = setTimeout(() => {
      const q = query.toLowerCase()
      setResults(catalog.filter((item) => item.toLowerCase().includes(q)))
      setLoading(false)
    }, 600)
    return () => clearTimeout(timer)
  }, [query])

  return (
    <Command shouldFilter={false} className="w-full max-w-sm border">
      <CommandInput
        value={query}
        onValueChange={onQueryChange}
        placeholder="Search Designali products..."
      />
      <CommandList>
        {loading ? (
          <div className="flex items-center justify-center gap-2 py-6 text-xs text-muted-foreground">
            <Spinner />
            Searching products...
          </div>
        ) : (
          <>
            <CommandEmpty>No products found for “{query}”.</CommandEmpty>
            <CommandGroup heading={results.length + " results"}>
              {results.map((item) => (
                <CommandItem key={item} value={item}>
                  <PackageIcon />
                  <span>{item}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </>
        )}
      </CommandList>
    </Command>
  )
}
