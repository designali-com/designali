import {
  Sparkles as SparklesIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

export default function PopularPlanBadge() {
  return (
    <Card className="relative w-full max-w-xs ring-2 ring-primary">
      <Badge className="absolute start-1/2 -top-2.5 -translate-x-1/2 rtl:translate-x-1/2">
        <SparklesIcon data-icon="inline-start" />
        Most popular
      </Badge>
      <CardHeader>
        <CardTitle>Designali Pro</CardTitle>
        <CardDescription>
          All templates, 460+ blocks and 2300+ UI designs.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <p>
          <span className="text-3xl font-semibold">$49</span>
          <span className="text-muted-foreground"> / month</span>
        </p>
        <Button className="w-full">Get Designali Pro</Button>
      </CardContent>
    </Card>
  )
}
