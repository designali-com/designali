import {
  Info as InfoIcon,
} from "@designali/icons"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert";

export default function AlertDemo() {
  return (
    <Alert className="max-w-80">
      <InfoIcon />
      <AlertTitle>Designali UI</AlertTitle>
      <AlertDescription>
        Explore beautiful, customizable components built for modern web applications.
      </AlertDescription>
    </Alert>
  );
}