"use client"

import {
  Copy as CopyIcon,
  FileText as FileTextIcon,
  History as HistoryIcon,
  EllipsisVertical as MoreVerticalIcon,
  Pin as PinIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import { Toaster, createToastManager } from "@workspace/ui/components/toast"

const notify = createToastManager()

export default function DropdownActionsToast() {
  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-xs items-center gap-3 border p-3">
        <FileTextIcon className="size-5 text-muted-foreground" />
        <span className="flex-1 truncate text-sm">
          Designali project proposal.docx
        </span>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="More actions"
              />
            }
          >
            <MoreVerticalIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() =>
                notify.add({ description: "A copy was created in My files." })
              }
            >
              <CopyIcon />
              Duplicate
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                notify.add({
                  type: "success",
                  description: "Pinned to the top of the folder.",
                })
              }
            >
              <PinIcon />
              Pin
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                notify.add({
                  type: "info",
                  description: "Version history opened in a new tab.",
                })
              }
            >
              <HistoryIcon />
              Version history
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Toaster>
  )
}
