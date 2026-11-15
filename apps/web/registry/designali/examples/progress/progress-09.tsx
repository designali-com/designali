import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@workspace/ui/components/progress"

const sizes = [
  { label: "Extra small", className: "[&_[data-slot=progress-track]]:h-0.5" },
  { label: "Default", className: "" },
  { label: "Medium", className: "[&_[data-slot=progress-track]]:h-2" },
  { label: "Large", className: "[&_[data-slot=progress-track]]:h-3" },
]

export default function ProgressTrackSizes() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-5">
      {sizes.map((size, index) => (
        <Progress
          key={size.label}
          value={30 + index * 15}
          className={size.className}
        >
          <ProgressLabel>{size.label}</ProgressLabel>
          <ProgressValue />
        </Progress>
      ))}
    </div>
  )
}
