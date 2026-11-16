import { AspectRatio } from "@workspace/ui/components/aspect-ratio"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

export default function CardMediaHeader() {
  return (
    <Card className="w-full max-w-xs gap-0 overflow-hidden pt-0">
      <AspectRatio
        ratio={2}
        className="bg-linear-to-r from-primary to-chart-2"
      >
        <svg
          viewBox="0 0 200 100"
          className="absolute inset-0 size-full text-white/20"
          aria-hidden="true"
        >
          <path
            d="M0 80 Q50 40 100 70 T200 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M0 95 Q60 60 120 85 T200 70"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </AspectRatio>
      <CardHeader className="pt-4">
        <CardTitle>Designali Dashboard</CardTitle>
        <CardDescription>
          Track template sales, block downloads and client projects in one view.
        </CardDescription>
      </CardHeader>
      <CardFooter className="pt-4">
        <Button size="sm" className="w-full">
          Open dashboard
        </Button>
      </CardFooter>
    </Card>
  )
}
