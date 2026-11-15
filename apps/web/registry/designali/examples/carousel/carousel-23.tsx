import { PlusIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@workspace/ui/components/carousel"

const columns = [
  { title: "Backlog", cards: ["Audit pricing page", "Refresh empty states"] },
  {
    title: "In progress",
    cards: ["Billing settings revamp", "Mobile nav", "Usage alerts"],
  },
  { title: "Review", cards: ["Invoice PDF layout"] },
  { title: "Done", cards: ["Dark mode tokens", "Team invites"] },
]

export default function KanbanColumnsSwipe() {
  return (
    <Carousel
      opts={{ align: "start" }}
      className="w-full max-w-[17rem] sm:max-w-md"
    >
      <CarouselContent className="-ms-3">
        {columns.map((column) => (
          <CarouselItem
            key={column.title}
            className="basis-5/6 ps-3 sm:basis-1/2"
          >
            <div className="flex h-full flex-col gap-2 bg-muted/50 p-2">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-medium">{column.title}</span>
                <Badge variant="secondary">{column.cards.length}</Badge>
              </div>
              {column.cards.map((card) => (
                <div
                  key={card}
                  className="border bg-background p-2 text-xs shadow-xs"
                >
                  {card}
                </div>
              ))}
              <Button variant="ghost" size="xs" className="justify-start">
                <PlusIcon data-icon="inline-start" />
                Add card
              </Button>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
