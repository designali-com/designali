import {
  Settings as SettingsIcon,
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
import { Field, FieldLabel } from "@workspace/ui/components/field"
import { Switch } from "@workspace/ui/components/switch"

export default function NestedConfirmDialog() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        <SettingsIcon data-icon="inline-start" />
        Integration settings
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Slack integration</DialogTitle>
          <DialogDescription>
            Connected to #designali-updates by Ali Imam.
          </DialogDescription>
        </DialogHeader>
        <Field orientation="horizontal">
          <FieldLabel htmlFor="slack-digest">Send daily digest</FieldLabel>
          <Switch id="slack-digest" defaultChecked />
        </Field>
        <Field orientation="horizontal">
          <FieldLabel htmlFor="slack-mentions">Notify on mentions</FieldLabel>
          <Switch id="slack-mentions" />
        </Field>
        <DialogFooter className="sm:justify-between">
          <Dialog>
            <DialogTrigger render={<Button variant="destructive" />}>
              Disconnect
            </DialogTrigger>
            <DialogContent showCloseButton={false} className="sm:max-w-xs">
              <DialogHeader>
                <DialogTitle>Disconnect Slack?</DialogTitle>
                <DialogDescription>
                  Notifications to #designali-updates will stop immediately.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose render={<Button variant="outline" />}>
                  Keep
                </DialogClose>
                <DialogClose render={<Button variant="destructive" />}>
                  Disconnect
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <DialogClose render={<Button />}>Done</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
