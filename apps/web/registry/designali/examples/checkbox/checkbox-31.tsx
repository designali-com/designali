import {
  Lock as LockIcon,
} from "@designali/icons"

import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const envs = ["Dev", "Staging", "Prod"]
const flags = [
  { key: "templates-checkout", on: ["Dev", "Staging"] },
  { key: "ai-workflows", on: ["Dev"] },
  { key: "dark-mode-v2", on: ["Dev", "Staging", "Prod"] },
  { key: "usage-billing", on: [] as string[], locked: true },
]

export default function FeatureFlagEnvironments() {
  return (
    <Table className="w-full max-w-md">
      <TableHeader>
        <TableRow>
          <TableHead>Flag</TableHead>
          {envs.map((env) => (
            <TableHead key={env} className="w-16 text-center">
              {env}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {flags.map((flag) => (
          <TableRow key={flag.key}>
            <TableCell className="font-sans text-xs">
              {flag.key}
              {flag.locked && (
                <LockIcon className="ms-1 inline size-3 text-muted-foreground" />
              )}
            </TableCell>
            {envs.map((env) => (
              <TableCell key={env}>
                <div className="flex justify-center">
                  <Checkbox
                    aria-label={flag.key + " in " + env}
                    defaultChecked={flag.on.includes(env)}
                    disabled={flag.locked}
                  />
                </div>
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
