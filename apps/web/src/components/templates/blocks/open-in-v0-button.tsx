import { cn } from "@workspace/ui/lib/utils"

import { V0 } from "@workspace/ui/common/logos"

import { Button } from "@workspace/ui/components/button"

export function OpenInV0Button({
  name,
  className,
  ...props
}: React.ComponentProps<typeof Button> & {
  name: string
}) {
  return (
    <Button
      nativeButton={false}
      size="icon-sm"
      variant={"ghost"}
      className={cn("", className)}
      {...props}
      render={
        <a
          href={`${process.env.NEXT_PUBLIC_V0_URL}/chat/api/open?url=${process.env.NEXT_PUBLIC_APP_URL}/r/${name}.json`}
          target="_blank"
        />
      }
    >
      <V0 />
    </Button>
  )
}
