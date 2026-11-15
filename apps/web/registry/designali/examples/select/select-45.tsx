import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Field, FieldGroup, FieldLabel } from "@workspace/ui/components/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

const roles = [
  { label: "Founder", value: "founder" },
  { label: "Engineer", value: "engineer" },
  { label: "Designer", value: "designer" },
  { label: "Product manager", value: "pm" },
]

const industries = [
  { label: "Software", value: "software" },
  { label: "Healthcare", value: "healthcare" },
  { label: "Education", value: "education" },
  { label: "Retail", value: "retail" },
]

const sources = [
  { label: "Search engine", value: "search" },
  { label: "A friend or colleague", value: "referral" },
  { label: "Podcast", value: "podcast" },
  { label: "Social media", value: "social" },
]

const questions = [
  { id: "role", label: "What is your role?", items: roles },
  { id: "industry", label: "Which industry are you in?", items: industries },
  { id: "source", label: "How did you hear about us?", items: sources },
]

export default function OnboardingProfileSelects() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardDescription>Step 2 of 3</CardDescription>
        <CardTitle>Tell us about yourself</CardTitle>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          {questions.map((question) => (
            <Field key={question.id}>
              <FieldLabel htmlFor={question.id}>{question.label}</FieldLabel>
              <Select items={question.items}>
                <SelectTrigger id={question.id} className="w-full">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  {question.items.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
          ))}
        </FieldGroup>
      </CardContent>
      <CardFooter className="justify-between">
        <Button variant="ghost">Back</Button>
        <Button>Continue</Button>
      </CardFooter>
    </Card>
  )
}
