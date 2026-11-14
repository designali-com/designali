import { Approach } from "@/src/components/home/approach"
import { Benefits } from "@/src/components/home/benefits"
import { Clients } from "@/src/components/home/clients"
import { Compare } from "@/src/components/home/compare"
import { Cta } from "@/src/components/home/cta"
import { Faq } from "@/src/components/home/faq"
import { Hero } from "@/src/components/home/hero"
import { Pricing } from "@/src/components/home/pricing"
import { Process } from "@/src/components/home/process"
import { Services } from "@/src/components/home/services"
import { TrustSection } from "@/src/components/home/trust"
import { Works } from "@/src/components/home/works"

export default function Page() {
  return (
    <div>
      <Hero />
      <TrustSection />
      <Clients />
      <Services />
      <Works />
      <Process />
      <Approach />
      <Benefits />
      <Compare />
      <Pricing />
      <Faq />
      <Cta />
    </div>
  )
}
