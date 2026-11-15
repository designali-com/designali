import { Spinner } from "@workspace/ui/components/spinner"

const speeds = [
  { label: "Slow", duration: "2s" },
  { label: "Default", duration: "1s" },
  { label: "Fast", duration: "0.5s" },
]

export default function SpinnerSpeeds() {
  return (
    <div className="flex items-center gap-10">
      {speeds.map((speed) => (
        <div key={speed.label} className="flex flex-col items-center gap-2">
          <Spinner
            className="size-6"
            style={{ animationDuration: speed.duration }}
          />
          <span className="text-xs text-muted-foreground">
            {speed.label} &middot; {speed.duration}
          </span>
        </div>
      ))}
    </div>
  )
}
