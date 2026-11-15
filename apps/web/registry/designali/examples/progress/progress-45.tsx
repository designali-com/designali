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
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Progress } from "@workspace/ui/components/progress"

export default function FormSectionCardProgress() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Rental application</CardTitle>
        <CardDescription>Section 2: Employment</CardDescription>
        <CardAction>
          <span className="text-xs text-muted-foreground">40%</span>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Progress value={40} aria-label="Application progress" />
        <div className="flex flex-col gap-2">
          <Label htmlFor="employer-name">Employer</Label>
          <Input id="employer-name" placeholder="Northwind Studio" />
        </div>
      </CardContent>
      <CardFooter className="justify-end">
        <Button size="sm">Save and continue</Button>
      </CardFooter>
    </Card>
  )
}
