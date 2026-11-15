import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Label } from "@workspace/ui/components/label"
import { ScrollArea } from "@workspace/ui/components/scroll-area"
import { Switch } from "@workspace/ui/components/switch"

const prefs = [
  ["Mentions", "When someone @mentions you"],
  ["Comments", "Replies on your posts"],
  ["Assignments", "Tasks assigned to you"],
  ["Due dates", "Reminders 24h before due"],
  ["Status changes", "Tasks you follow change status"],
  ["Weekly digest", "Summary every Monday"],
  ["Product updates", "New features and improvements"],
  ["Security alerts", "New sign-ins and password changes"],
  ["Billing", "Receipts and failed payments"],
]

export default function NotificationPreferences() {
  return (
    <Card className="w-full max-w-sm gap-0 py-0">
      <CardHeader className="border-b py-4">
        <CardTitle>Email notifications</CardTitle>
        <CardDescription>Decide what lands in your inbox.</CardDescription>
      </CardHeader>
      <ScrollArea className="h-64">
        <div className="flex flex-col divide-y">
          {prefs.map(([title, desc], i) => (
            <div
              key={title}
              className="flex items-center justify-between gap-3 px-4 py-3"
            >
              <div className="min-w-0">
                <Label htmlFor={"pref-" + i} className="text-xs">
                  {title}
                </Label>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
              <Switch
                id={"pref-" + i}
                defaultChecked={i % 3 !== 2}
                disabled={title === "Security alerts"}
              />
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  )
}
