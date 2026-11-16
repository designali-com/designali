import {
  ChevronDown as ChevronDownIcon,
  Settings2 as Settings2Icon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"
import { Label } from "@workspace/ui/components/label"
import { Switch } from "@workspace/ui/components/switch"

const advanced = [
  { id: "digest", label: "Daily digest", hint: "One summary email at 8:00 AM" },
  {
    id: "mentions",
    label: "Only mentions",
    hint: "Mute everything except direct mentions",
  },
  {
    id: "quiet",
    label: "Quiet hours",
    hint: "Pause push notifications from 10 PM to 7 AM",
  },
]

export default function AdvancedNotificationOptions() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>Choose how you hear about activity.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="email-notif">Email notifications</Label>
          <Switch id="email-notif" defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="push-notif">Push notifications</Label>
          <Switch id="push-notif" />
        </div>
        <Collapsible>
          <CollapsibleTrigger
            render={<Button variant="outline" size="sm" className="w-full" />}
          >
            <Settings2Icon data-icon="inline-start" />
            Advanced options
            <ChevronDownIcon className="ml-auto transition-transform group-data-panel-open/button:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
            <div className="flex flex-col gap-4 pt-4">
              {advanced.map((option) => (
                <div
                  key={option.id}
                  className="flex items-start justify-between gap-4"
                >
                  <div className="grid gap-0.5">
                    <Label htmlFor={option.id}>{option.label}</Label>
                    <p className="text-xs text-muted-foreground">
                      {option.hint}
                    </p>
                  </div>
                  <Switch id={option.id} size="sm" />
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  )
}
