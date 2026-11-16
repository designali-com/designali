import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@workspace/ui/components/avatar"
  import { Button } from "@workspace/ui/components/button"
  import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@workspace/ui/components/hover-card"
  
  export function HoverCardDemo() {
    return (
      <HoverCard>
        <HoverCardTrigger delay={10} closeDelay={100} render={<Button variant="link">Hover Here</Button>} />
        <HoverCardContent className="flex w-64 flex-col gap-0.5">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="/ali.jpg" alt="Ali Imam" />
              <AvatarFallback>AI</AvatarFallback>
            </Avatar>
            <div className="font-semibold">@designali_com</div>
          </div>
          <div>Design se code tak – a design &amp; development studio by Ali Imam.</div>
          <div className="mt-1 text-xs text-muted-foreground">
            designali.com
          </div>
        </HoverCardContent>
      </HoverCard>
    )
  }