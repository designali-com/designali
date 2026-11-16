import { AspectRatio } from "@workspace/ui/components/aspect-ratio"

const dots = Array.from({ length: 36 }, (_, i) => ({
  x: (i % 6) * 18 + 9,
  y: Math.floor(i / 6) * 18 + 9,
  r: ((i * 7) % 5) + 2,
}))

export default function FramedArtwork() {
  return (
    <figure className="w-full max-w-56">
      <div className="border-[10px] border-foreground bg-muted p-4 shadow-lg dark:border-border">
        <AspectRatio ratio={4 / 5} className="bg-muted">
          <svg
            viewBox="0 0 108 135"
            className="absolute inset-0 size-full"
            aria-hidden="true"
          >
            {dots.map((dot, i) => (
              <circle
                key={i}
                cx={dot.x}
                cy={dot.y + 13}
                r={dot.r}
                className={
                  i % 3 === 0
                    ? "fill-primary"
                    : i % 3 === 1
                      ? "fill-primary"
                      : "fill-primary"
                }
              />
            ))}
          </svg>
        </AspectRatio>
      </div>
      <figcaption className="mt-3 text-xs">
        <span className="font-medium">Dot Pattern Study No. 7</span>
        <span className="block text-muted-foreground">
          Ali Imam, 2024 - Designali Dot Pattern
        </span>
      </figcaption>
    </figure>
  )
}
