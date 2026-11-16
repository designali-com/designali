import {
  Notebook as NotebookIcon,
} from "@designali/icons"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"
import { cn } from "@workspace/ui/lib/utils"

const notebooks = ["Personal", "Work", "Recipes", "Travel"]
const notes = [
  { title: "Client project notes", preview: "Day 1: Brand discovery, moodboards..." },
  { title: "Deliverables", preview: "Logo, Figma file, Next.js site" },
  { title: "Stack", preview: "Next.js, Tailwind CSS, Vercel..." },
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
          <h3 className="text-sm font-semibold">Client project notes</h3>
          <ul className="flex list-disc flex-col gap-1 pl-4 text-xs">
            <li>Day 1: Brand discovery and moodboards</li>
            <li>Day 2: UI/UX design in Figma</li>
            <li>Day 3: Build and deploy with Next.js</li>
          </ul>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
