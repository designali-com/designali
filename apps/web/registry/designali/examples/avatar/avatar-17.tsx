import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent } from "@workspace/ui/components/card"

export default function ProfileCardHeader() {
  return (
    <Card className="w-full max-w-xs">
      <CardContent className="flex flex-col items-center gap-3 text-center">
        <Avatar className="size-20">
          <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-2xl font-semibold text-white">
            AI
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-base font-semibold">Ali Imam</p>
          <p className="text-xs text-muted-foreground">
            Design engineer at Designali
          </p>
        </div>
        <div className="flex gap-6 text-xs">
          <div>
            <span className="block text-sm font-semibold">460</span>Blocks
          </div>
          <div>
            <span className="block text-sm font-semibold">2.3k</span>UI designs
          </div>
          <div>
            <span className="block text-sm font-semibold">4k</span>Icons
          </div>
        </div>
        <Button className="w-full">Follow</Button>
      </CardContent>
    </Card>
  )
}
