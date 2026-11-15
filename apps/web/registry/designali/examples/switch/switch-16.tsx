import { CookieIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
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
import { Switch } from "@workspace/ui/components/switch"

const groups = [
  {
    id: "essential",
    label: "Essential",
    description: "Required for sign-in and security.",
    locked: true,
  },
  {
    id: "analytics",
    label: "Analytics",
    description: "Helps us understand how the site is used.",
    locked: false,
  },
  {
    id: "marketing",
    label: "Marketing",
    description: "Personalized offers on other sites.",
    locked: false,
  },
]

export default function CookiePreferences() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CookieIcon className="size-4" />
          Cookie preferences
        </CardTitle>
        <CardDescription>Choose which cookies we can use.</CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup className="gap-4">
          {groups.map((group) => (
            <Field key={group.id} orientation="horizontal">
              <FieldContent>
                <FieldLabel htmlFor={"cookie-" + group.id}>
                  {group.label}
                  {group.locked && <Badge variant="outline">Always on</Badge>}
                </FieldLabel>
                <FieldDescription>{group.description}</FieldDescription>
              </FieldContent>
              <Switch
                id={"cookie-" + group.id}
                defaultChecked={group.locked}
                disabled={group.locked}
              />
            </Field>
          ))}
        </FieldGroup>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline" size="sm" className="flex-1">
          Reject all
        </Button>
        <Button size="sm" className="flex-1">
          Save choices
        </Button>
      </CardFooter>
    </Card>
  )
}
