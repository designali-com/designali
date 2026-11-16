import {
  File as FileIcon,
} from "@designali/icons"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

const files = [
  "designali-brand-identity-guidelines-final-v3.pdf",
  "designali-client-website-project-brief-batch.docx",
  "designali-brand-refresh-moodboard-exploration.fig",
]

export default function TruncatedFileNameTooltip() {
  return (
    <TooltipProvider>
      <ul className="flex w-full max-w-60 flex-col divide-y border text-sm">
        {files.map((f) => (
          <li key={f} className="flex items-center gap-2 px-3 py-2">
            <FileIcon className="size-4 shrink-0 text-muted-foreground" />
            <Tooltip>
              <TooltipTrigger
                render={<span tabIndex={0} className="min-w-0 truncate" />}
              >
                {f}
              </TooltipTrigger>
              <TooltipContent className="break-all">{f}</TooltipContent>
            </Tooltip>
          </li>
        ))}
      </ul>
    </TooltipProvider>
  )
}
