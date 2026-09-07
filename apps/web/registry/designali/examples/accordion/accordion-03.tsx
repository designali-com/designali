/* eslint-disable @next/next/no-img-element */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { Button } from "@workspace/ui/components/button"

const items = [
  {
    id: "01",
    title: "Who am I?",
    img: "/img/chat-1-light.jpg",
    content:
      "I’m Ali Imam — a multidisciplinary designer and creative developer crafting thoughtful digital experiences with purpose and precision.",
  },
  {
    id: "02",
    title: "What do I design?",
    img: "/img/dashboard-1-dark.jpg",
    content:
      "I design intuitive interfaces, visual identities, and digital products that connect clarity with emotion — always guided by simplicity and usability.",
  },
  {
    id: "03",
    title: "My design approach",
    img: "/img/hero-1.jpg",
    content:
      "Every project begins with understanding. I combine logic, emotion, and craft to create experiences that feel effortless and meaningful.",
  },
  {
    id: "04",
    title: "Philosophy & values",
    img: "/img/hero-2.jpg",
    content:
      "Design should be timeless — not trendy. I value honesty in visuals, restraint in detail, and intention in every decision I make.",
  },
  {
    id: "05",
    title: "Beyond design",
    img: "/img/login-1.jpg",
    content:
      "Outside of work, I explore photography, motion, and creative coding — all ways to see and shape the world differently.",
  },
]

export default function Accordion03() {
  return (
    <div className="mx-auto flex w-full max-w-3xl items-center justify-center border">
      <Accordion defaultValue={["02"]} className="h-full w-full">
        {items.map((item) => (
          <AccordionItem
            value={item.id}
            key={item.id}
            className="relative overflow-hidden"
          >
            <AccordionTrigger
              className="group px-6 hover:no-underline [&>svg]:hidden data-[state=open]:h-40"
            >
              <h2 className="text-lg font-semibold md:text-xl">
                {item.title}
              </h2>
            </AccordionTrigger>

            <AccordionContent className="w-full p-0 pr-4">
              <div className="flex h-full w-full flex-col md:flex-row">
                {/* Content */}
                <div className="flex w-full shrink-0 flex-col justify-between gap-6 p-6 md:w-80">
                  <p className="text-muted-foreground">
                    {item.content}
                  </p> 
                  <Button className="w-fit">
                    View More
                  </Button>
                </div>

                {/* Image */}
                <div className="min-h-0 flex-1 border border-b-0">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
