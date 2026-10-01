import * as React from "react";

interface StudioDisplayProps {
  children: React.ReactNode;
  className?: string;

  /** Phone variant/model */
  variant?: "studio-display" | "studio-display-xdr";

  /** Phone size */
  size?: "sm" | "md" | "lg" | "xl";

  /** Frame color */
  color?: "light" | "dark";

  /** Custom phone frame image */
  image?: string;

  /** Image alt text */
  alt?: string;
}

type PhoneVariant = StudioDisplayProps["variant"];
type PhoneColor = StudioDisplayProps["color"];

const studioDisplayImages: Record<
  NonNullable<PhoneVariant>,
  Record<NonNullable<PhoneColor>, string>
> = {
  "studio-display": {
    dark:
      "https://ik.imagekit.io/designali/images/apple/Studio%20Display/Studio%20Display%202026%20On%20Dark%20Background.png?updatedAt=1790829605415",
    light:
      "https://ik.imagekit.io/designali/images/apple/Studio%20Display/Studio%20Display%202026%20On%20Light%20Background.png?updatedAt=1790829605335",
  },
  "studio-display-xdr": {
    dark:
      "https://ik.imagekit.io/designali/images/apple/Studio%20Display/Studio%20Display%20XDR%202026%20On%20Light%20Background.png?updatedAt=1790829605361",
    light:
      "https://ik.imagekit.io/designali/images/apple/iPhone%2018%20Pro%20Max/iPhone%2018%20Pro%20Max%20-%20Glacier%20-%20Portrait.png?updatedAt=1790753782052",
  },
};

const sizeClasses = {
  sm: "h-[20rem]",
  md: "h-[28rem]",
  lg: "h-[32rem]",
  xl: "h-[48rem]",
};

const roundedClasses = {
  sm: "rounded-[18px]",
  md: "rounded-[24px]",
  lg: "rounded-[32px]",
  xl: "rounded-[48px]",
};

export function StudioDisplay({
  children,
  className = "",
  variant = "studio-display",
  size = "md",
  color = "dark",
  image,
  alt = "Studio Display",
}: StudioDisplayProps) {
  const defaultImage = studioDisplayImages[variant][color];
  const frameImage = image ?? defaultImage;

  return (
    <div
      className={`
        relative inline-block
        ${sizeClasses[size]}
        aspect-[9/19.5]
        ${className}
      `}
    >
      <img
        src={frameImage}
        alt={alt}
        className="pointer-events-none absolute inset-0 z-10 h-full w-full select-none object-contain"
      />

      <div
        className={`
          absolute inset-[4%] overflow-hidden bg-background
          ${roundedClasses[size]}
        `}
      >
        <div className="h-full w-full overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}