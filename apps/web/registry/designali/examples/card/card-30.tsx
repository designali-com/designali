import { QuoteIcon, StarIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@workspace/ui/components/card"

export default function TestimonialCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <div className="flex gap-0.5" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon
              key={i}
              className="size-4 fill-amber-400 text-amber-400"
            />
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <blockquote className="text-sm leading-relaxed">
          &ldquo;We replaced three tools with this in a week. Our designers and
          engineers finally look at the same source of truth, and handoff
          meetings basically disappeared.&rdquo;
        </blockquote>
      </CardContent>
      <CardFooter className="gap-3 border-t-0">
        <Avatar>
          <AvatarFallback>JO</AvatarFallback>
        </Avatar>
        <div className="grid">
          <span className="font-medium">Jasmine Osei</span>
          <span className="text-muted-foreground">Head of Design, Fernway</span>
        </div>
        <QuoteIcon className="ms-auto size-6 text-muted-foreground/40" />
      </CardFooter>
    </Card>
  )
}
