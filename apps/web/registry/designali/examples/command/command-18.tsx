import {
  CodeIcon,
  Heading1Icon,
  Heading2Icon,
  ListIcon,
  ListTodoIcon,
  MinusIcon,
  QuoteIcon,
  TypeIcon,
} from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command"

const blocks = [
  {
    group: "Basic blocks",
    items: [
      { label: "Text", hint: "Start writing with plain text", icon: TypeIcon },
      { label: "Heading 1", hint: "Big section heading", icon: Heading1Icon },
      {
        label: "Heading 2",
        hint: "Medium section heading",
        icon: Heading2Icon,
      },
      { label: "Bulleted list", hint: "Create a simple list", icon: ListIcon },
      {
        label: "To-do list",
        hint: "Track tasks with checkboxes",
        icon: ListTodoIcon,
      },
    ],
  },
  {
    group: "Media",
    items: [
      { label: "Code block", hint: "Capture a code snippet", icon: CodeIcon },
      { label: "Quote", hint: "Highlight a quotation", icon: QuoteIcon },
      { label: "Divider", hint: "Visually separate sections", icon: MinusIcon },
    ],
  },
]

export default function EditorSlashCommands() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-1">
      <p className="px-1 text-sm">
        Meeting notes <span className="text-muted-foreground">/</span>
      </p>
      <Command className="border shadow-md">
        <CommandInput placeholder="Filter blocks..." autoFocus />
        <CommandList className="max-h-64">
          <CommandEmpty>No blocks match.</CommandEmpty>
          {blocks.map((section) => (
            <CommandGroup key={section.group} heading={section.group}>
              {section.items.map((block) => (
                <CommandItem key={block.label} value={block.label}>
                  <div className="flex size-8 items-center justify-center border bg-background">
                    <block.icon />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium">{block.label}</span>
                    <span className="text-[11px] text-muted-foreground">
                      {block.hint}
                    </span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </Command>
    </div>
  )
}
