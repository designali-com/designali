import {
  CircleCheckBig as CircleCheckBigIcon,
  Download as DownloadIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"

export default function PaymentSuccessDialog() {
  return (
    <Dialog>
      <DialogTrigger render={<Button />}>Pay $240.00</DialogTrigger>
      <DialogContent showCloseButton={false} className="sm:max-w-xs">
        <div className="flex flex-col items-center gap-3 pt-2 text-center">
          <div className="flex size-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
            <CircleCheckBigIcon className="size-6" />
          </div>
          <DialogHeader className="items-center text-center">
            <DialogTitle>Payment received</DialogTitle>
            <DialogDescription>
              Designali invoice INV-2026-0311 is now paid in full.
            </DialogDescription>
          </DialogHeader>
        </div>
        <div className="flex flex-col gap-1 border bg-muted/40 p-3">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Amount</span>
            <span className="font-medium">$240.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Card</span>
            <span>Visa •••• 4417</span>
          </div>
        </div>
        <DialogFooter className="sm:flex-col">
          <DialogClose render={<Button className="w-full" />}>
            Back to invoices
          </DialogClose>
          <Button variant="ghost" className="w-full">
            <DownloadIcon data-icon="inline-start" />
            Download receipt
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
