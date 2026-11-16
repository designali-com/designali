"use client"

import * as React from "react"

import { Badge } from "@workspace/ui/components/badge"
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command"

const products = [
  { sku: "TP-1001", name: "Portfolio Simple template", stock: 42 },
  { sku: "TP-2040", name: "Design Agency template", stock: 8 },
  { sku: "TP-3300", name: "Resort template", stock: 0 },
  { sku: "IC-4120", name: "Designali icon pack", stock: 120 },
  { sku: "LG-5005", name: "Designali logo library", stock: 17 },
]

export default function ManualFilteringResultsCount() {
  const [query, setQuery] = React.useState("")
  const q = query.trim().toLowerCase()
  const results = products.filter(
    (p) => p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q)
  )

  return (
    <Command shouldFilter={false} className="w-full max-w-sm border">
      <CommandInput
        value={query}
        onValueChange={setQuery}
        placeholder="Name or SKU..."
      />
      <div className="border-b px-2 py-1 text-[11px] text-muted-foreground">
        {results.length} of {products.length} products
      </div>
      <CommandList>
        <CommandEmpty>No products match “{query}”.</CommandEmpty>
        {results.map((product) => (
          <CommandItem key={product.sku} value={product.sku}>
            <span className="w-16 font-sans text-[11px] text-muted-foreground">
              {product.sku}
            </span>
            <span className="truncate">{product.name}</span>
            <Badge
              variant={product.stock === 0 ? "destructive" : "outline"}
              className="ms-auto"
            >
              {product.stock === 0 ? "Sold out" : product.stock + " left"}
            </Badge>
          </CommandItem>
        ))}
      </CommandList>
    </Command>
  )
}
