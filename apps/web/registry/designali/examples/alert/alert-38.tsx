import { ScrollTextIcon } from "lucide-react"

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
          cover new data residency options for EU workspaces.
        </p>
        <p>
          Continuing to use Lumen after that date means you accept the new
          terms. Review the <a href="#">Terms of Service</a> and the{" "}
          <a href="#">Privacy Policy</a>.
        </p>
      </AlertDescription>
    </Alert>
  )
}
