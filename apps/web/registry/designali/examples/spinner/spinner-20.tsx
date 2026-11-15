import { Progress } from "@workspace/ui/components/progress"
import { Spinner } from "@workspace/ui/components/spinner"

export default function ImportWithProgress() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center gap-2">
        <Spinner className="text-primary" />
        <span className="text-sm font-medium">Importing contacts</span>
        <span className="ml-auto text-xs text-muted-foreground tabular-nums">
          64%
        </span>
      </div>
      <Progress value={64} />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>3,212 of 5,018 rows</span>
        <span>About 40s left</span>
      </div>
    </div>
  )
}
