import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"

import { Section } from "./section-shell"

const faqs = [
  { q: "How fast will I receive my designs?", a: "On average within 48 hours per request. Larger work like a full website is broken into steps with updates every couple of days." },
  { q: "How does onboarding work?", a: "Book a short intro call, then we set up your shared design board, collect your brand assets and start on your first request within days." },
  { q: "Is there a limit to how many requests I can make?", a: "No. Add as many as you like to the queue. We work through them one at a time, in the order you prioritise." },
  { q: "Do you also develop the website?", a: "Yes. We build in Framer, Webflow or Next.js, so what you approve is exactly what ships." },
  { q: "How do larger projects work?", a: "We split them into clear milestones, such as brand, then landing page, then product screens, and move through them one by one on the same subscription." },
  { q: "What if I don't like a design?", a: "Revisions are unlimited. Share feedback and we iterate until it feels right." },
  { q: "Can I pause or cancel?", a: "Anytime. Pause when you have nothing to request and resume when you're ready, with no long-term commitment." },
  { q: "Who owns the work?", a: "You do. Every design is made for you and delivered with full source files." },
  { q: "What if I only have a single project?", a: "That's fine. Subscribe for a month, finish your project, then cancel." },
]

export function Faq() {
  return (
    <Section id="faq" title="Questions, answered">
      <div className="max-w-xl mx-auto">
      <Accordion defaultValue={[faqs[0]?.q ?? ""]} className="border border-dotted px-4">
        {faqs.map((f) => (
          <AccordionItem key={f.q} value={f.q} className="border-dotted">
            <AccordionTrigger>{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      </div>
    </Section>
  )
}
