"use client"

import * as React from "react"
import {
  MessageCircle as MessageCircleIcon,
} from "@designali/icons"

import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

const stats = [
  { label: "Projects", value: "214" },
  { label: "Followers", value: "18.2k" },
  { label: "Following", value: "391" },
]

export default function CreatorProfileCard() {
  const [following, setFollowing] = React.useState(false)

  return (
    <Card className="w-full max-w-xs pt-0">
      <div className="h-20 bg-gradient-to-br from-violet-500 via-fuchsia-500 to-orange-400" />
      <CardHeader className="-mt-10">
        <Avatar className="size-16 ring-4 ring-card">
          <AvatarImage src="/ali.jpg" alt="Ali Imam" />
          <AvatarFallback className="text-base">AI</AvatarFallback>
        </Avatar>
        <CardTitle className="mt-2 text-base">Ali Imam</CardTitle>
        <CardDescription>
          Design engineer and founder of Designali. Design se code tak.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-3 divide-x border-y py-3 text-center">
        {stats.map((s) => (
          <div key={s.label} className="grid">
            <span className="text-sm font-semibold">{s.value}</span>
            <span className="text-muted-foreground">{s.label}</span>
          </div>
        ))}
      </CardContent>
      <CardFooter className="gap-2 border-t-0 pt-0">
        <Button
          className="flex-1"
          variant={following ? "outline" : "default"}
          onClick={() => setFollowing(!following)}
        >
          {following ? "Following" : "Follow"}
        </Button>
        <Button variant="outline" size="icon" aria-label="Message">
          <MessageCircleIcon />
        </Button>
      </CardFooter>
    </Card>
  )
}
