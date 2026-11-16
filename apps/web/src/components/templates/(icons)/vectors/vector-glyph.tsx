/* eslint-disable @typescript-eslint/no-explicit-any */
// Renders one vector entry. Kept separate from vectors.tsx so it can be used
// without importing the full `allVectors` set.
export interface VectorGlyphProps extends React.SVGProps<SVGSVGElement> {
  entry: { Component: any; metadata: { viewBox: string } }
  size?: number
  color?: string
}

export function VectorGlyph({
  entry,
  size = 24,
  color = "currentColor",
  ...props
}: VectorGlyphProps) {
  const { Component, metadata } = entry

  return (
    <Component
      size={size}
      style={{ color }}
      viewBox={metadata.viewBox}
      {...props}
    />
  )
}
