import {
  Info as InfoIcon,
} from "@designali/icons"
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert";
import { Button } from "@workspace/ui/components/button";

export default function AlertDemo() {
  return (
    <Alert className="max-w-80">
      <InfoIcon />
      <AlertTitle>Designali UI</AlertTitle>
      <AlertDescription>
        Explore beautiful, customizable components built for modern web applications.
      </AlertDescription>
      <AlertAction>
        <Button size="xs" variant="ghost">
          Dismiss
        </Button>
        <Button size="xs">Ok</Button>
      </AlertAction>
    </Alert>
  );
}