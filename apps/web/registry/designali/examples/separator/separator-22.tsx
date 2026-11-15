import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Separator } from "@workspace/ui/components/separator"

export default function CardFooterActionsSeparator() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Delete project</CardTitle>
        <CardDescription>
          Removing Orbit CRM deletes 14 environments and all deployment history.
        </CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        This action can&apos;t be undone. Team members will lose access
        immediately.
      </CardContent>
      <Separator />
      <CardFooter className="justify-end gap-2">
        <Button variant="ghost">Cancel</Button>
        <Button variant="destructive">Delete project</Button>
      </CardFooter>
    </Card>
  )
}
