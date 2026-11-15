import { MailIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

const folders = [
  {
    value: "all",
    label: "All",
    count: 128,
    items: [
      "Quarterly review moved to Friday",
      "Design crit notes",
      "Invoice #2041 paid",
    ],
  },
  {
    value: "unread",
    label: "Unread",
    count: 6,
    items: ["Design crit notes", "Can you check the launch copy?"],
  },
  {
    value: "archived",
    label: "Archived",
    count: 940,
    items: ["Offsite logistics", "Welcome to the team"],
  },
]

export default function InboxLineTabsWithCounts() {
  return (
    <Tabs defaultValue="unread" className="w-full max-w-sm">
      <TabsList variant="line">
        {folders.map((folder) => (
          <TabsTrigger key={folder.value} value={folder.value}>
            {folder.label}
            <Badge variant="secondary" className="px-1 tabular-nums">
              {folder.count}
            </Badge>
          </TabsTrigger>
        ))}
      </TabsList>
      {folders.map((folder) => (
        <TabsContent
          key={folder.value}
          value={folder.value}
          className="divide-y border"
        >
          {folder.items.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 px-3 py-2.5 text-xs"
            >
              <MailIcon className="size-3.5 text-muted-foreground" />
              <span className="truncate">{item}</span>
            </div>
          ))}
        </TabsContent>
      ))}
    </Tabs>
  )
}
