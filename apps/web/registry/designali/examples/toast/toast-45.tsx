"use client"

import { ArchiveRestoreIcon } from "lucide-react"

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
import { Toaster, createToastManager } from "@workspace/ui/components/toast"

const notify = createToastManager()

export default function ConfirmDialogThenToast() {
  return (
    <Toaster toastManager={notify}>
      <Dialog>
        <DialogTrigger render={<Button variant="outline" />}>
          <ArchiveRestoreIcon data-icon="inline-start" />
          Restore project
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Restore &quot;Helios&quot;?</DialogTitle>
            <DialogDescription>
              The project and its 14 boards will reappear for all members.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose render={<Button variant="outline" />}>
              Cancel
            </DialogClose>
            <DialogClose
              render={<Button />}
              onClick={() =>
                notify.add({
                  type: "success",
                  title: "Project restored",
                  description: "Helios is back in your sidebar.",
                })
              }
            >
              Restore
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Toaster>
  )
}
