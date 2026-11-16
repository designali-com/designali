import {
  CircleCheck as CircleCheckIcon,
  File as FileIcon,
  CloudUpload as UploadCloudIcon,
  X as XIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Progress } from "@workspace/ui/components/progress"

const files = [
  { name: "designali-brand-guidelines.pdf", size: "4.2 MB", progress: 100 },
  { name: "colorful-spheres.mp4", size: "86.1 MB", progress: 64 },
]

export default function FileUploadCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Upload Designali assets</CardTitle>
        <CardDescription>PDF, PNG, SVG or MP4 up to 200 MB.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3">
        <label className="flex cursor-pointer flex-col items-center gap-2 border border-dashed bg-muted/30 px-4 py-6 text-center hover:bg-muted/60">
          <UploadCloudIcon className="size-6 text-muted-foreground" />
          <span className="font-medium">
            Drop files here or click to browse
          </span>
          <input type="file" multiple className="sr-only" />
        </label>
        {files.map((f) => (
          <div key={f.name} className="flex items-center gap-3 border p-2">
            <FileIcon className="size-4 shrink-0 text-muted-foreground" />
            <div className="grid min-w-0 flex-1 gap-1">
              <div className="flex justify-between gap-2">
                <span className="truncate">{f.name}</span>
                <span className="shrink-0 text-muted-foreground">
                  {f.progress === 100 ? f.size : f.progress + "%"}
                </span>
              </div>
              {f.progress < 100 ? (
                <Progress
                  value={f.progress}
                  aria-label={"Uploading " + f.name}
                />
              ) : null}
            </div>
            {f.progress === 100 ? (
              <CircleCheckIcon className="size-4 text-primary" />
            ) : (
              <Button variant="ghost" size="icon-xs" aria-label="Cancel upload">
                <XIcon />
              </Button>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
