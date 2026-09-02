import { FAQSection } from "@/src/components/home/faq"
import { HeroSection } from "@/src/components/home/hero"
import { Journey } from "@/src/components/home/journey"
import { Testimonials } from "@/src/components/home/testmonials"
 

export default function Page() {
  return (
    <div className="">
      <HeroSection />
      <Journey />
      <Testimonials />
      <FAQSection />
       
    </div>
  )
}
