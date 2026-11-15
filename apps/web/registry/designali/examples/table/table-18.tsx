"use client"

import * as React from "react"
import { PencilIcon } from "lucide-react"

import { Input } from "@workspace/ui/components/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const initialProducts = [
  { sku: "TS-001", name: "Classic tee", price: 24 },
  { sku: "HD-014", name: "Zip hoodie", price: 58 },
  { sku: "CP-207", name: "Canvas cap", price: 19 },
]

export default function InlineEditableTable() {
  const [products, setProducts] = React.useState(initialProducts)
  const [editing, setEditing] = React.useState<string | null>(null)

  return (
    <div className="w-full max-w-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>SKU</TableHead>
            <TableHead>Product</TableHead>
            <TableHead className="w-32 text-right">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.sku}>
              <TableCell className="font-mono text-muted-foreground">
                {product.sku}
              </TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell className="text-right">
                {editing === product.sku ? (
                  <Input
                    autoFocus
                    type="number"
                    className="h-7 text-right"
                    defaultValue={product.price}
                    aria-label={"Price for " + product.name}
                    onBlur={(e) => {
                      const price = Number(e.target.value) || product.price
                      setProducts((list) =>
                        list.map((p) =>
                          p.sku === product.sku ? { ...p, price } : p
                        )
                      )
                      setEditing(null)
                    }}
                    onKeyDown={(e) =>
                      e.key === "Enter" && e.currentTarget.blur()
                    }
                  />
                ) : (
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 tabular-nums hover:underline"
                    onClick={() => setEditing(product.sku)}
                  >
                    {"$" + product.price.toFixed(2)}
                    <PencilIcon className="size-3 text-muted-foreground" />
                  </button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
