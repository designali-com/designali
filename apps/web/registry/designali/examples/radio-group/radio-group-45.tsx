import {
  Cookie as CookieIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

export default function CookieConsentLevels() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4 border p-4">
      <div className="flex items-center gap-2">
        <CookieIcon className="size-4" />
        <span className="text-sm font-medium">Cookie preferences</span>
      </div>
      <RadioGroup defaultValue="analytics" className="gap-3">
        <Field orientation="horizontal">
          <RadioGroupItem value="essential" id="cookie-essential" />
          <FieldContent>
            <FieldLabel htmlFor="cookie-essential">Essential only</FieldLabel>
            <FieldDescription>
              Required for sign-in and checkout.
            </FieldDescription>
          </FieldContent>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="analytics" id="cookie-analytics" />
          <FieldContent>
            <FieldLabel htmlFor="cookie-analytics">
              Essential + analytics
            </FieldLabel>
            <FieldDescription>
              Helps us understand which pages are useful.
            </FieldDescription>
          </FieldContent>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="all" id="cookie-all" />
          <FieldContent>
            <FieldLabel htmlFor="cookie-all">All cookies</FieldLabel>
            <FieldDescription>
              Includes personalized recommendations.
            </FieldDescription>
          </FieldContent>
        </Field>
      </RadioGroup>
      <div className="flex justify-end gap-2">
        <Button variant="outline" size="sm">
          Reject all
        </Button>
        <Button size="sm">Save choices</Button>
      </div>
    </div>
  )
}
