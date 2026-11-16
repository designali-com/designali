import { AspectRatio } from "@workspace/ui/components/aspect-ratio"

import { IPad } from "@/registry/designali/ui/apple/ipad"

export default function TabletReadingView() {
  return (
    <IPad variant="ipad-air" size="sm" color="space-grey">
      <AspectRatio ratio={3 / 4} className="bg-primary/5 dark:bg-card">
        <div className="absolute inset-0 flex flex-col p-4 text-chart-5 dark:text-chart-1">
          <p className="text-[10px] tracking-widest uppercase opacity-60">
            Designali journal
          </p>
          <p className="mt-1 text-sm font-semibold">Design se code tak</p>
          <p className="mt-2 text-[10px] leading-relaxed opacity-80">
            Every Designali project starts in Figma and ends in production-ready
            Next.js code. Thoughtful design meets code that ships.
          </p>
          <div className="mt-auto flex items-center justify-between text-[9px] opacity-60">
            <span>Page 82 of 310</span>
            <span>26%</span>
          </div>
        </div>
      </AspectRatio>
    </IPad>
  )
}
