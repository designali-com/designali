import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

const sizes = [
  { value: "xs", stock: true },
  { value: "s", stock: true },
  { value: "m", stock: true },
  { value: "l", stock: false },
  { value: "xl", stock: true },
]

export default function ApparelSizeTiles() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium">Size</span>
        <a
          href="#"
          className="text-muted-foreground underline underline-offset-4"
        >
          Size guide
        </a>
      </div>
      <RadioGroup defaultValue="m" className="grid grid-cols-5 gap-2">
        {sizes.map((size) => (
          <label
            key={size.value}
            htmlFor={"size-" + size.value}
            className="flex h-11 cursor-pointer items-center justify-center border text-sm font-medium uppercase has-focus-visible:ring-2 has-focus-visible:ring-ring/50 has-disabled:cursor-not-allowed has-disabled:text-muted-foreground has-disabled:line-through has-data-checked:border-primary has-data-checked:bg-primary has-data-checked:text-primary-foreground"
          >
            <RadioGroupItem
              value={size.value}
              id={"size-" + size.value}
              disabled={!size.stock}
              className="sr-only"
            />
            {size.value}
          </label>
        ))}
      </RadioGroup>
    </div>
  )
}
