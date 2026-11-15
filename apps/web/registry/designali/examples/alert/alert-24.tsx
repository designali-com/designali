import { FlaskConicalIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Badge } from "@workspace/ui/components/badge"

export default function AlertBetaFeature() {
  return (
    <Alert className="max-w-md">
      <FlaskConicalIcon />
      <AlertTitle className="flex items-center gap-2">
        AI summaries
        <Badge variant="outline">Beta</Badge>
      </AlertTitle>
      <AlertDescription>
        Summaries are generated for threads with more than 10 replies. Results
        may be imperfect. <a href="#">Share feedback</a>
      </AlertDescription>
    </Alert>
  )
}
