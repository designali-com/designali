import {
  Bot as BotIcon,
  ChartColumn as ChartColumnIcon,
  Megaphone as MegaphoneIcon,
  Zap as ZapIcon,
} from "@designali/icons"

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
  { icon: ZapIcon, text: "460+ production-ready blocks" },
  { icon: BotIcon, text: "AI workflows that go from design to code" },
  { icon: ChartColumnIcon, text: "4000+ icons in @designali/icons" },
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
            <DialogTitle className="text-base">Meet Designali 3.0</DialogTitle>
            <DialogDescription>
              Everything Ali Imam shipped this year, in one release.
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
