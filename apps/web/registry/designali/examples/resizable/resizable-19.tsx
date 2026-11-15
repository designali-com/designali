import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"

function Stat({
  label,
  value,
  delta,
}: {
  label: string
  value: string
  delta: string
}) {
  return (
    <div className="flex h-full flex-col justify-between p-3">
      <span className="text-xs text-muted-foreground">{label}</span>
      <div className="flex items-end justify-between gap-2">
        <span className="text-xl font-semibold tabular-nums">{value}</span>
        <span className="text-xs text-emerald-600 dark:text-emerald-400">
          {delta}
        </span>
      </div>
    </div>
  )
}

export default function DashboardWidgetGrid() {
  return (
    <ResizablePanelGroup
      orientation="vertical"
      className="h-72 w-full max-w-lg border"
    >
      <ResizablePanel defaultSize="50%" minSize="25%">
        <ResizablePanelGroup orientation="horizontal">
          <ResizablePanel defaultSize="50%" minSize="25%">
            <Stat label="Revenue" value="$48.2k" delta="+12%" />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize="50%" minSize="25%">
            <Stat label="Active users" value="3,912" delta="+4%" />
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="50%" minSize="25%">
        <ResizablePanelGroup orientation="horizontal">
          <ResizablePanel defaultSize="50%" minSize="25%">
            <Stat label="Churn" value="1.8%" delta="-0.3%" />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize="50%" minSize="25%">
            <Stat label="NPS" value="62" delta="+5" />
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
