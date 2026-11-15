import { MapPinIcon } from "lucide-react"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"

const stores = [
  { name: "Harbor Street", distance: "0.4 km", open: true },
  { name: "Old Town Market", distance: "1.2 km", open: true },
  { name: "Riverside Mall", distance: "2.8 km", open: false },
]

const pins = [
  { top: "30%", left: "40%" },
  { top: "55%", left: "62%" },
  { top: "70%", left: "28%" },
]

export default function MapWithResults() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-72 w-full max-w-2xl border"
    >
      <ResizablePanel defaultSize="40%" minSize="30%">
        <div className="flex h-full flex-col divide-y">
          {stores.map((store) => (
            <div key={store.name} className="flex flex-col gap-0.5 p-3">
              <span className="truncate text-xs font-medium">{store.name}</span>
              <span className="text-[11px] text-muted-foreground">
                {store.distance} - {store.open ? "Open until 20:00" : "Closed"}
              </span>
            </div>
          ))}
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="60%" minSize="35%">
        <div className="relative h-full bg-emerald-50 bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-emerald-950/30">
          {pins.map((pin, i) => (
            <MapPinIcon
              key={i}
              className="absolute size-5 -translate-x-1/2 -translate-y-full fill-primary text-primary-foreground"
              style={pin}
            />
          ))}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
