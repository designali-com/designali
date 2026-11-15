"use client"

import * as React from "react"
import {
  BookmarkIcon,
  DownloadIcon,
  EllipsisIcon,
  MailIcon,
  MessageCircleIcon,
  PrinterIcon,
  QrCodeIcon,
  ShareIcon,
  StickyNoteIcon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@workspace/ui/components/input-group"

const targets = [
  { label: "Message", icon: MessageCircleIcon },
  { label: "Email", icon: MailIcon },
  { label: "Notes", icon: StickyNoteIcon },
  { label: "Print", icon: PrinterIcon },
  { label: "QR code", icon: QrCodeIcon },
  { label: "Bookmark", icon: BookmarkIcon },
  { label: "Download", icon: DownloadIcon },
  { label: "More", icon: EllipsisIcon },
]

export default function ShareSheetDrawer() {
  const [copied, setCopied] = React.useState(false)

  return (
    <Drawer showSwipeHandle onOpenChange={(open) => !open && setCopied(false)}>
      <DrawerTrigger render={<Button variant="outline" />}>
        <ShareIcon data-icon="inline-start" />
        Share recipe
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Share &quot;Charred leek risotto&quot;</DrawerTitle>
          <DrawerDescription>
            Send it to a friend or save it for later.
          </DrawerDescription>
        </DrawerHeader>
        <div className="mx-auto grid w-full max-w-md grid-cols-4 gap-3 p-4">
          {targets.map((target) => (
            <DrawerClose
              key={target.label}
              render={<button type="button" />}
              className="flex flex-col items-center gap-1.5 p-2 hover:bg-muted"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-muted">
                <target.icon className="size-5" />
              </span>
              <span className="text-muted-foreground">{target.label}</span>
            </DrawerClose>
          ))}
        </div>
        <DrawerFooter className="mx-auto w-full max-w-md">
          <InputGroup>
            <InputGroupInput
              readOnly
              value="sprig.cooking/r/leek-risotto"
              aria-label="Link"
            />
            <InputGroupAddon align="inline-end">
              <InputGroupButton onClick={() => setCopied(true)}>
                {copied ? "Copied" : "Copy link"}
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
