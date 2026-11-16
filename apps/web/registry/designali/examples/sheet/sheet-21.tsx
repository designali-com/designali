import {
  Rss as RssIcon,
  ScrollText as ScrollTextIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { ScrollArea } from "@workspace/ui/components/scroll-area"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"

const entries = Array.from({ length: 12 }, (_, i) => ({
  version: "3." + (12 - i) + ".0",
  date: "Week " + (48 - i),
  notes: [
    "460+ blocks now live on designali.com",
    "4000+ icons in @designali/icons",
    "Fixed dark mode in pricing blocks",
  ].slice(0, (i % 3) + 1),
}))

export default function ChangelogScrollSheet() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <ScrollTextIcon data-icon="inline-start" />
        Changelog
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="border-b">
          <SheetTitle>Changelog</SheetTitle>
          <SheetDescription>
            Every release from the past quarter.
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="min-h-0 flex-1">
          <div className="flex flex-col gap-5 p-4">
            {entries.map((entry) => (
              <div key={entry.version} className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">v{entry.version}</Badge>
                  <span className="text-muted-foreground">{entry.date}</span>
                </div>
                <ul className="list-disc ps-5">
                  {entry.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ScrollArea>
        <SheetFooter className="border-t">
          <Button variant="outline">
            <RssIcon data-icon="inline-start" />
            Subscribe to updates
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
