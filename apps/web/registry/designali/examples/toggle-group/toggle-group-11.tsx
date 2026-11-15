import { EyeIcon, LockIcon, MessageSquareIcon, PencilIcon } from "lucide-react"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

export default function DisabledToggleGroup() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <ToggleGroup
        disabled
        variant="outline"
        spacing={0}
        defaultValue={["edit"]}
      >
        <ToggleGroupItem value="view">
          <EyeIcon data-icon="inline-start" />
          View
        </ToggleGroupItem>
        <ToggleGroupItem value="edit">
          <PencilIcon data-icon="inline-start" />
          Edit
        </ToggleGroupItem>
        <ToggleGroupItem value="suggest">
          <MessageSquareIcon data-icon="inline-start" />
          Suggest
        </ToggleGroupItem>
      </ToggleGroup>
      <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <LockIcon className="size-3" />
        Locked while Priya Raman is editing.
      </p>
    </div>
  )
}
