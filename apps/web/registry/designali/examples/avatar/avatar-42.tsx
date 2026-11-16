import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"

const percent = 70
const radius = 30
const circumference = 2 * Math.PI * radius

export default function ProfileCompletionRing() {
  return (
    <div className="flex w-full max-w-xs items-center gap-4 border p-4">
      <div className="relative size-16 shrink-0">
        <svg viewBox="0 0 64 64" className="absolute inset-0 -rotate-90">
          <circle
            cx="32"
            cy="32"
            r={radius}
            fill="none"
            strokeWidth="3"
            className="stroke-muted"
          />
          <circle
            cx="32"
            cy="32"
            r={radius}
            fill="none"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - percent / 100)}
            className="stroke-primary"
          />
        </svg>
        <Avatar className="absolute inset-1.5 size-auto">
          <AvatarFallback className="font-medium">AI</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <p className="text-sm font-medium">Profile {percent}% complete</p>
        <p className="text-xs text-muted-foreground">
          Add a bio and portfolio link to your Designali profile.
        </p>
      </div>
    </div>
  )
}
