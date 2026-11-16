"use client"

import * as React from "react"
import {
  Heart as HeartIcon,
  Laugh as LaughIcon,
  PartyPopper as PartyPopperIcon,
  ThumbsUp as ThumbsUpIcon,
} from "@designali/icons"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

const reactions = [
  { value: "like", icon: ThumbsUpIcon, base: 4 },
  { value: "love", icon: HeartIcon, base: 2 },
  { value: "laugh", icon: LaughIcon, base: 1 },
  { value: "party", icon: PartyPopperIcon, base: 3 },
]

export default function MessageReactionToggleGroup() {
  const [mine, setMine] = React.useState<string[]>(["love"])

  return (
    <div className="flex w-full max-w-sm gap-3">
      <Avatar>
        <AvatarFallback>AI</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-2">
        <div className="bg-muted px-3 py-2 text-sm">
          The designali.com staging deploy is green, ship it whenever you&apos;re ready!
        </div>
        <ToggleGroup
          multiple
          size="sm"
          variant="outline"
          spacing={1}
          value={mine}
          onValueChange={setMine}
        >
          {reactions.map((r) => (
            <ToggleGroupItem
              key={r.value}
              value={r.value}
              aria-label={r.value}
              className="rounded-full tabular-nums"
            >
              <r.icon data-icon="inline-start" />
              {r.base + (mine.includes(r.value) ? 1 : 0)}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
    </div>
  )
}
