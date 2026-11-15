import { AspectRatio } from "@workspace/ui/components/aspect-ratio"

export default function LaptopScreenMockup() {
  return (
    <div className="w-full max-w-md">
      <div className="mx-[6%] rounded-t-lg border-[6px] border-b-0 border-zinc-800 dark:border-zinc-600">
        <AspectRatio ratio={16 / 10} className="bg-background">
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-[auto_1fr] gap-1.5 p-2">
            {["$48k", "1,204", "3.2%"].map((stat) => (
              <div key={stat} className="border p-1.5">
                <div className="h-1 w-1/2 bg-muted" />
                <p className="mt-1 text-[10px] font-semibold">{stat}</p>
              </div>
            ))}
            <div className="col-span-3 flex items-end gap-1 border p-1.5">
              {[40, 65, 50, 80, 60, 90, 75].map((height, i) => (
                <div
                  key={i}
                  className="flex-1 bg-primary/70"
                  style={{ height: height + "%" }}
                />
              ))}
            </div>
          </div>
        </AspectRatio>
      </div>
      <div className="h-3 rounded-b-xl bg-zinc-300 dark:bg-zinc-700" />
    </div>
  )
}
