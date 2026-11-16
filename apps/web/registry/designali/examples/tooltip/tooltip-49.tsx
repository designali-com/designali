"use client"

import * as React from "react"
import {
  ZoomIn as ZoomInIcon,
  ZoomOut as ZoomOutIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { ButtonGroup } from "@workspace/ui/components/button-group"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

export default function ButtonGroupTooltips() {
  const [zoom, setZoom] = React.useState(100)

  return (
    <TooltipProvider>
      <ButtonGroup>
        <Tooltip>
          <TooltipTrigger
            closeOnClick={false}
            onClick={() => setZoom((z) => Math.max(25, z - 25))}
            render={
              <Button variant="outline" size="icon" aria-label="Zoom out" />
            }
          >
            <ZoomOutIcon />
          </TooltipTrigger>
          <TooltipContent>Zoom out</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger
            closeOnClick={false}
            onClick={() => setZoom(100)}
            render={<Button variant="outline" className="w-16 tabular-nums" />}
          >
            {zoom}%
          </TooltipTrigger>
          <TooltipContent>Reset to 100%</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger
            closeOnClick={false}
            onClick={() => setZoom((z) => Math.min(400, z + 25))}
            render={
              <Button variant="outline" size="icon" aria-label="Zoom in" />
            }
          >
            <ZoomInIcon />
          </TooltipTrigger>
          <TooltipContent>Zoom in</TooltipContent>
        </Tooltip>
      </ButtonGroup>
    </TooltipProvider>
  )
}
