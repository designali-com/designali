import * as React from "react";

interface MacbookProps {
  children?: React.ReactNode;
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

type MacbookVariant = NonNullable<MacbookProps["variant"]>; 

const macbookImages: Record<
  MacbookVariant,
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

// Har Macbook model aur uske har size ke liye bilkul alag screen positions (left, right, top, bottom)
const screenPositionClasses: Record<MacbookVariant, Record<string, string>> = {
  "macbook-air": {
    sm: "left-[8%] right-[8%] top-[8%] bottom-[8%]",
    md: "left-[10%] right-[10%] top-[9.5%] bottom-[9%]",
    lg: "left-[12%] right-[12%] top-[11%] bottom-[10%]",
    xl: "left-[14%] right-[14%] top-[12.5%] bottom-[11%]",
  },
  "macbook-pro": {
    sm: "left-[7%] right-[7%] top-[7%] bottom-[7%]",
    md: "left-[9%] right-[9%] top-[8.5%] bottom-[8%]",
    lg: "left-[11%] right-[11%] top-[10%] bottom-[9%]",
    xl: "left-[13%] right-[13%] top-[11.5%] bottom-[10%]",
  },
  "macbook-neo": {
    sm: "left-[9%] right-[9%] top-[9%] bottom-[8%]",
    md: "left-[14%] right-[14%] top-[14%] bottom-[14%]",
    lg: "left-[13%] right-[13%] top-[12%] bottom-[11%]",
    xl: "left-[15%] right-[15%] top-[13.5%] bottom-[12%]",
  },
};

// Har Macbook model aur uske har size ke liye alag border-radius
const roundedClasses: Record<MacbookVariant, Record<string, string>> = {
  "macbook-air": {
    sm: "rounded-t-[6px]",
    md: "rounded-t-[10px]",
    lg: "rounded-t-[14px]",
    xl: "rounded-t-[18px]",
  },
  "macbook-pro": {
    sm: "rounded-t-[8px]",
    md: "rounded-t-[12px]",
    lg: "rounded-t-[16px]",
    xl: "rounded-t-[20px]",
  },
  "macbook-neo": {
    sm: "rounded-t-[4px]",
    md: "rounded-t-[8px]",
    lg: "rounded-t-[12px]",
    xl: "rounded-t-[16px]",
  },
};

export function Macbook({
  children,
  className = "",
  variant = "macbook-neo",
  size = "md",
  color = "citrus",
  image,
  alt = "Macbook",
}: MacbookProps) {
  const defaultImages = macbookImages[variant];
  const frameImage = image ?? defaultImages[color] ?? Object.values(defaultImages)[0];

  // Variant aur size ke hisaab se exact independent position aur rounded class lena
  const currentPosition = screenPositionClasses[variant]?.[size] || screenPositionClasses["macbook-air"].md;
  const currentRounded = roundedClasses[variant]?.[size] || roundedClasses["macbook-air"].md;

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

      {children && (
        <div
          className={`
            absolute overflow-hidden bg-background
            ${currentPosition}
            ${currentRounded}
          `}
        >
          <div className="h-full w-full overflow-y-auto">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}