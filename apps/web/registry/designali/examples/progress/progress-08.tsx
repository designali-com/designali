import { Progress } from "@workspace/ui/components/progress"
import { Spinner } from "@workspace/ui/components/spinner"

export default function IndeterminateExport() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center gap-2">
        <Spinner className="size-4" />
        <span className="text-sm font-medium">Preparing your export</span>
      </div>
      <Progress
        value={null}
        aria-label="Preparing export"
        className="[&_[data-slot=progress-indicator]]:w-1/3 [&_[data-slot=progress-indicator]]:animate-pulse"
      />
      <p className="text-xs text-muted-foreground">
        Q3 revenue report &middot; We&apos;ll email you when it&apos;s ready.
      </p>
    </div>
  )
}
