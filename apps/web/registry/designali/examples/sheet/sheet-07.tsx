import {
  Code as CodeIcon,
  Copy as CopyIcon,
  Link as LinkIcon,
  Mail as MailIcon,
  MessageCircle as MessageCircleIcon,
  Ellipsis as MoreHorizontalIcon,
  QrCode as QrCodeIcon,
  Share2 as Share2Icon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"

const targets = [
  { label: "Email", icon: MailIcon },
  { label: "Message", icon: MessageCircleIcon },
  { label: "Copy link", icon: LinkIcon },
  { label: "Embed", icon: CodeIcon },
  { label: "QR code", icon: QrCodeIcon },
  { label: "More", icon: MoreHorizontalIcon },
]

export default function ShareBottomSheet() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <Share2Icon data-icon="inline-start" />
        Share
      </SheetTrigger>
      <SheetContent side="bottom" className="mx-auto max-w-md">
        <SheetHeader>
          <SheetTitle>Share &quot;Designali showreel&quot;</SheetTitle>
          <SheetDescription>Anyone with the link can view.</SheetDescription>
        </SheetHeader>
        <div className="grid grid-cols-3 gap-2 px-4 sm:grid-cols-6">
          {targets.map((target) => (
            <SheetClose
              key={target.label}
              render={
                <Button
                  variant="ghost"
                  className="h-auto flex-col gap-2 py-3"
                />
              }
            >
              <span className="flex size-10 items-center justify-center border bg-muted">
                <target.icon />
              </span>
              <span className="text-xs">{target.label}</span>
            </SheetClose>
          ))}
        </div>
        <SheetFooter>
          <div className="flex gap-2">
            <Input
              readOnly
              value="https://www.designali.com/work"
              className="flex-1"
            />
            <Button variant="outline" size="icon" aria-label="Copy link">
              <CopyIcon />
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
