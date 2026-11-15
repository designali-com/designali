import {
  DownloadIcon,
  FileTextIcon,
  HistoryIcon,
  Share2Icon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Separator } from "@workspace/ui/components/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"

const versions = [
  { label: "v3 · current", by: "Elif Demir", when: "Today, 10:42" },
  { label: "v2", by: "Sam Okafor", when: "Mar 2" },
  { label: "v1", by: "Elif Demir", when: "Feb 27" },
]

export default function FileDetailsSheet() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <FileTextIcon data-icon="inline-start" />
        brand-guidelines.pdf
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>brand-guidelines.pdf</SheetTitle>
          <SheetDescription>PDF document · 4.2 MB</SheetDescription>
        </SheetHeader>
        <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-4">
          <div className="flex aspect-video items-center justify-center border bg-gradient-to-br from-muted to-background">
            <FileTextIcon className="size-10 text-muted-foreground" />
          </div>
          <dl className="grid grid-cols-2 gap-y-1.5">
            <dt className="text-muted-foreground">Owner</dt>
            <dd>Elif Demir</dd>
            <dt className="text-muted-foreground">Location</dt>
            <dd>Marketing / Brand</dd>
            <dt className="text-muted-foreground">Modified</dt>
            <dd>Today, 10:42</dd>
          </dl>
          <Separator />
          <div className="flex flex-col gap-2">
            <span className="font-medium">Version history</span>
            {versions.map((v) => (
              <div key={v.label} className="flex items-center gap-2">
                <HistoryIcon className="size-3.5 text-muted-foreground" />
                <span className="flex-1">{v.label}</span>
                <span className="text-muted-foreground">
                  {v.by} · {v.when}
                </span>
              </div>
            ))}
          </div>
        </div>
        <SheetFooter className="flex-row border-t">
          <Button variant="outline" className="flex-1">
            <DownloadIcon data-icon="inline-start" />
            Download
          </Button>
          <Button className="flex-1">
            <Share2Icon data-icon="inline-start" />
            Share
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
