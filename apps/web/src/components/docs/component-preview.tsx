import { Index } from "@/registry/__index__"
import {
  ComponentPreviewFrame,
  type ComponentPreviewFrameProps,
} from "@/src/components/docs/component-preview-frame"

// Looks the component up by name in the registry index. This makes the
// bundler compile every registry component, so prefer ComponentPreviewFrame
// with a directly imported component when the component is known up front.
export function ComponentPreview(
  props: Omit<ComponentPreviewFrameProps, "component">
) {
  return (
    <ComponentPreviewFrame
      {...props}
      component={Index[props.name]?.component}
    />
  )
}
