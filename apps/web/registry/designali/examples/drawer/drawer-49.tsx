import {
  Camera as CameraIcon,
  Mic as MicIcon,
  ShieldCheck as ShieldCheckIcon,
  Video as VideoIcon,
} from "@designali/icons"

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

const reasons = [
  {
    icon: CameraIcon,
    title: "Camera",
    text: "So the Designali team can see you during client calls.",
  },
  {
    icon: MicIcon,
    title: "Microphone",
    text: "So you can talk and be heard in calls.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Private by default",
    text: "We never record without a visible indicator.",
  },
]

export default function PermissionRequestDrawer() {
  return (
    <Drawer showSwipeHandle>
      <DrawerTrigger render={<Button />}>
        <VideoIcon data-icon="inline-start" />
        Join call
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-sm flex-col">
          <DrawerHeader>
            <DrawerTitle className="text-base">
              Allow camera and microphone
            </DrawerTitle>
            <DrawerDescription>
              Your browser will ask next. Here&apos;s why we need it.
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col gap-4 p-4">
            {reasons.map((reason) => (
              <div key={reason.title} className="flex gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-muted">
                  <reason.icon className="size-4" />
                </div>
                <div>
                  <p className="font-medium">{reason.title}</p>
                  <p className="text-muted-foreground">{reason.text}</p>
                </div>
              </div>
            ))}
          </div>
          <DrawerFooter>
            <DrawerClose render={<Button />}>Continue</DrawerClose>
            <DrawerClose render={<Button variant="ghost" />}>
              Join without audio or video
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
