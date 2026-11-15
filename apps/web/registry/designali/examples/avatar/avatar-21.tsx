import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { cn } from "@workspace/ui/lib/utils"

const workspaces = [
  { name: "Acorn Studio", short: "AS", tone: "bg-emerald-600" },
  { name: "Bluefin Labs", short: "BL", tone: "bg-sky-600" },
  { name: "Copperline", short: "CO", tone: "bg-orange-600" },
]

export default function SquareWorkspaceAvatars() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      {workspaces.map((workspace) => (
        <div
          key={workspace.name}
          className="flex items-center gap-3 border p-2"
        >
          <Avatar className="rounded-none after:rounded-none">
            <AvatarFallback
              className={cn(
                "rounded-none text-xs font-semibold text-white",
                workspace.tone
              )}
            >
              {workspace.short}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">{workspace.name}</span>
        </div>
      ))}
    </div>
  )
}
