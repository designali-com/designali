import {
  Quote as QuoteIcon,
  Star as StarIcon,
} from "@designali/icons"

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
              className="size-4 fill-primary text-primary"
            />
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <blockquote className="text-sm leading-relaxed">
          &ldquo;Designali took our brand from Figma to a production Next.js site in
          weeks. Design and code finally match, and handoff meetings
          basically disappeared.&rdquo;
        </blockquote>
      </CardContent>
      <CardFooter className="gap-3 border-t-0">
        <Avatar>
          <AvatarFallback>CL</AvatarFallback>
        </Avatar>
        <div className="grid">
          <span className="font-medium">Studio client</span>
          <span className="text-muted-foreground">Brand identity & web project</span>
        </div>
        <QuoteIcon className="ms-auto size-6 text-muted-foreground/40" />
      </CardFooter>
    </Card>
  )
}
