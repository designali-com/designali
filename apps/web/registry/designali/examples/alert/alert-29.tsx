import {
  CalendarX as CalendarXIcon,
} from "@designali/icons"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

export default function AlertExpiredCardInCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Payment method</CardTitle>
        <CardDescription>Used for your Designali Pro renewal.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <Alert variant="error">
          <CalendarXIcon />
          <AlertTitle>Card expired</AlertTitle>
          <AlertDescription>
            Your next invoice on Dec 1 will fail unless you update it.
          </AlertDescription>
        </Alert>
        <div className="flex items-center gap-3 border p-2.5">
          <span className="flex h-7 w-10 items-center justify-center bg-muted text-[10px] font-semibold">
            VISA
          </span>
          <div className="flex-1 text-xs">
            <p className="font-medium">&bull;&bull;&bull;&bull; 4821</p>
            <p className="text-muted-foreground">Expired 10/26</p>
          </div>
          <Button size="xs">Replace</Button>
        </div>
      </CardContent>
    </Card>
  )
}
