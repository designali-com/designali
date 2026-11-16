import { Separator } from "@workspace/ui/components/separator"

const lines = [
  { label: "Portfolio Simple template", amount: 4.5 },
  { label: "Icons Pack", amount: 3.75 },
  { label: "Logos Pack", amount: 2.25 },
]

const dashed =
  "bg-transparent bg-[repeating-linear-gradient(90deg,var(--border)_0_6px,transparent_6px_12px)]"

export default function DashedReceiptSeparator() {
  const subtotal = lines.reduce((sum, line) => sum + line.amount, 0)
  const tax = subtotal * 0.08

  return (
    <div className="flex w-full max-w-60 flex-col gap-3 border bg-muted/20 p-4 font-sans text-xs">
      <div className="text-center">
        <div className="text-sm font-semibold">DESIGNALI</div>
        <div className="text-muted-foreground">Order #2041 · designali.com</div>
      </div>
      <Separator className={dashed} />
      {lines.map((line) => (
        <div key={line.label} className="flex justify-between">
          <span>{line.label}</span>
          <span>{line.amount.toFixed(2)}</span>
        </div>
      ))}
      <Separator className={dashed} />
      <div className="flex justify-between text-muted-foreground">
        <span>Tax</span>
        <span>{tax.toFixed(2)}</span>
      </div>
      <div className="flex justify-between font-semibold">
        <span>Total</span>
        <span>{(subtotal + tax).toFixed(2)}</span>
      </div>
    </div>
  )
}
