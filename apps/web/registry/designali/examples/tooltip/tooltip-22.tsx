import {
  ExternalLink as ExternalLinkIcon,
} from "@designali/icons"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

export default function ExternalLinkTooltip() {
  return (
    <TooltipProvider>
      <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
        Read the{" "}
        <Tooltip>
          <TooltipTrigger
            render={
              <a
                href="#"
                className="font-medium text-foreground underline underline-offset-4"
              />
            }
          >
            migration guide
          </TooltipTrigger>
          <TooltipContent>
            <ExternalLinkIcon className="size-3" />
            designali.com/docs
          </TooltipContent>
        </Tooltip>{" "}
        before upgrading, and check the{" "}
        <Tooltip>
          <TooltipTrigger
            render={
              <a
                href="#"
                className="font-medium text-foreground underline underline-offset-4"
              />
            }
          >
            changelog
          </TooltipTrigger>
          <TooltipContent>
            <ExternalLinkIcon className="size-3" />
            designali.com/blogs
          </TooltipContent>
        </Tooltip>{" "}
        for breaking changes.
      </p>
    </TooltipProvider>
  )
}
