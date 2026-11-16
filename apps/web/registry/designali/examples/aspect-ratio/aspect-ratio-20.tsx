import { AspectRatio } from "@workspace/ui/components/aspect-ratio"

import { IPhone } from "@/registry/designali/ui/apple/iphone"

export default function PhoneMockupScreen() {
  return (
    <IPhone variant="18-pro" size="sm" color="black">
      <AspectRatio ratio={9 / 19.5} className="bg-background">
        <div className="absolute inset-0 flex flex-col gap-2 px-3 pt-8 pb-3 text-[10px]">
          <p className="text-xs font-semibold">Designali client chat</p>
          <div className="max-w-[80%] self-start bg-muted px-2 py-1">
            Figma file ready?
          </div>
          <div className="max-w-[80%] self-end bg-primary px-2 py-1 text-primary-foreground">
            Sharing it now
          </div>
          <div className="max-w-[80%] self-start bg-muted px-2 py-1">
            Love the new hero!
          </div>
          <div className="mt-auto border px-2 py-1 text-muted-foreground">
            Message
          </div>
        </div>
      </AspectRatio>
    </IPhone>
  )
}
