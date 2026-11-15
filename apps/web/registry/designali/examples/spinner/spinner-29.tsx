import { Spinner } from "@workspace/ui/components/spinner"

const sizes = [
  { label: "xs", className: "size-3" },
  { label: "sm", className: "size-4" },
  { label: "md", className: "size-6" },
  { label: "lg", className: "size-8" },
  { label: "xl", className: "size-12" },
]

export default function SpinnerScale() {
  return (
    <div className="flex items-end gap-6">
      {sizes.map((size) => (
        <div key={size.label} className="flex flex-col items-center gap-3">
          <Spinner className={size.className} />
          <code className="font-mono text-xs text-muted-foreground">
            {size.label}
          </code>
        </div>
      ))}
    </div>
  )
}
