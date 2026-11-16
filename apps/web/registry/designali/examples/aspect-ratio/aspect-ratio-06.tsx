import { AspectRatio } from "@workspace/ui/components/aspect-ratio"
import { Badge } from "@workspace/ui/components/badge"

export default function ProductCardSquare() {
  return (
    <div className="w-full max-w-56 border">
      <AspectRatio
        ratio={1}
        className="bg-linear-to-br from-primary/20 to-primary dark:from-chart-3 dark:to-chart-5"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="size-1/2 rounded-full bg-white/40 shadow-2xl ring-8 ring-white/20" />
        </div>
        <Badge className="absolute start-2 top-2">New</Badge>
      </AspectRatio>
      <div className="flex flex-col gap-1 p-3">
        <p className="text-sm font-medium">Portfolio Simple template</p>
        <p className="text-xs text-muted-foreground">Next.js - Tailwind CSS</p>
        <p className="mt-1 text-sm font-semibold">$48.00</p>
      </div>
    </div>
  )
}
