import {
  CircleQuestionMark as CircleHelpIcon,
} from "@designali/icons"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

const columns = [
  { label: "Campaign", help: null },
  { label: "CTR", help: "Clicks divided by impressions." },
  { label: "CPA", help: "Spend divided by conversions." },
]
const rows = [
  ["Designali templates", "3.4%", "$18.20"],
  ["@designali/icons", "5.1%", "$9.75"],
]

export default function TableHeaderHelpTooltips() {
  return (
    <TooltipProvider>
      <Table className="max-w-sm">
        <TableHeader>
          <TableRow>
            {columns.map((c) => (
              <TableHead key={c.label}>
                <span className="inline-flex items-center gap-1">
                  {c.label}
                  {c.help ? (
                    <Tooltip>
                      <TooltipTrigger
                        render={
                          <button
                            type="button"
                            aria-label={"About " + c.label}
                            className="text-muted-foreground"
                          />
                        }
                      >
                        <CircleHelpIcon className="size-3" />
                      </TooltipTrigger>
                      <TooltipContent>{c.help}</TooltipContent>
                    </Tooltip>
                  ) : null}
                </span>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((r) => (
            <TableRow key={r[0]}>
              {r.map((cell) => (
                <TableCell key={cell}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TooltipProvider>
  )
}
