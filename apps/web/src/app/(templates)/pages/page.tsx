import { BlockDisplay } from "@/src/components/templates/blocks/block-display"
 
export const dynamic = "force-static"
export const revalidate = false

const FEATURED_PAGES = ["landing-01"]

export default function PagesPage() {
  return (
    <div className="mb-20 mt-10"> 
      <div className="flex m-3 flex-col gap-12 md:gap-24">
        {FEATURED_PAGES.map((name) => (
          <BlockDisplay key={name} name={name} />
        ))}
      </div>
    </div>
  )
}
