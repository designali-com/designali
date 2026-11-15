import {
  CopyIcon,
  FolderInputIcon,
  PencilIcon,
  Share2Icon,
  Trash2Icon,
} from "lucide-react"

import { Separator } from "@workspace/ui/components/separator"

const actions = [
  { label: "Rename", icon: PencilIcon },
  { label: "Duplicate", icon: CopyIcon },
  { label: "Move to folder", icon: FolderInputIcon },
  { label: "Share", icon: Share2Icon },
]

export default function ActionListDangerZone() {
  return (
    <div className="flex w-full max-w-52 flex-col border p-1 text-sm">
      {actions.map((action) => (
        <button
          key={action.label}
          type="button"
          className="flex items-center gap-2 px-2 py-1.5 text-start hover:bg-muted"
        >
          <action.icon className="size-4 text-muted-foreground" />
          {action.label}
        </button>
      ))}
      <Separator className="my-1" />
      <button
        type="button"
        className="flex items-center gap-2 px-2 py-1.5 text-start text-destructive hover:bg-destructive/10"
      >
        <Trash2Icon className="size-4" />
        Delete
      </button>
    </div>
  )
}
