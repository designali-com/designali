import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@workspace/ui/components/avatar"
import {
  Popover,
  PopoverContent,
  PopoverTitle,
  PopoverTrigger,
} from "@workspace/ui/components/popover"

const members = [
  { name: "Rhea Kapoor", role: "Owner" },
  { name: "Dario Mendes", role: "Editor" },
  { name: "Hana Sato", role: "Editor" },
  { name: "Owen Brandt", role: "Viewer" },
  { name: "Grace Liu", role: "Viewer" },
  { name: "Ben Adler", role: "Viewer" },
  { name: "Farah Idris", role: "Editor" },
]

const initials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .join("")

export default function AvatarStackPopover() {
  const shown = members.slice(0, 3)
  const rest = members.length - shown.length

  return (
    <div className="flex items-center gap-2">
      <AvatarGroup>
        {shown.map((m) => (
          <Avatar key={m.name}>
            <AvatarFallback>{initials(m.name)}</AvatarFallback>
          </Avatar>
        ))}
        <Popover>
          <PopoverTrigger
            render={
              <button
                type="button"
                aria-label={"Show all " + members.length + " members"}
                className="rounded-full"
              />
            }
          >
            <AvatarGroupCount className="hover:bg-accent">
              +{rest}
            </AvatarGroupCount>
          </PopoverTrigger>
          <PopoverContent className="w-60" align="start">
            <PopoverTitle>{members.length} members</PopoverTitle>
            <ul className="flex max-h-48 flex-col gap-2 overflow-y-auto">
              {members.map((m) => (
                <li key={m.name} className="flex items-center gap-2 text-xs">
                  <Avatar size="sm">
                    <AvatarFallback>{initials(m.name)}</AvatarFallback>
                  </Avatar>
                  <span className="flex-1">{m.name}</span>
                  <span className="text-[11px] text-muted-foreground">
                    {m.role}
                  </span>
                </li>
              ))}
            </ul>
          </PopoverContent>
        </Popover>
      </AvatarGroup>
    </div>
  )
}
