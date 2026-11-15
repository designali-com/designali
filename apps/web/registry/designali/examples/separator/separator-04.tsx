import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Separator } from "@workspace/ui/components/separator"

const stats = [
  { label: "Posts", value: "128" },
  { label: "Followers", value: "4.2k" },
  { label: "Following", value: "312" },
]

export default function ProfileCardSeparator() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-4 border p-4">
      <div className="flex items-center gap-3">
        <Avatar size="lg">
          <AvatarFallback>NR</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-sm font-medium">Nadia Reyes</span>
          <span className="text-xs text-muted-foreground">
            Illustrator in Valencia
          </span>
        </div>
      </div>
      <Separator />
      <div className="grid grid-cols-3 text-center">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col">
            <span className="text-sm font-semibold">{stat.value}</span>
            <span className="text-xs text-muted-foreground">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
