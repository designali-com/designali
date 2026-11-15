import { SettingsIcon } from "lucide-react"

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

const groups = [
  {
    title: "Email",
    items: [
      {
        id: "digest",
        label: "Weekly digest",
        hint: "A summary every Monday",
        on: true,
      },
      {
        id: "mentions",
        label: "Mentions",
        hint: "When someone @mentions you",
        on: true,
      },
    ],
  },
  {
    title: "Push",
    items: [
      {
        id: "comments",
        label: "Comments",
        hint: "Replies on your threads",
        on: false,
      },
      {
        id: "deploys",
        label: "Deploy status",
        hint: "Failures and rollbacks",
        on: true,
      },
    ],
  },
]

export default function NotificationPreferencesSheet() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <SettingsIcon data-icon="inline-start" />
        Notification settings
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Notifications</SheetTitle>
          <SheetDescription>
            Choose how you want to be notified.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-6 px-4">
          {groups.map((group) => (
            <div key={group.title} className="flex flex-col gap-3">
              <span className="text-muted-foreground uppercase">
                {group.title}
              </span>
              {group.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-4"
                >
                  <Label
                    htmlFor={item.id}
                    className="flex flex-col items-start gap-0.5"
                  >
                    <span>{item.label}</span>
                    <span className="font-normal text-muted-foreground">
                      {item.hint}
                    </span>
                  </Label>
                  <Switch id={item.id} defaultChecked={item.on} />
                </div>
              ))}
            </div>
          ))}
        </div>
        <SheetFooter>
          <SheetClose render={<Button />}>Save preferences</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
