"use client"

import * as React from "react"
import { PackageIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Switch } from "@workspace/ui/components/switch"

const products = [
  { id: "p1", name: "Linen throw blanket", sku: "HM-1042", live: true },
  { id: "p2", name: "Stoneware mug set", sku: "KT-2210", live: true },
  { id: "p3", name: "Walnut serving board", sku: "KT-2234", live: false },
]

export default function ProductVisibilityList() {
  const [live, setLive] = React.useState(() =>
    Object.fromEntries(products.map((p) => [p.id, p.live]))
  )

  return (
    <div className="w-full max-w-md divide-y border">
      {products.map((product) => (
        <div key={product.id} className="flex items-center gap-3 px-4 py-3">
          <div className="flex size-9 shrink-0 items-center justify-center bg-muted">
            <PackageIcon className="size-4 text-muted-foreground" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">{product.name}</p>
            <p className="font-mono text-xs text-muted-foreground">
              {product.sku}
            </p>
          </div>
          <Badge variant={live[product.id] ? "default" : "outline"}>
            {live[product.id] ? "Live" : "Draft"}
          </Badge>
          <Switch
            checked={live[product.id]}
            onCheckedChange={(checked) =>
              setLive((l) => ({ ...l, [product.id]: checked }))
            }
            aria-label={"Publish " + product.name}
          />
        </div>
      ))}
    </div>
  )
}
