import {
  ScrollText as ScrollTextIcon,
} from "@designali/icons"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"

export default function AlertPolicyUpdate() {
  return (
    <Alert className="max-w-md">
      <ScrollTextIcon />
      <AlertTitle>We&apos;re updating our terms</AlertTitle>
      <AlertDescription>
        <p>
          On January 1, 2027 our Terms of Service and Privacy Policy change to
          cover new commercial licensing options for Designali templates.
        </p>
        <p>
          Continuing to use designali.com after that date means you accept the new
          terms. Review the <a href="/docs/legal/terms">Terms of Service</a> and the{" "}
          <a href="#">Privacy Policy</a>.
        </p>
      </AlertDescription>
    </Alert>
  )
}
