import {
  Bell as BellIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

const feeds = [
  {
    value: "all",
    label: "All",
    unread: true,
    items: ["Ali approved your Designali invoice", "designali.com build #882 failed on main"],
  },
  {
    value: "mentions",
    label: "Mentions",
    unread: true,
    items: ["Sara mentioned you in Templates launch plan"],
  },
  {
    value: "system",
    label: "System",
    unread: false,
    items: ["designali.com maintenance scheduled for Sunday"],
  },
]

export default function NotificationFeedTabs() {
  return (
    <Tabs defaultValue="all" className="w-full max-w-sm">
      <div className="flex items-center justify-between">
        <TabsList>
          {feeds.map((f) => (
            <TabsTrigger key={f.value} value={f.value}>
              {f.label}
              {f.unread && (
                <span
                  className="size-1.5 rounded-full bg-primary"
                  aria-label="unread"
                />
              )}
            </TabsTrigger>
          ))}
        </TabsList>
        <Button variant="ghost" size="xs">
          Mark all read
        </Button>
      </div>
      {feeds.map((f) => (
        <TabsContent
          key={f.value}
          value={f.value}
          className="flex flex-col gap-2"
        >
          {f.items.map((item) => (
            <div key={item} className="flex gap-2 border p-2.5">
              <BellIcon className="mt-0.5 size-3.5 text-muted-foreground" />
              <span>{item}</span>
            </div>
          ))}
        </TabsContent>
      ))}
    </Tabs>
  )
}
