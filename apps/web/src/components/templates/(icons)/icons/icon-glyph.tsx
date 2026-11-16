/* eslint-disable @typescript-eslint/no-explicit-any */
// Renders one icon entry. Kept separate from icons.tsx so it can be used
// without importing the full `allIcons` set.
export interface IconGlyphProps extends React.SVGProps<SVGSVGElement> {
  entry: { Component: any; metadata: { viewBox: string; variant?: string } }
  size?: number
  color?: string
  strokeWidth?: number
}

export function IconGlyph({
  entry,
  size = 24,
  strokeWidth = 1,
  color = "currentColor",
  fill,
  stroke,
  strokeLinejoin = "round",
  strokeLinecap = "round",
  ...props
}: IconGlyphProps) {
  const { Component, metadata } = entry

  const resolvedVariant = (metadata.variant ?? "default").toLowerCase()
  const isFilledVariant =
    resolvedVariant === "filled" || resolvedVariant === "doodle"

  const resolvedFill = fill ?? (isFilledVariant ? "currentColor" : "none")
  const resolvedStroke = stroke ?? (isFilledVariant ? "none" : "currentColor")

  return (
    <Component
      {...props}
      size={size}
      fill={resolvedFill}
      stroke={resolvedStroke}
      viewBox={metadata.viewBox}
      strokeWidth={isFilledVariant ? 0 : strokeWidth}
      strokeLinejoin={isFilledVariant ? undefined : strokeLinejoin}
      strokeLinecap={isFilledVariant ? undefined : strokeLinecap}
      style={{ color }}
    />
  )
}
