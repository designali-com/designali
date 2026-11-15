import { Button } from "@workspace/ui/components/button"
import { Spinner } from "@workspace/ui/components/spinner"

export default function ExportingNotice() {
  return (
    <div className="flex w-full max-w-sm items-center gap-3 border bg-popover p-3 text-popover-foreground shadow-lg">
      <div className="flex size-8 shrink-0 items-center justify-center bg-muted">
        <Spinner />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-sm font-medium">Exporting Q3 report</div>
        <div className="truncate text-xs text-muted-foreground">
          We&apos;ll email you a CSV when it&apos;s ready.
        </div>
      </div>
      <Button variant="ghost" size="sm">
        Cancel
      </Button>
    </div>
  )
}
