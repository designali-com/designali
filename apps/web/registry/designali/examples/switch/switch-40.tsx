import { CameraIcon, ContactIcon, MicIcon, NavigationIcon } from "lucide-react"

import { Label } from "@workspace/ui/components/label"
import { Switch } from "@workspace/ui/components/switch"

const permissions = [
  {
    id: "camera",
    label: "Camera",
    icon: CameraIcon,
    used: "Used today",
    on: true,
  },
  {
    id: "microphone",
    label: "Microphone",
    icon: MicIcon,
    used: "Used 3 days ago",
    on: true,
  },
  {
    id: "location",
    label: "Location",
    icon: NavigationIcon,
    used: "Never used",
    on: false,
  },
  {
    id: "contacts",
    label: "Contacts",
    icon: ContactIcon,
    used: "Never used",
    on: false,
  },
]

export default function AppPermissions() {
  return (
    <div className="w-full max-w-xs border">
      <div className="border-b px-4 py-3">
        <p className="text-sm font-medium">Trailmate permissions</p>
        <p className="text-xs text-muted-foreground">
          Control what this app can access.
        </p>
      </div>
      {permissions.map((permission) => (
        <div
          key={permission.id}
          className="flex items-center gap-3 px-4 py-2.5"
        >
          <permission.icon className="size-4 text-muted-foreground" />
          <div className="flex-1">
            <Label htmlFor={"perm-" + permission.id}>{permission.label}</Label>
            <p className="text-xs text-muted-foreground">{permission.used}</p>
          </div>
          <Switch id={"perm-" + permission.id} defaultChecked={permission.on} />
        </div>
      ))}
    </div>
  )
}
