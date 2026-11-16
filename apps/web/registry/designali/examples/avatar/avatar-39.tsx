import {
  Check as CheckIcon,
  Clock as ClockIcon,
  X as XIcon,
} from "@designali/icons"

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
} from "@workspace/ui/components/avatar"

const reviewers = [
  { name: "Ali Imam", initials: "AI", state: "Approved" },
  { name: "Sara", initials: "SA", state: "Changes requested" },
  { name: "Client", initials: "CL", state: "Pending" },
]

export default function ReviewerApprovalStatus() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
        Reviewers
      </p>
      {reviewers.map((reviewer) => (
        <div key={reviewer.name} className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>{reviewer.initials}</AvatarFallback>
            {reviewer.state === "Approved" && (
              <AvatarBadge className="bg-emerald-500 text-white">
                <CheckIcon />
              </AvatarBadge>
            )}
            {reviewer.state === "Changes requested" && (
              <AvatarBadge className="bg-red-500 text-white">
                <XIcon />
              </AvatarBadge>
            )}
            {reviewer.state === "Pending" && (
              <AvatarBadge className="bg-amber-500 text-white">
                <ClockIcon />
              </AvatarBadge>
            )}
          </Avatar>
          <div>
            <p className="text-sm">{reviewer.name}</p>
            <p className="text-xs text-muted-foreground">{reviewer.state}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
