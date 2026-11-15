import { Label } from "@workspace/ui/components/label"

export default function FloatingLabelInput() {
  return (
    <div className="relative w-full max-w-sm">
      <input
        id="floating-email"
        type="email"
        placeholder=" "
        className="peer h-12 w-full border border-input bg-transparent px-3 pt-4 text-sm outline-none focus:border-ring focus:ring-1 focus:ring-ring/50 dark:bg-input/30"
      />
      <Label
        htmlFor="floating-email"
        className="pointer-events-none absolute start-3 top-1.5 text-[11px] text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-focus:top-1.5 peer-focus:text-[11px]"
      >
        Email address
      </Label>
    </div>
  )
}
