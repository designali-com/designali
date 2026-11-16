/* eslint-disable @typescript-eslint/no-explicit-any */
// Renders one logo entry. Kept separate from logos.tsx so it can be used
// without importing the full `allLogos` set.
export interface LogoGlyphProps extends React.SVGProps<SVGSVGElement> {
  entry: { Component: any; metadata: { viewBox: string } }
  size?: number
  color?: string
}

export function LogoGlyph({
  entry,
  size = 24,
  color = "currentColor",
  ...props
}: LogoGlyphProps) {
  const { Component, metadata } = entry

  return (
    <Component
      size={size}
      fill={color}
      style={{ color }}
      viewBox={metadata.viewBox}
      {...props}
    />
  )
}
