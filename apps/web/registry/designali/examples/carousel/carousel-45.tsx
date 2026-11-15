import { ArrowUpRightIcon, MapPinIcon } from "lucide-react"

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
    title: "Senior Frontend Engineer",
    team: "Platform",
    location: "Remote · EU",
    type: "Full-time",
  },
  {
    title: "Product Designer",
    team: "Growth",
    location: "Lisbon",
    type: "Full-time",
  },
  {
    title: "Support Specialist",
    team: "Customer",
    location: "Remote · US",
    type: "Part-time",
  },
  {
    title: "Data Engineer",
    team: "Insights",
    location: "Berlin",
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
                  render={<a href="#" />}
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
