import { AspectRatio } from "@workspace/ui/components/aspect-ratio"

export default function PhoneMockupScreen() {
  return (
    <div className="w-full max-w-44 rounded-[2rem] border-4 border-foreground/80 p-1">
      <AspectRatio
        ratio={9 / 19.5}
        className="overflow-hidden rounded-[1.6rem] bg-background"
      >
        <div className="absolute start-1/2 top-1.5 h-4 w-14 -translate-x-1/2 rounded-full bg-foreground/80 rtl:translate-x-1/2" />
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
    </div>
  )
}
