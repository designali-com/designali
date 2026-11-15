import { Label } from "@workspace/ui/components/label"

export default function InsetLabelInput() {
  return (
    <div className="flex w-full max-w-sm flex-col border border-input px-3 py-2 focus-within:border-ring focus-within:ring-1 focus-within:ring-ring/50 dark:bg-input/30">
      <Label htmlFor="inset-card" className="text-[11px] text-muted-foreground">
        Name on card
      </Label>
      <input
        id="inset-card"
        defaultValue="Elena Petrova"
        className="mt-1 bg-transparent text-sm outline-none"
      />
    </div>
  )
}
