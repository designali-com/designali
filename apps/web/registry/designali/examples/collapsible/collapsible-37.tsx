import {
  ChevronDown as ChevronDownIcon,
  CircleCheck as CircleCheckIcon,
  File as FileIcon,
  Upload as UploadIcon,
  X as XIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"
import { Progress } from "@workspace/ui/components/progress"

const files = [
  { name: "designali-brand-kit.zip", size: "48 MB", progress: 100 },
  { name: "colorful-spheres.mp4", size: "212 MB", progress: 64 },
  { name: "case-study-dalim.docx", size: "1.2 MB", progress: 12 },
]

export default function UploadQueueWidget() {
  const done = files.filter((f) => f.progress === 100).length
  return (
    <Collapsible
      defaultOpen
      className="w-full max-w-xs border bg-background shadow-md"
    >
      <div className="flex items-center gap-2 bg-muted px-3 py-2">
        <UploadIcon className="size-4" />
        <span className="flex-1 text-sm font-medium">
          Uploading {files.length - done} of {files.length}
        </span>
        <CollapsibleTrigger
          render={
            <Button
              variant="ghost"
              size="icon-xs"
              aria-label="Minimise uploads"
            >
              <ChevronDownIcon className="transition-transform group-data-panel-open/button:rotate-180" />
            </Button>
          }
        />
        <Button variant="ghost" size="icon-xs" aria-label="Close">
          <XIcon />
        </Button>
      </div>
      <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
        <ul className="divide-y">
          {files.map((file) => (
            <li key={file.name} className="flex items-center gap-3 px-3 py-2.5">
              <FileIcon className="size-4 text-muted-foreground" />
              <div className="min-w-0 flex-1 space-y-1">
                <p className="truncate text-xs font-medium">{file.name}</p>
                <Progress value={file.progress} />
              </div>
              {file.progress === 100 ? (
                <CircleCheckIcon className="size-4 text-emerald-600" />
              ) : (
                <span className="text-[11px] text-muted-foreground">
                  {file.progress}%
                </span>
              )}
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  )
}
