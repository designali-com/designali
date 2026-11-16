import { Separator } from "@workspace/ui/components/separator"

export function SeparatorDemo() {
  return (
    <div className="flex max-w-sm flex-col gap-4 text-sm">
      <div className="flex flex-col gap-1.5">
        <div className="leading-none font-medium">designali</div>
        <div className="text-muted-foreground">
          Design se code tak
        </div>
      </div>
      <Separator />
      <div>
        Where thoughtful design meets production-ready code. Blocks, templates,
        icons and logos you can customize and build on.
      </div>
    </div>
  )
}