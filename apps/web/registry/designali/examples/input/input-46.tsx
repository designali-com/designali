import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

export default function UnderlineMinimalInput() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <div className="flex flex-col gap-1">
        <Label htmlFor="ul-name" className="text-xs text-muted-foreground">
          What should we call you?
        </Label>
        <Input
          id="ul-name"
          placeholder="Your name"
          className="h-10 border-0 border-b px-0 text-base focus-visible:border-foreground focus-visible:ring-0 md:text-base dark:bg-transparent"
        />
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="ul-email" className="text-xs text-muted-foreground">
          Where can we reach you?
        </Label>
        <Input
          id="ul-email"
          type="email"
          placeholder="you@example.com"
          className="h-10 border-0 border-b px-0 text-base focus-visible:border-foreground focus-visible:ring-0 md:text-base dark:bg-transparent"
        />
      </div>
    </div>
  )
}
