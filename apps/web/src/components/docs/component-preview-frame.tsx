import { RegistryMeta } from "@/registry/__meta__"
import { ComponentPreviewTabs } from "@/src/components/docs/component-preview-tabs"
import { ComponentSource } from "@/src/components/docs/component-source"
import { cn } from "@workspace/ui/lib/utils"

export interface ComponentPreviewFrameProps
  extends Omit<React.ComponentProps<"div">, "ref"> {
  name: string
  // The registry component to render. Callers that know which component they
  // show should import it directly and pass it here, instead of using
  // <ComponentPreview>, which imports the whole registry index.
  component?: React.ComponentType | null
  align?: "center" | "start" | "end"
  description?: string
  hideCode?: boolean
}

export function ComponentPreviewFrame({
  name,
  component: Component,
  className,
  align = "center",
  hideCode = false,
  ...props
}: ComponentPreviewFrameProps) {
  const metaClassName = RegistryMeta[name]?.meta?.className

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
        name={name}
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
