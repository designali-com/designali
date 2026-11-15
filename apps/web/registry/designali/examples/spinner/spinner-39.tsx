import { Spinner } from "@workspace/ui/components/spinner"

export default function ContainedSpinners() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex size-12 items-center justify-center rounded-full border">
        <Spinner className="size-5" />
      </div>
      <div className="flex size-12 items-center justify-center bg-muted">
        <Spinner className="size-5 text-muted-foreground" />
      </div>
      <div className="flex size-12 items-center justify-center bg-primary/10">
        <Spinner className="size-5 text-primary" />
      </div>
      <div className="flex size-12 items-center justify-center bg-primary text-primary-foreground">
        <Spinner className="size-5" />
      </div>
    </div>
  )
}
