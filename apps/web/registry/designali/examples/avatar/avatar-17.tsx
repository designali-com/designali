import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent } from "@workspace/ui/components/card"

export default function ProfileCardHeader() {
  return (
    <Card className="w-full max-w-xs">
      <CardContent className="flex flex-col items-center gap-3 text-center">
        <Avatar className="size-20">
          <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-2xl font-semibold text-white">
            GB
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-base font-semibold">Greta Bauer</p>
          <p className="text-xs text-muted-foreground">
            Product designer at Lumen Labs
          </p>
        </div>
        <div className="flex gap-6 text-xs">
          <div>
            <span className="block text-sm font-semibold">248</span>Posts
          </div>
          <div>
            <span className="block text-sm font-semibold">12.4k</span>Followers
          </div>
          <div>
            <span className="block text-sm font-semibold">310</span>Following
          </div>
        </div>
        <Button className="w-full">Follow</Button>
      </CardContent>
    </Card>
  )
}
