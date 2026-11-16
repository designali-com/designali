import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"

const sizes = [
  { label: "XS", className: "size-5", text: "text-[9px]" },
  { label: "SM", className: "size-6", text: "text-xs" },
  { label: "MD", className: "size-8", text: "text-sm" },
  { label: "LG", className: "size-10", text: "text-sm" },
  { label: "XL", className: "size-14", text: "text-lg" },
  { label: "2XL", className: "size-20", text: "text-2xl" },
]

export default function CustomAvatarSizes() {
  return (
    <div className="flex flex-wrap items-end justify-center gap-4">
      {sizes.map((size) => (
        <div key={size.label} className="flex flex-col items-center gap-2">
          <Avatar className={size.className}>
            <AvatarFallback className={size.text}>AI</AvatarFallback>
          </Avatar>
          <span className="text-[10px] text-muted-foreground">
            {size.label}
          </span>
        </div>
      ))}
    </div>
  )
}
