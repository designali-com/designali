import {
  ChevronDown as ChevronDownIcon,
  CloudUpload as CloudUploadIcon,
  ExternalLink as ExternalLinkIcon,
  FileVideoCamera as FileVideoIcon,
  Pause as PauseIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"
import { Progress } from "@workspace/ui/components/progress"

const queue = [
  { name: "colorful-spheres.mp4", size: "1.2 GB", progress: 72 },
  { name: "abstract-fluid.mov", size: "3.4 GB", progress: 24 },
  { name: "brand-reel-audio.wav", size: "180 MB", progress: 100 },
]

export default function UploadQueueNonModalDrawer() {
  return (
    <Drawer modal={false} disablePointerDismissal>
      <DrawerTrigger render={<Button variant="outline" />}>
        <CloudUploadIcon data-icon="inline-start" />
        Uploads (2 active)
      </DrawerTrigger>
      <DrawerContent className="shadow-lg">
        <div className="mx-auto flex w-full max-w-md flex-col">
          <DrawerHeader className="flex-row items-center justify-between text-start">
            <div>
              <DrawerTitle>Uploading 2 of 3</DrawerTitle>
              <DrawerDescription>About 6 minutes left</DrawerDescription>
            </div>
            <DrawerClose
              render={
                <Button
                  variant="ghost"
                  size="icon-sm"
                  aria-label="Hide uploads"
                />
              }
            >
              <ChevronDownIcon />
            </DrawerClose>
          </DrawerHeader>
          <div className="flex flex-col gap-3 p-4">
            {queue.map((file) => (
              <div key={file.name} className="flex items-center gap-3">
                <FileVideoIcon className="size-4 shrink-0 text-muted-foreground" />
                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <div className="flex justify-between gap-2">
                    <span className="truncate">{file.name}</span>
                    <span className="shrink-0 text-muted-foreground tabular-nums">
                      {file.progress === 100 ? "Done" : file.progress + "%"}
                    </span>
                  </div>
                  <Progress value={file.progress} />
                </div>
                <Button
                  variant="ghost"
                  size="icon-xs"
                  aria-label={
                    file.progress === 100
                      ? "Open " + file.name
                      : "Pause " + file.name
                  }
                >
                  {file.progress === 100 ? <ExternalLinkIcon /> : <PauseIcon />}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
