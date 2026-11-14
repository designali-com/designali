import { cn } from "@workspace/ui/lib/utils"

export function Section({
  id,
  title,
  eyebrow,
  children,
  className,
}: {
  id?: string
  title: string
  eyebrow?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative mx-auto w-full max-w-6xl scroll-mt-20 border-x border-t border-dotted",
        className
      )}
    >
      <div className="flex items-center justify-between gap-4 border-b border-dotted p-4">
        <h2 className="text-md text-primary">{title}</h2>
        {eyebrow && (
          <span className="hidden text-xs text-muted-foreground sm:block">
            {eyebrow}
          </span>
        )}
      </div>
      <div className="p-2">{children}</div>
    </section>
  )
}
