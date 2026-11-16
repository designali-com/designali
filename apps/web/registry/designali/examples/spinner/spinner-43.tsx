import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Spinner } from "@workspace/ui/components/spinner"

export default function DeletingConfirmation() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Delete project &quot;Dalim Works&quot;?</CardTitle>
        <CardDescription>
          This removes 38 environments and all deployment history. This
          can&apos;t be undone.
        </CardDescription>
      </CardHeader>
      <CardFooter className="justify-end gap-2">
        <Button variant="outline" disabled>
          Cancel
        </Button>
        <Button variant="destructive" disabled>
          <Spinner data-icon="inline-start" />
          Deleting...
        </Button>
      </CardFooter>
    </Card>
  )
}
