"use client"

import * as React from "react"
import {
  MessageSquare as MessageSquareIcon,
  Smartphone as SmartphoneIcon,
} from "@designali/icons"

import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

export default function TwoFactorMethodField() {
  const [method, setMethod] = React.useState("app")

  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend>Two-factor authentication</FieldLegend>
      <FieldDescription>Add a second step when signing in.</FieldDescription>
      <RadioGroup value={method} onValueChange={(v) => setMethod(v as string)}>
        <Field orientation="horizontal">
          <RadioGroupItem value="app" id="tfa-app" />
          <FieldLabel htmlFor="tfa-app" className="font-normal">
            <SmartphoneIcon className="size-3.5" />
            Authenticator app
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="sms" id="tfa-sms" />
          <FieldLabel htmlFor="tfa-sms" className="font-normal">
            <MessageSquareIcon className="size-3.5" />
            Text message
          </FieldLabel>
        </Field>
      </RadioGroup>
      {method === "app" ? (
        <Field>
          <FieldLabel htmlFor="tfa-code">
            Enter the 6-digit code from your app
          </FieldLabel>
          <Input
            id="tfa-code"
            inputMode="numeric"
            maxLength={6}
            placeholder="000000"
            className="w-32 font-mono tracking-widest"
          />
        </Field>
      ) : (
        <Field>
          <FieldLabel htmlFor="tfa-phone">Phone number</FieldLabel>
          <Input id="tfa-phone" type="tel" placeholder="+1 555 010 2030" />
          <FieldDescription>Standard message rates may apply.</FieldDescription>
        </Field>
      )}
    </FieldSet>
  )
}
