import {
  CircleCheckIcon,
  CloudUploadIcon,
  FileIcon,
  UploadIcon,
  XIcon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import { Progress } from "@workspace/ui/components/progress"

const files = [
  { name: "hero-banner.fig", size: "4.2 MB", progress: 100 },
  { name: "pitch-deck-final.pdf", size: "12.8 MB", progress: 64 },
  { name: "brand-voice.docx", size: "860 KB", progress: 18 },
]

export default function UploadFilesDialog() {
  return (
    <Dialog>
      <DialogTrigger render={<Button />}>
        <UploadIcon data-icon="inline-start" />
        Upload files
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Upload to Shared Drive</DialogTitle>
          <DialogDescription>Max 100 MB per file.</DialogDescription>
        </DialogHeader>
        <label className="flex cursor-pointer flex-col items-center gap-2 border border-dashed bg-muted/30 px-4 py-8 text-center hover:bg-muted/60">
          <CloudUploadIcon className="size-6 text-muted-foreground" />
          <span className="font-medium">
            Drop files here or click to browse
          </span>
          <span className="text-muted-foreground">
            PDF, DOCX, FIG, PNG up to 100 MB
          </span>
          <input type="file" multiple className="sr-only" />
        </label>
        <div className="flex flex-col gap-3">
          {files.map((file) => (
            <div key={file.name} className="flex items-center gap-3">
              <FileIcon className="size-4 shrink-0 text-muted-foreground" />
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <div className="flex justify-between gap-2">
                  <span className="truncate">{file.name}</span>
                  <span className="shrink-0 text-muted-foreground">
                    {file.progress === 100 ? file.size : file.progress + "%"}
                  </span>
                </div>
                <Progress value={file.progress} />
              </div>
              {file.progress === 100 ? (
                <CircleCheckIcon className="size-4 shrink-0" />
              ) : (
                <Button
                  variant="ghost"
                  size="icon-xs"
                  aria-label={"Cancel " + file.name}
                >
                  <XIcon />
                </Button>
              )}
            </div>
          ))}
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Close</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
