import { PlusIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const notes = [
  "Grocery run",
  "Call the landlord",
  "Book dentist",
  "Gift ideas for Sam",
]

export default function FloatingActionButton() {
  return (
    <div className="relative h-72 w-full max-w-[260px] overflow-hidden border bg-background">
      <div className="border-b px-4 py-3 text-sm font-semibold">Notes</div>
      <ul className="divide-y">
        {notes.map((note) => (
          <li key={note} className="px-4 py-3 text-xs">
            {note}
          </li>
        ))}
      </ul>
      <Button
        size="icon-lg"
        aria-label="New note"
        className="absolute right-4 bottom-4 size-12 rounded-full shadow-lg"
      >
        <PlusIcon className="size-5" />
      </Button>
    </div>
  )
}
