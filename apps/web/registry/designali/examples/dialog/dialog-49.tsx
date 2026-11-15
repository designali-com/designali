import { BotIcon, ChartColumnIcon, MegaphoneIcon, ZapIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
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

const features = [
  { icon: ZapIcon, text: "Automations that run on any event" },
  { icon: BotIcon, text: "An assistant that drafts replies for you" },
  { icon: ChartColumnIcon, text: "Live dashboards with no setup" },
]

export default function AnnouncementBannerDialog() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        <MegaphoneIcon data-icon="inline-start" />
        See announcement
      </DialogTrigger>
      <DialogContent className="gap-0 overflow-hidden p-0">
        <div className="relative flex h-32 items-end bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 p-4">
          <Badge className="bg-white/20 text-white backdrop-blur">
            Launch week
          </Badge>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <DialogHeader>
            <DialogTitle className="text-base">Meet Relay 3.0</DialogTitle>
            <DialogDescription>
              Everything your support team asked for this year, in one release.
            </DialogDescription>
          </DialogHeader>
          <ul className="flex flex-col gap-2">
            {features.map((feature) => (
              <li key={feature.text} className="flex items-center gap-2">
                <feature.icon className="size-4 text-muted-foreground" />
                {feature.text}
              </li>
            ))}
          </ul>
          <DialogFooter>
            <DialogClose render={<Button variant="ghost" />}>
              Maybe later
            </DialogClose>
            <DialogClose render={<Button />}>Try it now</DialogClose>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  )
}
