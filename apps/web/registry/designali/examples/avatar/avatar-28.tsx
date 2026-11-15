import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@workspace/ui/components/avatar"

const readers = ["AB", "CF", "DG", "EH", "IJ", "KM"]

export default function SeenByReceipts() {
  return (
    <div className="flex w-full max-w-xs flex-col items-end gap-1.5">
      <p className="bg-primary px-3 py-2 text-sm text-primary-foreground">
        Standup moved to 9:30 tomorrow.
      </p>
      <div className="flex items-center gap-2">
        <span className="text-[11px] text-muted-foreground">Seen by</span>
        <AvatarGroup className="-space-x-1.5">
          {readers.slice(0, 4).map((value) => (
            <Avatar key={value} className="size-4 ring-1!">
              <AvatarFallback className="text-[8px]">{value}</AvatarFallback>
            </Avatar>
          ))}
          <AvatarGroupCount className="size-4 text-[8px] ring-1">
            +{readers.length - 4}
          </AvatarGroupCount>
        </AvatarGroup>
      </div>
    </div>
  )
}
