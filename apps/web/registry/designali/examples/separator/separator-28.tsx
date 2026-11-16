import {
  Plane as PlaneIcon,
} from "@designali/icons"

import { Separator } from "@workspace/ui/components/separator"

export default function BoardingPassStub() {
  return (
    <div className="flex w-full max-w-sm overflow-hidden border bg-card">
      <div className="flex flex-1 flex-col gap-3 p-4">
        <span className="text-[10px] tracking-widest text-muted-foreground uppercase">
          Boarding pass
        </span>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-semibold">LIS</span>
          <PlaneIcon className="size-4 text-muted-foreground" />
          <span className="text-2xl font-semibold">CPH</span>
        </div>
        <div className="flex gap-4 text-xs">
          <span className="flex flex-col">
            <span className="text-muted-foreground">Gate</span>B14
          </span>
          <span className="flex flex-col">
            <span className="text-muted-foreground">Boards</span>07:40
          </span>
        </div>
      </div>
      <div className="relative flex">
        <span className="absolute -start-2 -top-2 size-4 rounded-full border bg-background" />
        <Separator
          orientation="vertical"
          className="bg-transparent bg-[repeating-linear-gradient(180deg,var(--border)_0_5px,transparent_5px_10px)]"
        />
        <span className="absolute -start-2 -bottom-2 size-4 rounded-full border bg-background" />
      </div>
      <div className="flex w-20 flex-col items-center justify-center gap-1 p-3 text-xs">
        <span className="text-muted-foreground">Seat</span>
        <span className="text-xl font-semibold">14C</span>
      </div>
    </div>
  )
}
