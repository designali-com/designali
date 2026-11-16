import { AspectRatio } from "@workspace/ui/components/aspect-ratio"

export default function SocialSharePreview() {
  return (
    <div className="w-full max-w-sm overflow-hidden border">
      <AspectRatio
        ratio={1.91}
        className="bg-linear-to-br from-foreground to-foreground"
      >
        <div className="absolute inset-0 flex flex-col justify-between p-5 text-white">
          <div className="flex items-center gap-2 text-xs font-semibold">
            <span className="size-4 bg-linear-to-br from-chart-1 to-primary" />
            designali
          </div>
          <p className="text-xl leading-tight font-semibold text-balance">
            Where thoughtful design meets production-ready code
          </p>
        </div>
      </AspectRatio>
      <div className="border-t bg-muted/40 p-3">
        <p className="text-[10px] tracking-wide text-muted-foreground uppercase">
          designali.com
        </p>
        <p className="truncate text-sm font-medium">
          Designali — design se code tak
        </p>
        <p className="truncate text-xs text-muted-foreground">
          Brand identity, UI/UX design and production-ready websites.
        </p>
      </div>
    </div>
  )
}
