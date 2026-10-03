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
      "https://ik.imagekit.io/designali/images/apple/Studio%20Display/Studio%20Display%20XDR%202026%20On%20Dark%20Background.png?updatedAt=1790829605486",
    light:
      "https://ik.imagekit.io/designali/images/apple/Studio%20Display/Studio%20Display%20XDR%202026%20On%20Light%20Background.png?updatedAt=1790829605361",
  },
};

const sizeClasses = {
  sm: "h-[16rem]",
  md: "h-[24rem]",
  lg: "h-[32rem]",
  xl: "h-[48rem]",
};

const roundedClasses = {
  sm: "rounded-[10px]",
  md: "rounded-[10px]",
  lg: "rounded-[10px]",
  xl: "rounded-[10px]",
};

export function StudioDisplay({
  children,
  className = "",
  variant = "studio-display",
  size = "md",
  color = "dark", 
}: StudioDisplayProps) {
  const defaultImage = studioDisplayImages[variant][color];
  const frameImage = defaultImage;

  return (
    <div
      className={`
        relative inline-block
        ${sizeClasses[size]}
        aspect-[16/9]
        ${className}
      `}
    >
      <img
        src={frameImage}
        alt={"Studio Display"}
        className="pointer-events-none absolute inset-0 z-10 h-full w-full select-none object-contain"
      />

      <div
        className={`
          absolute left-[15%] right-[15%] top-[3%] bottom-[26%] overflow-hidden bg-background
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