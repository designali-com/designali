import * as React from "react"

import { Label } from "@workspace/ui/components/label"
import { Separator } from "@workspace/ui/components/separator"
import { Switch } from "@workspace/ui/components/switch"

const settings = [
  {
    id: "digest",
    title: "Weekly digest",
    description: "A summary every Monday morning",
    on: true,
  },
  {
    id: "mentions",
    title: "Mentions",
    description: "When someone tags you",
    on: true,
  },
  {
    id: "marketing",
    title: "Designali drops",
    description: "New blocks, templates and icons",
    on: false,
  },
]

export default function SettingsRowsSeparated() {
  return (
    <div className="w-full max-w-sm border">
      {settings.map((setting, index) => (
        <React.Fragment key={setting.id}>
          {index > 0 && <Separator />}
          <div className="flex items-center justify-between gap-4 p-3">
            <div className="flex flex-col">
              <Label htmlFor={setting.id}>{setting.title}</Label>
              <span className="text-xs text-muted-foreground">
                {setting.description}
              </span>
            </div>
            <Switch id={setting.id} defaultChecked={setting.on} />
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}
