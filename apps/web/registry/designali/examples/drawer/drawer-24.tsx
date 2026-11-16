import {
  Check as CheckIcon,
  Phone as PhoneIcon,
  Truck as TruckIcon,
} from "@designali/icons"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar"
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
import { cn } from "@workspace/ui/lib/utils"

const steps = [
  { label: "Brief confirmed", time: "Nov 13, 09:12", done: true },
  { label: "Design approved", time: "Nov 13, 16:40", done: true },
  {
    label: "In development",
    time: "Today, 08:05",
    done: true,
    current: true,
  },
  { label: "Launched", time: "Expected by 14:00", done: false },
]

export default function OrderTrackingDrawer() {
  return (
    <Drawer showSwipeHandle>
      <DrawerTrigger render={<Button variant="outline" />}>
        <TruckIcon data-icon="inline-start" />
        Track order
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-sm flex-col">
          <DrawerHeader>
            <DrawerTitle>Launching today</DrawerTitle>
            <DrawerDescription>Project #88213 · 3 pages</DrawerDescription>
          </DrawerHeader>
          <ol className="flex flex-col p-4">
            {steps.map((step, index) => (
              <li key={step.label} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <span
                    className={cn(
                      "flex size-5 items-center justify-center rounded-full border",
                      step.done &&
                        "border-primary bg-primary text-primary-foreground",
                      step.current && "ring-4 ring-primary/20"
                    )}
                  >
                    {step.done && <CheckIcon className="size-3" />}
                  </span>
                  {index < steps.length - 1 && (
                    <span
                      className={cn(
                        "w-px flex-1",
                        steps[index + 1]?.done ? "bg-primary" : "bg-border"
                      )}
                    />
                  )}
                </div>
                <div className="pb-5">
                  <p
                    className={cn(
                      "font-medium",
                      !step.done && "text-muted-foreground"
                    )}
                  >
                    {step.label}
                  </p>
                  <p className="text-muted-foreground">{step.time}</p>
                </div>
              </li>
            ))}
          </ol>
          <DrawerFooter className="flex-row items-center gap-3 border-t pt-4">
            <Avatar>
              <AvatarImage src="/ali.jpg" alt="Ali Imam" />
              <AvatarFallback>AI</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="font-medium">Ali Imam</p>
              <p className="text-muted-foreground">Your designer</p>
            </div>
            <Button variant="outline" size="icon" aria-label="Call courier">
              <PhoneIcon />
            </Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
