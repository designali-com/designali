import { Index } from "@/registry/__index__"
import { ComponentPreviewTabs } from "@/src/components/docs/component-preview-tabs"
import { ComponentSource } from "@/src/components/docs/component-source"
import { cn } from "@workspace/ui/lib/utils"

interface ComponentPreviewProps extends Omit<
  React.ComponentProps<"div">,
  "ref"
> {
  name: string
  align?: "center" | "start" | "end"
  description?: string
  hideCode?: boolean
}

export function ComponentPreview({
  name,
  className,
  align = "center",
  hideCode = false,
  ...props
}: ComponentPreviewProps) {
  const Component = Index[name]?.component
  const metaClassName = Index[name]?.meta?.className

  if (!Component) {
    return (
      <p className="text-sm text-muted-foreground">
        Component{" "}
        <code className="relative bg-muted px-[0.3rem] py-[0.2rem] font-mono text-[.8125rem]">
          {name}
        </code>{" "}
        not found in registry.
      </p>
    )
  }

  return (
    <div className="my-4 w-full min-w-0 overflow-hidden">
      <ComponentPreviewTabs
        align={align}
        className={cn("w-full min-w-0", metaClassName, className)}
        component={
          <div className="flex w-full min-w-0 items-center justify-center overflow-x-auto p-4">
            <Component />
          </div>
        }
        hideCode={hideCode}
        source={<ComponentSource collapsible={false} name={name} />}
        {...props}
      />
    </div>
  )
}
