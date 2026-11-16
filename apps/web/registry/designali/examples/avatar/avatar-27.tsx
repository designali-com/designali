import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
} from "@workspace/ui/components/avatar"

export default function TypingIndicatorAvatar() {
  return (
    <div className="flex items-end gap-2">
      <Avatar size="sm">
        <AvatarFallback>AI</AvatarFallback>
        <AvatarBadge className="bg-primary" />
      </Avatar>
      <div
        className="flex items-center gap-1 bg-muted px-3 py-2.5"
        aria-label="Ali is typing"
      >
        <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]" />
        <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]" />
        <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground" />
      </div>
      <span className="text-xs text-muted-foreground">Ali is typing...</span>
    </div>
  )
}
