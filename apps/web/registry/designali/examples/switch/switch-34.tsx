import { ArrowRightIcon } from "lucide-react"

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
  FieldGroup,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Progress } from "@workspace/ui/components/progress"
import { Switch } from "@workspace/ui/components/switch"

const prefs = [
  {
    id: "tips",
    label: "Show product tips",
    description: "Short hints as you explore.",
    on: true,
  },
  {
    id: "sample",
    label: "Add sample project",
    description: "A pre-filled board to play with.",
    on: true,
  },
  {
    id: "invite",
    label: "Invite teammates later",
    description: "We'll remind you in 3 days.",
    on: false,
  },
]

export default function OnboardingPreferencesStep() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <p className="text-xs text-muted-foreground">Step 2 of 3</p>
        <Progress value={66} aria-label="Onboarding progress" />
        <CardTitle className="pt-2">Set up your workspace</CardTitle>
        <CardDescription>
          You can change these anytime in settings.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup className="gap-4">
          {prefs.map((pref) => (
            <Field key={pref.id} orientation="horizontal">
              <FieldContent>
                <FieldLabel htmlFor={"onboard-" + pref.id}>
                  {pref.label}
                </FieldLabel>
                <FieldDescription>{pref.description}</FieldDescription>
              </FieldContent>
              <Switch id={"onboard-" + pref.id} defaultChecked={pref.on} />
            </Field>
          ))}
        </FieldGroup>
      </CardContent>
      <CardFooter className="justify-between">
        <Button variant="ghost" size="sm">
          Back
        </Button>
        <Button size="sm">
          Continue
          <ArrowRightIcon data-icon="inline-end" />
        </Button>
      </CardFooter>
    </Card>
  )
}
