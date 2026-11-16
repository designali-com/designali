import { Button } from "@workspace/ui/components/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"

export function DialogNoCloseButton() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline">Designali Newsletter</Button>} />
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>You&apos;re on the Designali list</DialogTitle>
          <DialogDescription>
            Ali Imam will send new templates, blocks and icons from
            designali.com to your inbox. Press Esc or click outside to close.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}