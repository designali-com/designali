import {
  Receipt as ReceiptIcon,
} from "@designali/icons"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@workspace/ui/components/alert-dialog"
import { Button } from "@workspace/ui/components/button"
import { Separator } from "@workspace/ui/components/separator"

const lines = [
  { label: "Design Agency template", value: "$89.00" },
  { label: "Extended license", value: "$6.50" },
  { label: "Tax", value: "$7.64" },
]

export default function RefundOrderAmount() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="secondary" />}>
        <ReceiptIcon data-icon="inline-start" />
        Refund order #5821
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Issue a full refund?</AlertDialogTitle>
          <AlertDialogDescription>
            The designali.com customer will be refunded to their original payment
            method.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <dl className="flex flex-col gap-1.5 border p-3 text-sm">
          {lines.map((line) => (
            <div key={line.label} className="flex justify-between">
              <dt className="text-muted-foreground">{line.label}</dt>
              <dd className="tabular-nums">{line.value}</dd>
            </div>
          ))}
          <Separator className="my-1" />
          <div className="flex justify-between font-medium">
            <dt>Refund total</dt>
            <dd className="tabular-nums">$103.14</dd>
          </div>
        </dl>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Refund $103.14</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
