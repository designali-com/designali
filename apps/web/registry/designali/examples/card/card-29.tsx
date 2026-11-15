import { ArrowUpRightIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

export default function ArticleLinkCard() {
  return (
    <a href="#" className="group block w-full max-w-sm outline-none">
      <Card className="pt-0 transition-shadow group-hover:ring-foreground/30 group-focus-visible:ring-2 group-focus-visible:ring-ring">
        <div className="relative aspect-[2/1] overflow-hidden bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-600">
          <svg
            viewBox="0 0 200 100"
            className="absolute inset-0 size-full opacity-30"
            aria-hidden="true"
          >
            <path d="M0 70 Q50 30 100 60 T200 40 V100 H0Z" fill="white" />
            <path d="M0 85 Q60 55 120 80 T200 70 V100 H0Z" fill="white" />
          </svg>
        </div>
        <CardHeader>
          <div className="flex gap-1.5">
            <Badge variant="secondary">Engineering</Badge>
            <Badge variant="outline">8 min read</Badge>
          </div>
          <CardTitle className="mt-1 text-base group-hover:underline">
            How we cut cold starts by 70% with edge caching
          </CardTitle>
          <CardDescription>
            A look at the request path, the cache keys we chose and what broke
            along the way.
          </CardDescription>
        </CardHeader>
        <CardFooter className="gap-2">
          <Avatar size="sm">
            <AvatarFallback>RP</AvatarFallback>
          </Avatar>
          <span className="flex-1">Ravi Patel · Nov 12</span>
          <ArrowUpRightIcon className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </CardFooter>
      </Card>
    </a>
  )
}
