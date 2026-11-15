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
  { sku: "TS-1001", name: "Organic cotton tee", stock: 42 },
  { sku: "HD-2040", name: "Fleece zip hoodie", stock: 8 },
  { sku: "CP-3300", name: "Canvas baseball cap", stock: 0 },
  { sku: "BG-4120", name: "Recycled tote bag", stock: 120 },
  { sku: "SK-5005", name: "Merino crew socks", stock: 17 },
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
            <span className="w-16 font-mono text-[11px] text-muted-foreground">
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
