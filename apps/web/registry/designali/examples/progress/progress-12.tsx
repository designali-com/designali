import { PlayIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@workspace/ui/components/progress"

export default function CourseCompletionCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Foundations of Typography</CardTitle>
        <CardDescription>Module 3 &middot; Pairing typefaces</CardDescription>
      </CardHeader>
      <CardContent>
        <Progress value={14} max={22}>
          <ProgressLabel>14 of 22 lessons</ProgressLabel>
          <ProgressValue />
        </Progress>
      </CardContent>
      <CardFooter>
        <Button size="sm" className="w-full">
          <PlayIcon data-icon="inline-start" />
          Resume lesson 15
        </Button>
      </CardFooter>
    </Card>
  )
}
