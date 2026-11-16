import { Spinner } from "@workspace/ui/components/spinner"

export default function FullPageLoader() {
  return (
    <div className="flex h-64 w-full max-w-md flex-col items-center justify-center gap-4 border bg-muted/30">
      <div className="flex items-center gap-2">
        <div className="size-6 bg-gradient-to-br from-primary to-primary" />
        <span className="text-sm font-semibold tracking-tight">Lanternly</span>
      </div>
      <Spinner className="size-8 text-muted-foreground" strokeWidth={1.5} />
      <span className="text-xs text-muted-foreground">
        Preparing your Designali workspace
      </span>
    </div>
  )
}
