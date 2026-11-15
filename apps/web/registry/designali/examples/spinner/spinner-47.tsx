import { Spinner } from "@workspace/ui/components/spinner"

export default function AccessibleLabelledSpinner() {
  return (
    <div
      className="flex w-full max-w-xs items-center gap-3 border p-4"
      aria-live="polite"
    >
      <Spinner aria-label="Loading invoices" className="size-5" />
      <div className="flex flex-col">
        <span className="text-sm font-medium">Loading invoices</span>
        <span className="text-xs text-muted-foreground">
          Screen readers announce this status politely.
        </span>
      </div>
    </div>
  )
}
