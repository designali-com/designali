import { MailIcon, MessageSquareIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent } from "@workspace/ui/components/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@workspace/ui/components/carousel"

const people = [
  { name: "Hana Ito", role: "Product Designer", status: "Online" },
  { name: "Marco Bell", role: "Staff Engineer", status: "In a meeting" },
  { name: "Priya Shah", role: "Data Analyst", status: "Online" },
  { name: "Jon Weller", role: "Support Lead", status: "Away" },
  { name: "Sofia Lund", role: "Recruiter", status: "Online" },
]

export default function TeamDirectoryCarousel() {
  return (
    <Carousel
      opts={{ align: "start" }}
      className="w-full max-w-[14rem] sm:max-w-md"
    >
      <CarouselContent>
        {people.map((person) => (
          <CarouselItem key={person.name} className="sm:basis-1/2">
            <Card size="sm">
              <CardContent className="flex flex-col items-center gap-2 text-center">
                <Avatar size="lg">
                  <AvatarFallback>
                    {person.name
                      .split(" ")
                      .map((p) => p[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{person.name}</p>
                  <p className="text-xs text-muted-foreground">{person.role}</p>
                </div>
                <Badge
                  variant={person.status === "Online" ? "secondary" : "outline"}
                >
                  {person.status}
                </Badge>
                <div className="flex gap-1">
                  <Button
                    size="icon-sm"
                    variant="outline"
                    aria-label={"Message " + person.name}
                  >
                    <MessageSquareIcon />
                  </Button>
                  <Button
                    size="icon-sm"
                    variant="outline"
                    aria-label={"Email " + person.name}
                  >
                    <MailIcon />
                  </Button>
                </div>
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
