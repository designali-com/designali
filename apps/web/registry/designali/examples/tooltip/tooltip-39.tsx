import { DownloadIcon, FileIcon, PencilIcon, Trash2Icon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

const files = [
  { name: "Invoice-0423.pdf", size: "184 KB" },
  { name: "Team-photo.png", size: "2.1 MB" },
]

export default function FileRowActionTooltips() {
  return (
    <TooltipProvider>
      <div className="flex w-full max-w-sm flex-col divide-y border">
        {files.map((f) => (
          <div key={f.name} className="group flex items-center gap-3 px-3 py-2">
            <FileIcon className="size-4 text-muted-foreground" />
            <div className="flex min-w-0 flex-1 flex-col">
              <span className="truncate text-sm">{f.name}</span>
              <span className="text-xs text-muted-foreground">{f.size}</span>
            </div>
            <div className="flex gap-0.5 opacity-60 group-hover:opacity-100">
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button
                      variant="ghost"
                      size="icon-xs"
                      aria-label="Download"
                    />
                  }
                >
                  <DownloadIcon />
                </TooltipTrigger>
                <TooltipContent>Download</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button
                      variant="ghost"
                      size="icon-xs"
                      aria-label="Rename"
                    />
                  }
                >
                  <PencilIcon />
                </TooltipTrigger>
                <TooltipContent>Rename</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button
                      variant="ghost"
                      size="icon-xs"
                      aria-label="Move to trash"
                    />
                  }
                >
                  <Trash2Icon />
                </TooltipTrigger>
                <TooltipContent>Move to trash</TooltipContent>
              </Tooltip>
            </div>
          </div>
        ))}
      </div>
    </TooltipProvider>
  )
}
