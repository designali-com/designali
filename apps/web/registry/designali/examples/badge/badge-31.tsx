import { Badge } from "@workspace/ui/components/badge"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

const tabs = [
  { value: "open", label: "Open", count: 14 },
  { value: "review", label: "In review", count: 3 },
  { value: "closed", label: "Closed", count: 128 },
]

export default function TabsWithCountBadges() {
  return (
    <Tabs defaultValue="open" className="w-full max-w-md">
      <TabsList>
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
            <Badge
              variant="secondary"
              className="h-4 px-1.5 text-[10px] tabular-nums"
            >
              {tab.count}
            </Badge>
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent
          key={tab.value}
          value={tab.value}
          className="border p-4 text-sm text-muted-foreground"
        >
          {tab.count} {tab.label.toLowerCase()} pull requests.
        </TabsContent>
      ))}
    </Tabs>
  )
}
