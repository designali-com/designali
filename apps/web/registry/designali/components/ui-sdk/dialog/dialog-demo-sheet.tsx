"use client"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/designali/ui/ui-sdk/dialog"

// presentation="auto" shows a swipeable bottom sheet on small touch screens
// and a centered dialog everywhere else.
export function DialogDemoSheet() {
  return (
    <Dialog presentation="auto">
      <DialogTrigger render={<Button variant="outline" />}>
        Edit profile
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile. Save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-3">
          <div className="grid gap-2">
            <Label htmlFor="ui-sdk-sheet-name">Name</Label>
            <Input id="ui-sdk-sheet-name" defaultValue="Hollis Grant" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="ui-sdk-sheet-username">Username</Label>
            <Input id="ui-sdk-sheet-username" defaultValue="@hollis" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
          <DialogClose render={<Button />} value="save">
            Save changes
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
