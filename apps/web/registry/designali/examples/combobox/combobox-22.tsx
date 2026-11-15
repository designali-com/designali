"use client"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@workspace/ui/components/combobox"
import { Field, FieldLabel } from "@workspace/ui/components/field"

const colors = ["Black", "White", "Navy", "Olive", "Sand", "Rust"]
const sizes = ["XS", "S", "M", "L", "XL"]
const skus = colors.flatMap((color) =>
  sizes.map((size) => "TEE-" + color.toUpperCase() + "-" + size)
)

export default function LargeCatalogLimit() {
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="sku">SKU</FieldLabel>
      <Combobox items={skus} limit={6}>
        <ComboboxInput
          id="sku"
          placeholder="Search 30 SKUs"
          className="w-full font-mono"
        />
        <ComboboxContent>
          <ComboboxEmpty>No SKUs match.</ComboboxEmpty>
          <ComboboxList>
            {(item: string) => (
              <ComboboxItem key={item} value={item} className="font-mono">
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
          <div className="border-t px-2 py-1.5 text-[11px] text-muted-foreground">
            Showing up to 6 results. Keep typing to narrow.
          </div>
        </ComboboxContent>
      </Combobox>
    </Field>
  )
}
