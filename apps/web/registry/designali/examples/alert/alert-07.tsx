import { CircleAlertIcon } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert";

export default function AlertDemo() {
  return (
    <Alert variant="error" className="max-w-80">
      <CircleAlertIcon />
      <AlertTitle>Designali UI</AlertTitle>
      <AlertDescription>
        Explore beautiful, customizable components built for modern web applications.
      </AlertDescription>
    </Alert>
  );
}