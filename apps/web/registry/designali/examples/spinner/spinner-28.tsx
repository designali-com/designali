import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Spinner } from "@workspace/ui/components/spinner"

export default function ReconnectingAlert() {
  return (
    <Alert className="w-full max-w-md">
      <Spinner />
      <AlertTitle>Reconnecting to server</AlertTitle>
      <AlertDescription>
        Your changes are kept locally and will sync once the connection is
        restored.
      </AlertDescription>
    </Alert>
  )
}
