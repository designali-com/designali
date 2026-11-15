import { Button } from "@workspace/ui/components/button"
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@workspace/ui/components/progress"

const answers = ["Daily", "A few times a week", "Weekly", "Rarely"]

export default function SurveyQuestionProgress() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <Progress value={4} max={10} className="gap-2">
        <ProgressLabel className="text-muted-foreground">
          Question 4 of 10
        </ProgressLabel>
        <ProgressValue />
      </Progress>
      <p className="text-sm font-medium">
        How often do you plan meals for the week ahead?
      </p>
      <div className="grid grid-cols-2 gap-2">
        {answers.map((answer) => (
          <Button key={answer} variant="outline" size="sm">
            {answer}
          </Button>
        ))}
      </div>
    </div>
  )
}
