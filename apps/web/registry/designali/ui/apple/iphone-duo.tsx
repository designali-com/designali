import * as React from "react";

interface IPhoneDuoProps {
  children?: React.ReactNode;
  className?: string;

  /** Phone size */
  size?: "sm" | "md" | "lg" | "xl";

  /** Phone orientation (Ignored when side is "frontback") */
  orientation?: "portrait" | "landscape";

  /** Phone view side (front, back, or frontback) */
  side?: "front" | "back" | "frontback";

  /** Frame color */
  color?: "night-sky" | "star-white";

  /** Custom phone frame image */
  image?: string;

  /** Image alt text */
  alt?: string;
}

type PhoneColor = NonNullable<IPhoneDuoProps["color"]>;

interface SideImageSet {
  portrait: string;
  landscape: string;
}

interface OrientationImageSet {
  front: SideImageSet;
  back: SideImageSet;
  frontback: string; // Single image without orientation
}

const phoneImages: Record<PhoneColor, OrientationImageSet> = {
  "night-sky": {
    front: {
      portrait:
        "https://ik.imagekit.io/designali/images/apple/iPhone%20Duo/iPhone%20Duo%20-%20Night%20Sky%20-%20Inner%20Open%20Portrait.png?updatedAt=1790829512133",
      landscape:
        "https://ik.imagekit.io/designali/images/apple/iPhone%20Duo/iPhone%20Duo%20-%20Night%20Sky%20-%20Inner%20Open%20Landscape.png?updatedAt=1790829512135",
    },
    back: {
      portrait:
        "https://ik.imagekit.io/designali/images/apple/iPhone%20Duo/iPhone%20Duo%20-%20Night%20Sky%20-%20Outer%20Closed%20Portrait.png?updatedAt=1790829511949",
      landscape:
        "https://ik.imagekit.io/designali/images/apple/iPhone%20Duo/iPhone%20Duo%20-%20Night%20Sky%20-%20Outer%20Closed%20Landscape.png?updatedAt=1790829511938",
    },
    frontback:
      "https://ik.imagekit.io/designali/images/apple/iPhone%20Duo/iPhone%20Duo%20-%20Night%20Sky%20-%20Outer%20Open.png?updatedAt=1790829512290",
  },

  "star-white": {
    front: {
      portrait:
        "https://ik.imagekit.io/designali/images/apple/iPhone%2018%20Duo/iPhone%2018%20Duo%20-%20Star%20White%20-%20Front%20-%20Portrait.png",
      landscape:
        "https://ik.imagekit.io/designali/images/apple/iPhone%2018%20Duo/iPhone%2018%20Duo%20-%20Star%20White%20-%20Front%20-%20Landscape.png",
    },
    back: {
      portrait:
        "https://ik.imagekit.io/designali/images/apple/iPhone%2018%20Duo/iPhone%2018%20Duo%20-%20Star%20White%20-%20Back%20-%20Portrait.png",
      landscape:
        "https://ik.imagekit.io/designali/images/apple/iPhone%2018%20Duo/iPhone%2018%20Duo%20-%20Star%20White%20-%20Back%20-%20Landscape.png",
    },
    frontback:
      "https://ik.imagekit.io/designali/images/apple/iPhone%20Duo/iPhone%20Duo%20-%20Night%20Sky%20-%20Outer%20Closed%20Portrait.png?updatedAt=1790829511949",
  },
};

const sizeClasses = {
  sm: "h-[20rem]",
  md: "h-[28rem]",
  lg: "h-[32rem]",
  xl: "h-[48rem]",
};

const landscapeSizeClasses = {
  sm: "h-[14rem]",
  md: "h-[20rem]",
  lg: "h-[24rem]",
  xl: "h-[32rem]",
};

const roundedClasses = {
  sm: "rounded-[18px]",
  md: "rounded-[24px]",
  lg: "rounded-[32px]",
  xl: "rounded-[48px]",
};

const landscapeRoundedClasses = {
  sm: "rounded-[32px]",
  md: "rounded-[48px]",
  lg: "rounded-[52px]",
  xl: "rounded-[64px]",
};

export function IPhoneDuo({
  children,
  className = "",
  size = "md",
  orientation = "portrait",
  side = "front",
  color = "night-sky",
  image,
  alt = "iPhone Duo",
}: IPhoneDuoProps) {
  const isLandscape = orientation === "landscape";
  const colorImages = phoneImages[color] || phoneImages["night-sky"];

  // Determine frame image based on whether side is "frontback" or standard views
  let frameImage = image;
  if (!frameImage) {
    if (side === "frontback") {
      frameImage = colorImages.frontback;
    } else {
      const sideImages = colorImages[side] as SideImageSet;
      frameImage = isLandscape ? sideImages.landscape : sideImages.portrait;
    }
  }

  return (
    <div
      className={`
        relative inline-block
        ${side === "frontback" ? "" : isLandscape ? landscapeSizeClasses[size] : sizeClasses[size]}
        ${side === "frontback" ? "" : isLandscape ? "aspect-[19.5/9]" : "aspect-[9/19.5]"}
        ${className}
      `}
    >
      <img
        src={frameImage}
        alt={alt}
        className="pointer-events-none absolute inset-0 z-10 h-full w-full select-none object-contain"
      />

      {side === "front" && (
        <div
          className={`
            absolute inset-[4%] overflow-hidden bg-background
            ${
              isLandscape
                ? landscapeRoundedClasses[size]
                : roundedClasses[size]
            }
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