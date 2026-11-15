import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

const agenda = {
  day1: [
    ["09:00", "Opening keynote", "Main hall"],
    ["10:30", "Scaling Postgres", "Room B"],
  ],
  day2: [
    ["09:30", "Design tokens at scale", "Room A"],
    ["14:00", "Edge rendering", "Main hall"],
  ],
  day3: [
    ["10:00", "Hiring for craft", "Room C"],
    ["16:00", "Closing panel", "Main hall"],
  ],
}

export default function ConferenceScheduleTabs() {
  return (
    <Tabs defaultValue="day1" className="w-full max-w-sm">
      <TabsList className="h-auto w-full">
        {["day1", "day2", "day3"].map((d, i) => (
          <TabsTrigger key={d} value={d} className="flex-col gap-0 py-1">
            <span>Day {i + 1}</span>
            <span className="text-[10px] text-muted-foreground">
              Mar {12 + i}
            </span>
          </TabsTrigger>
        ))}
      </TabsList>
      {Object.entries(agenda).map(([key, talks]) => (
        <TabsContent key={key} value={key} className="divide-y border">
          {talks.map(([time, title, room]) => (
            <div key={title} className="flex gap-3 px-3 py-2.5">
              <span className="w-10 font-mono text-muted-foreground">
                {time}
              </span>
              <div>
                <p className="font-medium">{title}</p>
                <p className="text-muted-foreground">{room}</p>
              </div>
            </div>
          ))}
        </TabsContent>
      ))}
    </Tabs>
  )
}
