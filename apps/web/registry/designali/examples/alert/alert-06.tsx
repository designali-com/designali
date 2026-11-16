import {
  TriangleAlert as TriangleAlertIcon,
} from "@designali/icons"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert";

export default function AlertDemo() {
  return (
    <Alert variant="warning" className="max-w-80">
      <TriangleAlertIcon />
      <AlertTitle>Designali UI</AlertTitle>
      <AlertDescription>
        Explore beautiful, customizable components built for modern web applications.
      </AlertDescription>
    </Alert>
  );
}