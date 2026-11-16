import {
  Gift as GiftIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import { ScrollArea } from "@workspace/ui/components/scroll-area"

const releases = [
  {
    version: "2.8.0",
    date: "Nov 12",
    tag: "New",
    title: "40 new blocks",
    body: "Pricing, hero and footer blocks built with Next.js and Tailwind CSS.",
  },
  {
    version: "2.7.3",
    date: "Nov 4",
    tag: "Improved",
    title: "Faster icon search",
    body: "Find any of the 4000+ Designali icons 3× faster.",
  },
  {
    version: "2.7.1",
    date: "Oct 28",
    tag: "Fixed",
    title: "Dark mode tokens",
    body: "Templates now respect semantic tokens in dark mode.",
  },
  {
    version: "2.7.0",
    date: "Oct 20",
    tag: "New",
    title: "Logos package",
    body: "Brand logos ship as @designali/logos React components.",
  },
]

export default function ChangelogDialog() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        <GiftIcon data-icon="inline-start" />
        What&apos;s new
        <Badge className="ms-1">4</Badge>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>What&apos;s new in Designali</DialogTitle>
          <DialogDescription>Updates from the last 30 days.</DialogDescription>
        </DialogHeader>
        <ScrollArea className="-mx-4 h-64 px-4">
          <ol className="flex flex-col gap-4 border-s ps-4">
            {releases.map((release) => (
              <li
                key={release.version}
                className="relative flex flex-col gap-1"
              >
                <span className="absolute -start-[21px] top-1 size-2.5 rounded-full bg-primary" />
                <div className="flex items-center gap-2">
                  <Badge
                    variant={release.tag === "Fixed" ? "outline" : "secondary"}
                  >
                    {release.tag}
                  </Badge>
                  <span className="text-muted-foreground">
                    v{release.version} · {release.date}
                  </span>
                </div>
                <p className="font-medium">{release.title}</p>
                <p className="text-muted-foreground">{release.body}</p>
              </li>
            ))}
          </ol>
        </ScrollArea>
        <DialogFooter showCloseButton />
      </DialogContent>
    </Dialog>
  )
}
