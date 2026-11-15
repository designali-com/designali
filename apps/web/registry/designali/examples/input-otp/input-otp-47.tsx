"use client"

import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import { BuildingIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Field, FieldLabel } from "@workspace/ui/components/field"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@workspace/ui/components/item"

export default function WorkspaceInviteCode() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <BuildingIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Tidewater Studio</ItemTitle>
          <ItemDescription>38 members · Design team</ItemDescription>
        </ItemContent>
      </Item>
      <Field>
        <FieldLabel htmlFor="invite-code">Invite code</FieldLabel>
        <InputOTP
          id="invite-code"
          maxLength={6}
          pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} className="uppercase" />
            <InputOTPSlot index={1} className="uppercase" />
            <InputOTPSlot index={2} className="uppercase" />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} className="uppercase" />
            <InputOTPSlot index={4} className="uppercase" />
            <InputOTPSlot index={5} className="uppercase" />
          </InputOTPGroup>
        </InputOTP>
      </Field>
      <Button>Join workspace</Button>
    </div>
  )
}
