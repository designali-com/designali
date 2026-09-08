import {
    Alert,
    AlertDescription,
    AlertTitle,
  } from "@workspace/ui/components/alert";
  
  export default function AlertDemo() {
    return (
      <Alert className="max-w-80">
        <AlertTitle>Designali UI</AlertTitle>
        <AlertDescription>
          <p>Explore beautiful, customizable components built for modern web applications.</p>
        </AlertDescription>
      </Alert>
    );
  }