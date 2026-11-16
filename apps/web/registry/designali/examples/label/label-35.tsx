import { Checkbox } from "@workspace/ui/components/checkbox"
import { Label } from "@workspace/ui/components/label"

const addOns = [
  {
    id: "addon-wrap",
    title: "Figma source files",
    desc: "Editable Figma file for your Designali template",
    price: "$4.00",
  },
  {
    id: "addon-insure",
    title: "Custom logo by Designali",
    desc: "Brand mark designed by Ali Imam",
    price: "$2.49",
  },
  {
    id: "addon-express",
    title: "Priority setup",
    desc: "Deployed to Vercel in 1-2 business days",
    price: "$9.00",
  },
]

export default function CheckoutAddOnLabels() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      {addOns.map((addOn, i) => (
        <Label
          key={addOn.id}
          htmlFor={addOn.id}
          className="items-start gap-3 border p-3 hover:bg-muted/40 has-data-checked:border-primary"
        >
          <Checkbox id={addOn.id} defaultChecked={i === 1} className="mt-0.5" />
          <span className="flex flex-1 flex-col gap-1">
            <span className="font-medium">{addOn.title}</span>
            <span className="text-muted-foreground">{addOn.desc}</span>
          </span>
          <span className="font-medium tabular-nums">{addOn.price}</span>
        </Label>
      ))}
    </div>
  )
}
