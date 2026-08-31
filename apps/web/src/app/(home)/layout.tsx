import { Footer } from "@/src/components/layout/footer"
import { Header } from "@/src/components/layout/header"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <>
      <Header />
      <main className="mt-10 flex-1 border-b border-dotted">{children}</main>
      <Footer />
    </>
  )
}
