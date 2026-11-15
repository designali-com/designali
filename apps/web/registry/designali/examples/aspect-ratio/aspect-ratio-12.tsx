import { AspectRatio } from "@workspace/ui/components/aspect-ratio"
import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"

export default function ProfileBannerAvatar() {
  return (
    <div className="w-full max-w-md border">
      <AspectRatio
        ratio={3}
        className="bg-linear-to-r from-emerald-400 via-cyan-400 to-blue-500"
      />
      <div className="flex items-end justify-between gap-3 px-4 pb-4">
        <Avatar className="-mt-8 size-16 ring-4 ring-background">
          <AvatarFallback className="text-lg">OB</AvatarFallback>
        </Avatar>
        <Button size="sm">Follow</Button>
      </div>
      <div className="px-4 pb-4">
        <p className="text-sm font-semibold">Oren Baxter</p>
        <p className="text-xs text-muted-foreground">
          Product designer - Lisbon
        </p>
      </div>
    </div>
  )
}
