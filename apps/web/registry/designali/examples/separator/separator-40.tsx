import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import { Separator } from "@workspace/ui/components/separator"

export default function AuthorBioSeparator() {
  return (
    <div className="flex w-full max-w-md flex-col gap-5">
      <p className="text-sm text-muted-foreground">
        ...and that is why every Designali block starts in Figma and ships as
        production-ready code. Thanks for reading.
      </p>
      <Separator />
      <div className="flex items-start gap-3">
        <Avatar size="lg">
          <AvatarImage src="/ali.jpg" alt="Ali Imam" />
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
        <div className="flex flex-1 flex-col gap-1">
          <span className="text-sm font-medium">Ali Imam</span>
          <span className="text-xs text-muted-foreground">
            Founder of Designali. Designing and coding digital experiences.
          </span>
        </div>
        <Button variant="outline" size="sm">
          Follow
        </Button>
      </div>
    </div>
  )
}
