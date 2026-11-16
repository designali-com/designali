import { AspectRatio } from "@workspace/ui/components/aspect-ratio"

export default function GoldenRatioSpiral() {
  return (
    <div className="w-full max-w-sm">
      <AspectRatio
        ratio={1.618}
        className="border bg-linear-to-br from-primary/10 to-chart-1 dark:from-chart-5 dark:to-chart-3"
      >
        <svg
          viewBox="0 0 161.8 100"
          className="absolute inset-0 size-full text-chart-5/50 dark:text-chart-1/50"
          fill="none"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            d="M100 0 V100 M100 61.8 H161.8 M138.2 61.8 V100 M138.2 85.4 H100"
            strokeWidth="0.6"
          />
          <path
            d="M100 100 A100 100 0 0 1 0 0 M100 0 A61.8 61.8 0 0 1 161.8 61.8 M161.8 61.8 A38.2 38.2 0 0 1 123.6 100"
            strokeWidth="1"
          />
        </svg>
      </AspectRatio>
      <p className="mt-2 text-center font-sans text-xs text-muted-foreground">
        phi = 1.618 - Designali grid
      </p>
    </div>
  )
}
