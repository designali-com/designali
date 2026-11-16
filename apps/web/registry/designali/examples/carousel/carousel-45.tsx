import {
  ArrowUpRight as ArrowUpRightIcon,
  MapPin as MapPinIcon,
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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@workspace/ui/components/carousel"

const jobs = [
  {
    title: "Design Engineer (Next.js)",
    team: "Development",
    location: "Remote · EU",
    type: "Full-time",
  },
  {
    title: "UI/UX Designer",
    team: "Design",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Motion & CGI Artist",
    team: "Creative",
    location: "Remote · US",
    type: "Part-time",
  },
  {
    title: "Brand Designer",
    team: "Identity",
    location: "Remote",
    type: "Contract",
  },
]

export default function JobListingsCarousel() {
  return (
    <Carousel
      opts={{ align: "start" }}
      className="w-full max-w-[15rem] sm:max-w-md"
    >
      <CarouselContent>
        {jobs.map((job) => (
          <CarouselItem key={job.title} className="sm:basis-1/2">
            <Card size="sm" className="h-full">
              <CardHeader>
                <CardDescription>{job.team}</CardDescription>
                <CardTitle>{job.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline">
                    <MapPinIcon />
                    {job.location}
                  </Badge>
                  <Badge variant="secondary">{job.type}</Badge>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  nativeButton={false}
                  render={<a href="/contact" />}
                >
                  View role
                  <ArrowUpRightIcon data-icon="inline-end" />
                </Button>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
