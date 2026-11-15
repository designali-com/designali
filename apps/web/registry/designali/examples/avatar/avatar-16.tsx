import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@workspace/ui/components/avatar"

const sizes = ["sm", "default", "lg"] as const
const initials = ["BK", "MT", "ZA"]

export default function AvatarGroupSizeScale() {
  return (
    <div className="flex flex-col items-start gap-4">
      {sizes.map((size) => (
        <div key={size} className="flex items-center gap-4">
          <span className="w-14 text-xs text-muted-foreground">{size}</span>
          <AvatarGroup>
            {initials.map((value) => (
              <Avatar key={value} size={size}>
                <AvatarFallback>{value}</AvatarFallback>
              </Avatar>
            ))}
            <AvatarGroupCount>+8</AvatarGroupCount>
          </AvatarGroup>
        </div>
      ))}
    </div>
  )
}
