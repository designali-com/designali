import { BookOpenIcon, FileIcon, KanbanIcon, MilestoneIcon } from "lucide-react"

import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

const templates = [
  { value: "blank", label: "Blank", icon: FileIcon },
  { value: "kanban", label: "Kanban board", icon: KanbanIcon },
  { value: "roadmap", label: "Roadmap", icon: MilestoneIcon },
  { value: "docs", label: "Docs wiki", icon: BookOpenIcon },
]

export default function ProjectTemplateGrid() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <p className="text-sm font-medium">Start from a template</p>
      <RadioGroup defaultValue="kanban" className="grid grid-cols-2 gap-2">
        {templates.map((t) => (
          <label
            key={t.value}
            htmlFor={"tpl-" + t.value}
            className="relative flex cursor-pointer flex-col gap-3 border p-3 has-data-checked:border-primary has-data-checked:bg-primary/5"
          >
            <RadioGroupItem
              value={t.value}
              id={"tpl-" + t.value}
              className="absolute end-3 top-3"
            />
            <t.icon className="size-5 text-muted-foreground" />
            <span className="text-sm font-medium">{t.label}</span>
          </label>
        ))}
      </RadioGroup>
    </div>
  )
}
