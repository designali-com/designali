import { Skeleton } from "@workspace/ui/components/skeleton"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

export default function LoadingSkeletonTable() {
  return (
    <div className="w-full max-w-lg border" aria-busy="true">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>Plan</TableHead>
            <TableHead className="text-right">MRR</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 5 }).map((_, i) => (
            <TableRow key={i}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Skeleton className="size-6 rounded-full" />
                  <Skeleton className="h-3 w-28" />
                </div>
              </TableCell>
              <TableCell>
                <Skeleton className="h-3 w-16" />
              </TableCell>
              <TableCell>
                <Skeleton className="ms-auto h-3 w-12" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
