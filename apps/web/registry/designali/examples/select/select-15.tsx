"use client"

import * as React from "react"
import { ArrowUpDownIcon } from "lucide-react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

const sorts = [
  { label: "Featured", value: "featured" },
  { label: "Price: low to high", value: "price-asc" },
  { label: "Price: high to low", value: "price-desc" },
  { label: "Name: A to Z", value: "name" },
]

const products = [
  { name: "Canvas tote", price: 32, rank: 2 },
  { name: "Wool beanie", price: 24, rank: 1 },
  { name: "Trail bottle", price: 18, rank: 3 },
]

export default function ProductSortSelect() {
  const [sort, setSort] = React.useState<string | null>("featured")
  const sorted = [...products].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price
    if (sort === "price-desc") return b.price - a.price
    if (sort === "name") return a.name.localeCompare(b.name)
    return a.rank - b.rank
  })

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">
          {products.length} products
        </span>
        <Select items={sorts} value={sort} onValueChange={setSort}>
          <SelectTrigger size="sm" aria-label="Sort by">
            <ArrowUpDownIcon className="text-muted-foreground" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent align="end" alignItemWithTrigger={false}>
            {sorts.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <ul className="divide-y border">
        {sorted.map((product) => (
          <li key={product.name} className="flex justify-between p-3 text-sm">
            <span>{product.name}</span>
            <span className="text-muted-foreground">{"$" + product.price}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
