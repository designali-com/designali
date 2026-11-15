import { QuoteIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"

export default function TestimonialAuthor() {
  return (
    <figure className="flex w-full max-w-sm flex-col gap-4 border p-5">
      <QuoteIcon className="size-5 text-muted-foreground" />
      <blockquote className="text-sm leading-relaxed">
        We cut our month-end close from six days to two. The reconciliation view
        alone paid for the subscription.
      </blockquote>
      <figcaption className="flex items-center gap-3">
        <Avatar size="lg">
          <AvatarFallback className="bg-gradient-to-br from-emerald-400 to-teal-600 font-medium text-white">
            CA
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">Celeste Arno</p>
          <p className="text-xs text-muted-foreground">
            Finance Lead, Brightwater Co.
          </p>
        </div>
      </figcaption>
    </figure>
  )
}
