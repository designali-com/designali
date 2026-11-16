import {
  History as HistoryIcon,
  Layers as LayersIcon,
  MessageSquare as MessageSquareIcon,
  Shapes as ShapesIcon,
} from "@designali/icons"

import { Skeleton } from "@workspace/ui/components/skeleton"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

const tools = [
  { value: "layers", label: "Layers", icon: LayersIcon },
  { value: "assets", label: "Assets", icon: ShapesIcon },
  { value: "comments", label: "Comments", icon: MessageSquareIcon },
  { value: "history", label: "History", icon: HistoryIcon },
]

export default function VerticalIconRailTabs() {
  return (
    <Tabs
      defaultValue="layers"
      orientation="vertical"
      className="h-56 w-full max-w-xs gap-0 border"
    >
      <TabsList className="h-full justify-start border-e">
        {tools.map((t) => (
          <TabsTrigger
            key={t.value}
            value={t.value}
            aria-label={t.label}
            className="size-8 flex-none justify-center p-0"
          >
            <t.icon />
          </TabsTrigger>
        ))}
      </TabsList>
      {tools.map((t) => (
        <TabsContent key={t.value} value={t.value} className="p-3">
          <p className="mb-2 font-medium">{t.label}</p>
          <div className="flex flex-col gap-1.5">
            <Skeleton className="h-3 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
            <Skeleton className="h-3 w-2/3" />
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}
