"use client"

import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import { MessageSquareIcon } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"

const members = ["Ava Lindqvist", "Ben Okafor", "Chloe Marsh"]

export default function JoinPrivateChatRoom() {
  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-4 border p-5 text-center">
      <AvatarGroup>
        {members.map((member) => (
          <Avatar key={member}>
            <AvatarFallback>
              {member
                .split(" ")
                .map((p) => p[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        ))}
        <AvatarGroupCount>+9</AvatarGroupCount>
      </AvatarGroup>
      <div className="space-y-1">
        <h3 className="text-sm font-semibold">#design-crit is private</h3>
        <p className="text-xs text-muted-foreground">
          Ask a member for the invite code to join.
        </p>
      </div>
      <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
        <InputOTPGroup>
          <InputOTPSlot index={0} className="uppercase" />
          <InputOTPSlot index={1} className="uppercase" />
          <InputOTPSlot index={2} className="uppercase" />
          <InputOTPSlot index={3} className="uppercase" />
          <InputOTPSlot index={4} className="uppercase" />
          <InputOTPSlot index={5} className="uppercase" />
        </InputOTPGroup>
      </InputOTP>
      <Button className="w-full">
        <MessageSquareIcon data-icon="inline-start" />
        Join channel
      </Button>
    </div>
  )
}
