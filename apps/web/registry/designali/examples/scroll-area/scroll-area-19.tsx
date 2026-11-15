import { ScrollArea } from "@workspace/ui/components/scroll-area"

const steps = [
  "Create your workspace",
  "Invite your team",
  "Connect your calendar",
  "Import existing projects",
  "Set up notifications",
  "Choose a theme",
  "Install the desktop app",
  "Enable two-factor auth",
  "Configure billing",
  "Create your first report",
  "Share a dashboard",
  "Explore integrations",
]

export default function FadeEdgeIndicators() {
  return (
    <ScrollArea className="group/scroll h-64 w-full max-w-xs border">
      <div className="pointer-events-none sticky top-0 z-10 -mb-8 h-8 bg-gradient-to-b from-background to-transparent opacity-0 transition-opacity group-data-[overflow-y-start]/scroll:opacity-100" />
      <ol className="flex flex-col gap-1 p-3">
        {steps.map((step, i) => (
          <li key={step} className="flex items-center gap-2 px-2 py-2 text-xs">
            <span className="flex size-5 shrink-0 items-center justify-center bg-muted font-mono text-[10px]">
              {i + 1}
            </span>
            {step}
          </li>
        ))}
      </ol>
      <div className="pointer-events-none sticky bottom-0 -mt-8 h-8 bg-gradient-to-t from-background to-transparent opacity-0 transition-opacity group-data-[overflow-y-end]/scroll:opacity-100" />
    </ScrollArea>
  )
}
