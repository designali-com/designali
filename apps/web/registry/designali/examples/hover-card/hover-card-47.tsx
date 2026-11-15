"use client"

import { PreviewCard } from "@base-ui/react/preview-card"

import { Badge } from "@workspace/ui/components/badge"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"

type Tag = { name: string; count: number; description: string }

const handle = PreviewCard.createHandle<Tag>()
const tags: Tag[] = [
  {
    name: "accessibility",
    count: 128,
    description: "Keyboard, screen reader, and contrast improvements.",
  },
  {
    name: "performance",
    count: 94,
    description: "Load time, bundle size, and rendering speed.",
  },
  {
    name: "onboarding",
    count: 47,
    description: "First-run experience and activation flows.",
  },
]

export default function PayloadHandleHoverCard() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {tags.map((tag) => (
        <HoverCardTrigger
          key={tag.name}
          handle={handle}
          payload={tag}
          render={<Badge variant="secondary" className="cursor-default" />}
        >
          #{tag.name}
        </HoverCardTrigger>
      ))}
      <HoverCard handle={handle}>
        {({ payload }) => {
          const active = payload as Tag | undefined
          return (
            <HoverCardContent className="w-56">
              {active && (
                <>
                  <p className="font-medium">#{active.name}</p>
                  <p className="text-muted-foreground">{active.description}</p>
                  <p className="mt-2">{active.count} open issues</p>
                </>
              )}
            </HoverCardContent>
          )
        }}
      </HoverCard>
    </div>
  )
}
