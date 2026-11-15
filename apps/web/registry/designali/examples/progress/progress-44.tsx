import { Badge } from "@workspace/ui/components/badge"
import { Progress } from "@workspace/ui/components/progress"

export default function ExamScoreWithPassMark() {
  const score = 81
  const pass = 70

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Certification exam</span>
        <Badge>Passed</Badge>
      </div>
      <div className="relative">
        <Progress
          value={score}
          aria-label="Exam score"
          className="[&_[data-slot=progress-track]]:h-2.5"
        />
        <span
          className="absolute -top-1 h-4.5 w-0.5 bg-foreground"
          style={{ left: pass + "%" }}
          aria-hidden
        />
      </div>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>
          Your score:{" "}
          <span className="font-medium text-foreground">{score}%</span>
        </span>
        <span>Pass mark: {pass}%</span>
      </div>
    </div>
  )
}
