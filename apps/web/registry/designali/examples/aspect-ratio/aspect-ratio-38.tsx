import { AspectRatio } from "@workspace/ui/components/aspect-ratio"

const size = 21
const cells = Array.from({ length: size * size }, (_, i) => {
  const x = i % size
  const y = Math.floor(i / size)
  const finder = (x < 7 && y < 7) || (x > 13 && y < 7) || (x < 7 && y > 13)
  if (finder) {
    const fx = x > 13 ? x - 14 : x
    const fy = y > 13 ? y - 14 : y
    return (
      fx === 0 ||
      fx === 6 ||
      fy === 0 ||
      fy === 6 ||
      (fx > 1 && fx < 5 && fy > 1 && fy < 5)
    )
  }
  return (x * 7 + y * 13 + x * y) % 5 < 2
})

export default function PaymentQrSquare() {
  return (
    <div className="flex w-full max-w-56 flex-col items-center gap-3 border p-4 text-center">
      <p className="text-sm font-medium">Scan to pay $36.50</p>
      <AspectRatio ratio={1} className="w-full bg-white p-3">
        <svg
          viewBox={"0 0 " + size + " " + size}
          className="size-full"
          shapeRendering="crispEdges"
          aria-label="Payment QR code"
        >
          {cells.map((on, i) =>
            on ? (
              <rect
                key={i}
                x={i % size}
                y={Math.floor(i / size)}
                width="1"
                height="1"
                fill="#111"
              />
            ) : null
          )}
        </svg>
      </AspectRatio>
      <p className="text-xs text-muted-foreground">
        Order #A-2291 - expires in 10:00
      </p>
    </div>
  )
}
