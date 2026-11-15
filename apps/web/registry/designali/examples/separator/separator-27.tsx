import { Separator } from "@workspace/ui/components/separator"

export default function ResponsiveOrientationSeparator() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4 border p-4 sm:flex-row">
      <div className="flex flex-1 flex-col gap-1">
        <span className="text-xs text-muted-foreground">Billing contact</span>
        <span className="text-sm font-medium">Hana Kobayashi</span>
        <span className="text-xs text-muted-foreground">hana@orbitcrm.io</span>
      </div>
      <Separator className="sm:hidden" />
      <Separator orientation="vertical" className="hidden sm:block" />
      <div className="flex flex-1 flex-col gap-1">
        <span className="text-xs text-muted-foreground">Next invoice</span>
        <span className="text-sm font-medium">$1,240.00</span>
        <span className="text-xs text-muted-foreground">Due April 1</span>
      </div>
    </div>
  )
}
