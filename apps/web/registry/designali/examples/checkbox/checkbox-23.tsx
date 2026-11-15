"use client"

import * as React from "react"
import { CookieIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@workspace/ui/components/field"

const categories = [
  {
    id: "necessary",
    title: "Strictly necessary",
    description: "Required for sign-in and security.",
    locked: true,
  },
  {
    id: "analytics",
    title: "Analytics",
    description: "Helps us understand how the site is used.",
  },
  {
    id: "marketing",
    title: "Marketing",
    description: "Used to show relevant offers elsewhere.",
  },
]

export default function CookieConsentCategories() {
  const [optional, setOptional] = React.useState<string[]>([])

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CookieIcon className="size-4" />
          Cookie preferences
        </CardTitle>
      </CardHeader>
      <CardContent>
        <FieldGroup className="gap-4">
          {categories.map((category) => (
            <Field
              key={category.id}
              orientation="horizontal"
              data-disabled={category.locked || undefined}
            >
              <Checkbox
                id={"cookie-" + category.id}
                checked={category.locked || optional.includes(category.id)}
                disabled={category.locked}
                onCheckedChange={(checked) =>
                  setOptional((list) =>
                    checked
                      ? [...list, category.id]
                      : list.filter((id) => id !== category.id)
                  )
                }
              />
              <FieldContent>
                <FieldLabel htmlFor={"cookie-" + category.id}>
                  {category.title}
                </FieldLabel>
                <FieldDescription>{category.description}</FieldDescription>
              </FieldContent>
            </Field>
          ))}
        </FieldGroup>
      </CardContent>
      <CardFooter className="gap-2 border-t">
        <Button variant="outline" size="sm" className="flex-1">
          Save selection
        </Button>
        <Button
          size="sm"
          className="flex-1"
          onClick={() => setOptional(["analytics", "marketing"])}
        >
          Accept all
        </Button>
      </CardFooter>
    </Card>
  )
}
