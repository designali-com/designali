import { Footer } from "@/src/components/layout/footer"
import { Header } from "@/src/components/layout/header"
import { CanvasRuler } from "@/src/components/ui/canvas-ruler"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <CanvasRuler>
      <Header />
      <main className="flex-1 border-b border-dotted">{children}</main>
      <Footer />
    </CanvasRuler>

  )
}
