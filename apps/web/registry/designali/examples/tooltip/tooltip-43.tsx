import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

const params = [
  { name: "limit", type: "number", def: "20" },
  { name: "cursor", type: "string | null", def: "null" },
  { name: "expand", type: "string[]", def: "[]" },
]

export default function ApiParamTypeTooltips() {
  return (
    <TooltipProvider>
      <div className="flex w-full max-w-sm flex-col gap-2 border p-3">
        <span className="font-sans text-xs text-muted-foreground">
          GET /v1/invoices
        </span>
        <div className="flex flex-wrap gap-1.5">
          {params.map((p) => (
            <Tooltip key={p.name}>
              <TooltipTrigger
                render={
                  <code
                    tabIndex={0}
                    className="cursor-help bg-muted px-1.5 py-0.5 font-sans text-xs"
                  />
                }
              >
                {p.name}
              </TooltipTrigger>
              <TooltipContent className="font-sans">
                {p.type} = {p.def}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  )
}
