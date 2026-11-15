import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"

const bars = [32, 48, 41, 66, 58, 72, 80]
const channels = [
  { name: "Organic search", value: "42%" },
  { name: "Direct", value: "27%" },
  { name: "Referral", value: "18%" },
  { name: "Social", value: "13%" },
]

export default function AnalyticsChartAndBreakdown() {
  return (
    <ResizablePanelGroup
      orientation="vertical"
      className="h-80 w-full max-w-lg border"
    >
      <ResizablePanel defaultSize="55%" minSize="30%">
        <div className="flex h-full flex-col gap-2 p-3">
          <div className="flex items-baseline justify-between">
            <span className="text-xs font-medium">Weekly visitors</span>
            <span className="text-sm font-semibold tabular-nums">18,240</span>
          </div>
          <div className="flex flex-1 items-end gap-1.5">
            {bars.map((value, i) => (
              <div
                key={i}
                className="flex-1 bg-primary/80"
                style={{ height: value + "%" }}
              />
            ))}
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="45%" minSize="25%">
        <div className="flex h-full flex-col divide-y">
          {channels.map((c) => (
            <div
              key={c.name}
              className="flex items-center justify-between px-3 py-2 text-xs"
            >
              <span>{c.name}</span>
              <span className="font-medium tabular-nums">{c.value}</span>
            </div>
          ))}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
