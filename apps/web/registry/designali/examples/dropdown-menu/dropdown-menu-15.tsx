import {
  CodeIcon,
  Heading1Icon,
  ListChecksIcon,
  ListIcon,
  MegaphoneIcon,
  PlusIcon,
  TableIcon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

const blocks = [
  { label: "Heading", hint: "Big section title", icon: Heading1Icon },
  { label: "Bulleted list", hint: "Simple unordered list", icon: ListIcon },
  {
    label: "To-do list",
    hint: "Track tasks with checkboxes",
    icon: ListChecksIcon,
  },
  { label: "Code block", hint: "Syntax highlighted snippet", icon: CodeIcon },
  { label: "Table", hint: "Rows and columns of data", icon: TableIcon },
  { label: "Callout", hint: "Make text stand out", icon: MegaphoneIcon },
]

export default function EditorInsertBlockMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" size="sm" />}>
        <PlusIcon data-icon="inline-start" />
        Insert
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Basic blocks</DropdownMenuLabel>
          {blocks.map((block) => (
            <DropdownMenuItem key={block.label} className="gap-3">
              <span className="flex size-8 items-center justify-center border bg-background">
                <block.icon />
              </span>
              <span className="grid">
                <span className="font-medium">{block.label}</span>
                <span className="text-muted-foreground">{block.hint}</span>
              </span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
