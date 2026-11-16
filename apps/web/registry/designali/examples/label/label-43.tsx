import { Label } from "@workspace/ui/components/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

export default function RatingScaleLabels() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <span className="text-sm font-medium">
        How likely are you to recommend Designali templates?
      </span>
      <RadioGroup className="grid grid-cols-5 gap-1.5">
        {[1, 2, 3, 4, 5].map((n) => (
          <Label
            key={n}
            htmlFor={"rate-" + n}
            className="h-10 justify-center border text-sm hover:bg-muted has-data-checked:border-primary has-data-checked:bg-primary/10"
          >
            <RadioGroupItem
              id={"rate-" + n}
              value={String(n)}
              className="sr-only"
            />
            {n}
          </Label>
        ))}
      </RadioGroup>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Not likely</span>
        <span>Very likely</span>
      </div>
    </div>
  )
}
