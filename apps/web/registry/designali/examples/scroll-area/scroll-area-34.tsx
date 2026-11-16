import { ScrollArea, ScrollBar } from "@workspace/ui/components/scroll-area"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

const tabs = [
  "Overview",
  "Analytics",
  "Reports",
  "Customers",
  "Invoices",
  "Integrations",
  "Webhooks",
  "Audit log",
  "Settings",
]

export default function OverflowingTabsBar() {
  return (
    <Tabs defaultValue="Overview" className="w-full max-w-md">
      <ScrollArea className="w-full">
        <TabsList className="mb-3 w-max">
          {tabs.map((t) => (
            <TabsTrigger key={t} value={t}>
              {t}
            </TabsTrigger>
          ))}
        </TabsList>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      {tabs.map((t) => (
        <TabsContent
          key={t}
          value={t}
          className="border p-4 text-xs text-muted-foreground"
        >
          {t} content for the Designali workspace.
        </TabsContent>
      ))}
    </Tabs>
  )
}
