import {
  Settings as SettingsIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Label } from "@workspace/ui/components/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"
import { Switch } from "@workspace/ui/components/switch"

export default function SettingsSheetSwitches() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <SettingsIcon data-icon="inline-start" />
        Open settings
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Notifications</SheetTitle>
          <SheetDescription>
            Decide how Designali keeps you in the loop.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 px-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="sheet-desktop">Desktop alerts</Label>
            <Switch id="sheet-desktop" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="sheet-mobile">Mobile push</Label>
            <Switch id="sheet-mobile" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="sheet-quiet">Quiet hours (10 PM - 7 AM)</Label>
            <Switch id="sheet-quiet" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose render={<Button />}>Save</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
