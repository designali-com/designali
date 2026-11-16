"use client"

import * as React from "react"
import {
  BellRing as BellRingIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@workspace/ui/components/field"
import { Switch } from "@workspace/ui/components/switch"

const groups = [
  {
    title: "Activity",
    items: ["Comments on my posts", "New followers", "Mentions"],
  },
  { title: "Account", items: ["Security alerts", "Billing receipts"] },
]

export default function NotificationPreferencesDrawer() {
  const [paused, setPaused] = React.useState(false)

  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger render={<Button variant="outline" />}>
        <BellRingIcon data-icon="inline-start" />
        Notification preferences
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Notifications</DrawerTitle>
          <DrawerDescription>
            Push notifications on this device
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-1 flex-col gap-5 overflow-y-auto p-4">
          <Field orientation="horizontal" className="border bg-muted/40 p-3">
            <FieldContent>
              <FieldLabel htmlFor="np-pause">Pause all</FieldLabel>
              <FieldDescription>Mute everything for 8 hours.</FieldDescription>
            </FieldContent>
            <Switch
              id="np-pause"
              checked={paused}
              onCheckedChange={setPaused}
            />
          </Field>
          {groups.map((group) => (
            <FieldSet key={group.title} disabled={paused}>
              <FieldLegend variant="label">{group.title}</FieldLegend>
              <FieldGroup className="gap-3">
                {group.items.map((item) => (
                  <Field
                    key={item}
                    orientation="horizontal"
                    data-disabled={paused}
                  >
                    <FieldLabel htmlFor={"np-" + item}>{item}</FieldLabel>
                    <Switch
                      id={"np-" + item}
                      defaultChecked={item !== "New followers"}
                      disabled={paused}
                    />
                  </Field>
                ))}
              </FieldGroup>
            </FieldSet>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  )
}
