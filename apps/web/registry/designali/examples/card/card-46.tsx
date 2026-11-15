import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

const sizes = ["default", "sm"] as const

export default function CardSizeComparison() {
  return (
    <div className="grid w-full max-w-lg gap-3 sm:grid-cols-2">
      {sizes.map((size) => (
        <Card key={size} size={size}>
          <CardHeader>
            <CardTitle>Backup schedule</CardTitle>
            <CardDescription>Nightly at 02:00 UTC</CardDescription>
            <CardAction>
              <Badge variant="outline">{size}</Badge>
            </CardAction>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Last backup completed 6 hours ago, 4.1 GB.
          </CardContent>
          <CardFooter>
            <Button size="sm" variant="outline" className="w-full">
              Run now
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
