"use client"

import * as React from "react"
import { ScanBarcodeIcon } from "lucide-react"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@workspace/ui/components/combobox"
import { InputGroupAddon } from "@workspace/ui/components/input-group"

type Product = { sku: string; name: string; price: number; stock: number }

const products: Product[] = [
  { sku: "A1", name: "Flat white", price: 3.6, stock: 40 },
  { sku: "A2", name: "Oat latte", price: 4.2, stock: 32 },
  { sku: "B1", name: "Almond croissant", price: 3.9, stock: 6 },
  { sku: "B2", name: "Banana bread", price: 3.2, stock: 0 },
  { sku: "C1", name: "Sparkling water", price: 2.1, stock: 18 },
]

export default function ProductQuickAdd() {
  const [cart, setCart] = React.useState<Product[]>([])
  return (
    <div className="w-full max-w-xs space-y-3 border p-3">
      <Combobox
        items={products}
        value={null}
        itemToStringLabel={(product: Product) => product.name}
        onValueChange={(product) =>
          product && setCart((prev) => [...prev, product])
        }
      >
        <ComboboxInput
          placeholder="Add item to order"
          className="w-full"
          showTrigger={false}
        >
          <InputGroupAddon>
            <ScanBarcodeIcon />
          </InputGroupAddon>
        </ComboboxInput>
        <ComboboxContent>
          <ComboboxEmpty>No products found.</ComboboxEmpty>
          <ComboboxList>
            {(product: Product) => (
              <ComboboxItem
                key={product.sku}
                value={product}
                disabled={product.stock === 0}
              >
                <span className="flex-1">{product.name}</span>
                <span className="text-[11px] text-muted-foreground">
                  {product.stock === 0
                    ? "Sold out"
                    : "$" + product.price.toFixed(2)}
                </span>
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      <ul className="space-y-1 text-sm">
        {cart.length === 0 && (
          <li className="text-xs text-muted-foreground">No items yet.</li>
        )}
        {cart.map((item, index) => (
          <li key={index} className="flex justify-between">
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="flex justify-between border-t pt-2 text-sm font-semibold">
        <span>Total</span>
        <span>
          ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
        </span>
      </div>
    </div>
  )
}
