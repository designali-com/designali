import { Index } from "@/registry/__index__";
import { ComponentPreviewTabs } from "@/src/components/docs/component-preview-tabs";
import { ComponentSource } from "@/src/components/docs/component-source";
import { cn } from "@workspace/ui/lib/utils";
 
interface ComponentPreviewProps
  extends Omit<React.ComponentProps<"div">, "ref"> {
  name: string;
  align?: "center" | "start" | "end";
  description?: string;
  hideCode?: boolean;
}

export function ComponentPreview({
  name,
  className,
  align = "center",
  hideCode = false,
  ...props
}: ComponentPreviewProps) {
  const Component = Index[name]?.component;
  const metaClassName = Index[name]?.meta?.className;

  if (!Component) {
    return (
      <p className="text-muted-foreground text-sm">
        Component{" "}
        <code className="relative bg-muted px-[0.3rem] py-[0.2rem] font-mono text-[.8125rem]">
          {name}
        </code>{" "}
        not found in registry.
      </p>
    );
  }

  return (
    <div className="w-full min-w-0 overflow-hidden my-4">
      <ComponentPreviewTabs
        align={align}
        className={cn("w-full min-w-0", metaClassName, className)}
        component={
          <div className="w-full min-w-0 overflow-x-auto p-4 flex items-center justify-center">
            <Component />
          </div>
        }
        hideCode={hideCode}
        source={<ComponentSource collapsible={false} name={name} />}
        {...props}
      />
    </div>
  );
}