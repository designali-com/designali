import { Separator } from "@workspace/ui/components/separator"
import { Spinner } from "@workspace/ui/components/spinner"

export default function InlineCalculatingText() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2 border p-4 text-sm">
      <div className="flex justify-between">
        <span className="text-muted-foreground">Subtotal</span>
        <span className="tabular-nums">$132.00</span>
      </div>
      <div className="flex justify-between">
        <span className="text-muted-foreground">Shipping</span>
        <span className="flex items-center gap-1.5 text-muted-foreground">
          <Spinner className="size-3" />
          Calculating
        </span>
      </div>
      <div className="flex justify-between">
        <span className="text-muted-foreground">Tax</span>
        <span className="flex items-center gap-1.5 text-muted-foreground">
          <Spinner className="size-3" />
          Calculating
        </span>
      </div>
      <Separator className="my-1" />
      <div className="flex justify-between font-medium">
        <span>Total</span>
        <span className="text-muted-foreground">--</span>
      </div>
    </div>
  )
}
