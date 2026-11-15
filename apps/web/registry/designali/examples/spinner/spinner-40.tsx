import { Spinner } from "@workspace/ui/components/spinner"

export default function LayeredOrbitSpinner() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative flex size-20 items-center justify-center">
        <Spinner
          className="absolute size-20 text-muted-foreground/40"
          strokeWidth={1}
          style={{ animationDuration: "3s" }}
        />
        <Spinner
          className="absolute size-14 text-muted-foreground"
          strokeWidth={1.5}
          style={{ animationDuration: "1.6s", animationDirection: "reverse" }}
        />
        <Spinner className="absolute size-8 text-primary" />
      </div>
      <span className="text-xs text-muted-foreground">Calibrating sensors</span>
    </div>
  )
}
