import { CirclePauseIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@workspace/ui/components/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

const options = [
  { value: "1", label: "1 month", resume: "Resumes Dec 15" },
  { value: "2", label: "2 months", resume: "Resumes Jan 15" },
  { value: "3", label: "3 months", resume: "Resumes Feb 15" },
]

export default function PauseSubscriptionDuration() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Need a break instead?</CardTitle>
        <CardDescription>
          Pause your meal kit deliveries and keep your saved recipes.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup defaultValue="1" className="grid grid-cols-3 gap-2">
          {options.map((o) => (
            <FieldLabel key={o.value} htmlFor={"pause-" + o.value}>
              <Field>
                <RadioGroupItem value={o.value} id={"pause-" + o.value} />
                <FieldContent>
                  <FieldTitle>{o.label}</FieldTitle>
                  <FieldDescription className="text-[11px]">
                    {o.resume}
                  </FieldDescription>
                </FieldContent>
              </Field>
            </FieldLabel>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button className="w-full">
          <CirclePauseIcon data-icon="inline-start" />
          Pause subscription
        </Button>
        <Button variant="link" size="sm">
          No thanks, cancel
        </Button>
      </CardFooter>
    </Card>
  )
}
