import {
  Quote as QuoteIcon,
} from "@designali/icons"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"

export default function TestimonialAuthor() {
  return (
    <figure className="flex w-full max-w-sm flex-col gap-4 border p-5">
      <QuoteIcon className="size-5 text-muted-foreground" />
      <blockquote className="text-sm leading-relaxed">
        Designali took us from Figma to a production-ready Next.js site in weeks.
        The blocks and templates alone paid for the project.
      </blockquote>
      <figcaption className="flex items-center gap-3">
        <Avatar size="lg">
          <AvatarFallback className="bg-gradient-to-br from-primary to-chart-2 font-medium text-white">
            CL
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">Designali client</p>
          <p className="text-xs text-muted-foreground">
            Founder, studio client
          </p>
        </div>
      </figcaption>
    </figure>
  )
}
