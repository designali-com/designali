import { Spinner } from "@workspace/ui/components/spinner"

const strokes = [1, 1.5, 2, 3]

export default function SpinnerStrokeWidths() {
  return (
    <div className="flex items-end gap-8">
      {strokes.map((stroke) => (
        <div key={stroke} className="flex flex-col items-center gap-2">
          <Spinner className="size-8" strokeWidth={stroke} />
          <span className="font-mono text-xs text-muted-foreground">
            {stroke}px
          </span>
        </div>
      ))}
    </div>
  )
}
