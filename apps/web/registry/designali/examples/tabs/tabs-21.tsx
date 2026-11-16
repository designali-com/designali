import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

export default function CalendarViewTabs() {
  return (
    <Tabs defaultValue="week" className="w-full max-w-md">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-1">
          <Button variant="outline" size="icon-sm" aria-label="Previous">
            <ChevronLeftIcon />
          </Button>
          <Button variant="outline" size="icon-sm" aria-label="Next">
            <ChevronRightIcon />
          </Button>
          <span className="ms-1 text-sm font-medium">Nov 17 – 23</span>
        </div>
        <TabsList>
          <TabsTrigger value="day">Day</TabsTrigger>
          <TabsTrigger value="week">Week</TabsTrigger>
          <TabsTrigger value="month">Month</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="day" className="border p-3">
        Mon 17 · 3 events · first at 09:30
      </TabsContent>
      <TabsContent value="week" className="grid grid-cols-7 border">
        {days.map((d, i) => (
          <div key={d} className="border-e p-1.5 text-center last:border-e-0">
            <p className="text-muted-foreground">{d}</p>
            <p className="font-medium">{17 + i}</p>
            {i % 2 === 0 && <div className="mt-1 h-1.5 bg-primary/60" />}
          </div>
        ))}
      </TabsContent>
      <TabsContent value="month" className="border p-3">
        November · 21 events
      </TabsContent>
    </Tabs>
  )
}
