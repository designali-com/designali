import * as React from "react";

interface MacbookProps {
  children: React.ReactNode;
  className?: string;

  /** Macbook variant/model */
  variant?: "macbook-air" | "macbook-pro" | "macbook-neo";

  /** Macbook size */
  size?: "sm" | "md" | "lg" | "xl";

  /** Frame color */
  color?: 
    | "sky-blue" 
    | "midnight" 
    | "starlight" 
    | "silver" 
    | "black" 
    | "indigo" 
    | "blush" 
    | "citrus";

  /** Custom Macbook frame image */
  image?: string;

  /** Image alt text */
  alt?: string;
}

type MacbookVariant = MacbookProps["variant"]; 

const macbookImages: Record<
  NonNullable<MacbookVariant>,
  Record<string, string>
> = {
  "macbook-air": {
    "sky-blue":
      "https://ik.imagekit.io/designali/images/apple/MacBook%20Air/MacBook%20Air%20M5%2015-inch%20Sky%20Blue.png?updatedAt=1790829822475",
    midnight:
      "https://ik.imagekit.io/designali/images/apple/MacBook%20Air/MacBook%20Air%20M5%2015-inch%20Midnight.png?updatedAt=1790829822372",
    starlight:
      "https://ik.imagekit.io/designali/images/apple/MacBook%20Air/MacBook%20Air%20M5%2015-inch%20Starlight.png?updatedAt=1790829822349",
    silver:
      "https://ik.imagekit.io/designali/images/apple/MacBook%20Air/MacBook%20Air%20M5%2015-inch%20Silver.png?updatedAt=1790829822257",
  },

  "macbook-pro": {
    black:
      "https://ik.imagekit.io/designali/images/apple/MacBook%20Pro/MacBook%20Pro%20M5%2016-inch%20Space%20Black.png?updatedAt=1790829853150",
    silver:
      "https://ik.imagekit.io/designali/images/apple/MacBook%20Pro/MacBook%20Pro%20M5%2016-inch%20Silver.png?updatedAt=1790829852736",
  },

  "macbook-neo": {
    silver:
      "https://ik.imagekit.io/designali/images/apple/MacBook%20Neo/MacBook%20Neo%20-%20Silver.png?updatedAt=1790829882275",
    indigo:
      "https://ik.imagekit.io/designali/images/apple/MacBook%20Neo/MacBook%20Neo%20-%20Indigo.png?updatedAt=1790829882148",
    blush:
      "https://ik.imagekit.io/designali/images/apple/MacBook%20Neo/MacBook%20Neo%20-%20Blush.png?updatedAt=1790829882178",
    citrus:
      "https://ik.imagekit.io/designali/images/apple/MacBook%20Neo/MacBook%20Neo%20-%20Citrus.png?updatedAt=1790829881978",
  },
};

const sizeClasses = {
  sm: "w-[24rem]",
  md: "w-[36rem]",
  lg: "w-[48rem]",
  xl: "w-[64rem]",
};

const roundedClasses = {
  sm: "rounded-t-[12px]",
  md: "rounded-t-[16px]",
  lg: "rounded-t-[20px]",
  xl: "rounded-t-[24px]",
};

export function Macbook({
  children,
  className = "",
  variant = "macbook-air",
  size = "md",
  color = "silver",
  image,
  alt = "Macbook",
}: MacbookProps) {
  const defaultImages = macbookImages[variant];
  const frameImage = image ?? defaultImages[color] ?? Object.values(defaultImages)[0];

  return (
    <div
      className={`
        relative inline-block
        ${sizeClasses[size]}
        aspect-[16/10]
        ${className}
      `}
    >
      <img
        src={frameImage}
        alt={alt}
        className="pointer-events-none absolute inset-0 z-10 h-full w-full select-none object-contain"
      />

      {/* Screen container overlay positioning adjusted for standard laptop frame inner displays */}
      <div
        className={`
          absolute left-[12%] right-[12%] top-[8%] bottom-[14%] overflow-hidden bg-background
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