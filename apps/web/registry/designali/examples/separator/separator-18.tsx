import { Separator } from "@workspace/ui/components/separator"

export default function AccentHeadingSeparator() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <h3 className="text-lg font-semibold">Our principles</h3>
      <Separator className="bg-primary data-horizontal:h-1 data-horizontal:w-12" />
      <p className="text-sm text-muted-foreground">
        We design and build digital experiences that look great, feel intuitive,
        and work beautifully, from design to production-ready code.
      </p>
    </div>
  )
}
