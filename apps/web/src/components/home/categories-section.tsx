import Link from "next/link"
import * as Icons from "lucide-react"
import { uiCategories } from "@/registry/registry-categories"

// Dynamically icon render karne ke liye helper component
function CategoryIcon({ name }: { name: string }) {
  const IconComponent = (Icons as unknown as Record<string, React.ElementType>)[name] || Icons.HelpCircle
  return <IconComponent className="h-4 w-4 shrink-0 text-muted-foreground" />
}

export function UIDesignCategory() {
  return (
    <div className="">
      <div className="relative flex items-center justify-center border-x border-t border-dotted">
        <div className="w-full max-w-5xl p-6 lg:border-x border-dotted">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-2 lg:grid-cols-4">
            {uiCategories
              .filter((category) => !category.hidden).slice(0, 24)
              .map((category) => (
                <Link
                  key={category.slug}
                  href={`/ui/${category.slug}`}
                  className="block"
                >
                  <div className="flex w-full items-center justify-between border px-4 py-2 transition-colors hover:bg-muted">
                    <div className="flex items-center gap-2.5 min-w-0">
                      {/* Icon Render */}
                      <CategoryIcon name={category.iconName} />

                      <div className="min-w-0">
                        <p className="truncate font-medium">{category.name}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}