import { Badge } from "@workspace/ui/components/badge"
import { ScrollArea, ScrollBar } from "@workspace/ui/components/scroll-area"

const columns = [
  {
    title: "Backlog",
    cards: [
      "Audit icon names",
      "Pricing FAQ",
      "Referral program brief",
      "Update @designali/logos",
      "Localize checkout",
    ],
  },
  {
    title: "In progress",
    cards: ["Pricing page redesign", "Marquee component", "Mobile nav polish"],
  },
  { title: "Review", cards: ["Bento blocks", "Number Counter"] },
  {
    title: "Done",
    cards: ["Dark mode", "Gauge component", "Dot Pattern", "Grid Pattern"],
  },
]

export default function KanbanBoardScroll() {
  return (
    <ScrollArea className="w-full max-w-lg border bg-muted/30">
      <div className="flex w-max gap-3 p-3">
        {columns.map((col) => (
          <div
            key={col.title}
            className="flex w-44 flex-col border bg-background"
          >
            <div className="flex items-center justify-between border-b px-2 py-1.5 text-xs font-medium">
              {col.title}
              <Badge variant="secondary">{col.cards.length}</Badge>
            </div>
            <ScrollArea className="h-44">
              <div className="flex flex-col gap-2 p-2">
                {col.cards.map((card) => (
                  <div key={card} className="border p-2 text-xs shadow-xs">
                    {card}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
