import {
  Download as DownloadIcon,
  FileSpreadsheet as FileSpreadsheetIcon,
  History as HistoryIcon,
  Info as InfoIcon,
  Share2 as Share2Icon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"
import { Separator } from "@workspace/ui/components/separator"

const activity = [
  { who: "Ali", what: "edited", when: "Today, 10:42" },
  { who: "Client", what: "commented", when: "Yesterday" },
  { who: "You", what: "uploaded", when: "Nov 2" },
]

export default function FileDetailsDrawer() {
  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger
        render={<button type="button" />}
        className="flex w-full max-w-xs items-center gap-3 border bg-background p-3 text-start hover:bg-muted/50"
      >
        <FileSpreadsheetIcon className="size-8 text-primary" />
        <span className="min-w-0 flex-1">
          <span className="block truncate font-medium">
            designali-roadmap-2026.xlsx
          </span>
          <span className="block text-muted-foreground">
            1.8 MB · Edited today
          </span>
        </span>
        <InfoIcon className="size-4 text-muted-foreground" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="truncate">
            designali-roadmap-2026.xlsx
          </DrawerTitle>
          <DrawerDescription>Designali / Planning</DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-1 flex-col gap-5 overflow-y-auto p-4">
          <div className="flex h-32 items-center justify-center bg-primary/10">
            <FileSpreadsheetIcon className="size-12 text-primary" />
          </div>
          <dl className="grid grid-cols-2 gap-y-2">
            <dt className="text-muted-foreground">Type</dt>
            <dd>Spreadsheet</dd>
            <dt className="text-muted-foreground">Size</dt>
            <dd>1.8 MB</dd>
            <dt className="text-muted-foreground">Owner</dt>
            <dd>Ali Imam</dd>
            <dt className="text-muted-foreground">Created</dt>
            <dd>Nov 2, 2026</dd>
          </dl>
          <Separator />
          <div className="flex flex-col gap-3">
            <p className="font-medium">Activity</p>
            {activity.map((entry) => (
              <div key={entry.when} className="flex items-center gap-2">
                <HistoryIcon className="size-3.5 text-muted-foreground" />
                <span className="flex-1">
                  {entry.who} {entry.what}
                </span>
                <span className="text-muted-foreground">{entry.when}</span>
              </div>
            ))}
          </div>
        </div>
        <DrawerFooter className="flex-row border-t pt-4">
          <Button variant="outline" className="flex-1">
            <Share2Icon data-icon="inline-start" />
            Share
          </Button>
          <Button className="flex-1">
            <DownloadIcon data-icon="inline-start" />
            Download
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
