import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"
import Link from "next/link"

export const Changelog = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn("relative mt-10 border-y border-dotted", className)}
      {...props}
    >
      {children}
    </div>
  )
}

export const ChangelogEntry = ({
  date,
  title,
  description,
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  date: string
  title: string
  description?: string
}) => {
  return (
    <div
      className={cn(
        "relative grid grid-cols-[180px_1fr] border-b last:border-b-0",
        "max-md:grid-cols-[160px_1fr]",
        className
      )}
      {...props}
    >
      <div className="relative flex justify-end px-6 py-12 max-md:px-4">
        <Badge variant={"outline"} className="h-10 px-6">
          {date}
        </Badge>
      </div>

      <div className="absolute inset-y-0 left-[180px] z-10 max-md:left-[150px]">
        <div className="relative h-full w-px bg-border">
          <div
            className={cn(
              "absolute top-14 left-1/2",
              "-translate-x-1/2 bg-background p-3 ring-2 ring-border"
            )}
          >
            <div className="absolute inset-2.5 rounded-full bg-muted-foreground" />
          </div>
        </div>
      </div>

      <div className="min-w-0 px-24 py-12 max-md:px-8 max-md:py-10">
        <h3 className="text-xl font-medium">{title}</h3>

        {description && (
          <p className="mt-4 text-sm text-muted-foreground">{description}</p>
        )}

        {children && (
          <div className="mt-5 text-muted-foreground [&>ul]:my-0">
            {children}
          </div>
        )}
      </div>
    </div>
  )
}

export const ChangelogLinks = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div className={cn("mt-6 flex flex-wrap gap-2", className)} {...props}>
      {children}
    </div>
  )
}

export const ChangelogLink = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Link>) => {
  return (
    <Link
      target="_blank"
      className={cn(
        "inline-flex items-center",
        "px-3 py-1.5",
        "bg-primary/10 text-sm font-medium text-primary",
        "no-underline transition-colors",
        "hover:bg-primary/15",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
