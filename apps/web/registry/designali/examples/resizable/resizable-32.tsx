import { NotebookIcon } from "lucide-react"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"
import { cn } from "@workspace/ui/lib/utils"

const notebooks = ["Personal", "Work", "Recipes", "Travel"]
const notes = [
  { title: "Lisbon itinerary", preview: "Day 1: Alfama walk, tram 28..." },
  { title: "Packing list", preview: "Adapters, light jacket, sandals" },
  { title: "Restaurants", preview: "Taberna da Rua, Cervejaria..." },
]

export default function NotesAppThreePane() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-72 w-full max-w-2xl border"
    >
      <ResizablePanel defaultSize="20%" minSize="14%">
        <div className="flex h-full flex-col gap-0.5 bg-muted/40 p-2 text-xs">
          {notebooks.map((nb) => (
            <span
              key={nb}
              className={cn(
                "flex items-center gap-1.5 px-2 py-1",
                nb === "Travel" && "bg-background font-medium"
              )}
            >
              <NotebookIcon className="size-3.5 shrink-0" />
              <span className="truncate">{nb}</span>
            </span>
          ))}
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="32%" minSize="22%">
        <div className="flex h-full flex-col divide-y">
          {notes.map((note, i) => (
            <div
              key={note.title}
              className={cn("p-3", i === 0 && "bg-muted/50")}
            >
              <p className="truncate text-xs font-medium">{note.title}</p>
              <p className="truncate text-[11px] text-muted-foreground">
                {note.preview}
              </p>
            </div>
          ))}
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="48%" minSize="30%">
        <div className="flex h-full flex-col gap-2 p-4">
          <h3 className="text-sm font-semibold">Lisbon itinerary</h3>
          <ul className="flex list-disc flex-col gap-1 pl-4 text-xs">
            <li>Day 1: Alfama walk, tram 28, sunset at Miradouro</li>
            <li>Day 2: Belem and the riverside</li>
            <li>Day 3: Day trip to Sintra</li>
          </ul>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
