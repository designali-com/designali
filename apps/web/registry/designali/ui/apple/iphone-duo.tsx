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
        "https://ik.imagekit.io/designali/images/apple/iPhone%20Duo/iPhone%20Duo%20-%20Star%20White%20-%20Inner%20Open%20Portrait.png?updatedAt=1790829512079",
      landscape:
        "https://ik.imagekit.io/designali/images/apple/iPhone%20Duo/iPhone%20Duo%20-%20Star%20White%20-%20Inner%20Open%20Landscape.png?updatedAt=1790829512033",
    },
    back: {
      portrait:
        "https://ik.imagekit.io/designali/images/apple/iPhone%20Duo/iPhone%20Duo%20-%20Star%20White%20-%20Inner%20Open%20Portrait.png?updatedAt=1790829512079",
      landscape:
        "https://ik.imagekit.io/designali/images/apple/iPhone%20Duo/iPhone%20Duo%20-%20Star%20White%20-%20Inner%20Open%20Landscape.png?updatedAt=1790829512033",
    },
    frontback:
      "https://ik.imagekit.io/designali/images/apple/iPhone%20Duo/iPhone%20Duo%20-%20Star%20White%20-%20Outer%20Open.png?updatedAt=1790829512168",
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
  md: "h-[16rem]",
  lg: "h-[24rem]",
  xl: "h-[32rem]",
};

// Portrait rounded classes (Standard vs FrontBack)
const roundedClasses = {
  standardView: {
    sm: "rounded-[6px]",
    md: "rounded-[10px]",
    lg: "rounded-[16px]",
    xl: "rounded-[20px]",
  },
  frontBackView: {
    sm: "rounded-[8px]",
    md: "rounded-[12px]",
    lg: "rounded-[18px]",
    xl: "rounded-l-[6px] rounded-r-[20px]", // Yahan xl ke liye frontback ka alag rounded diya hai
  },
};

// Landscape rounded classes (Standard vs FrontBack)
const landscapeRoundedClasses = {
  standardView: {
    sm: "rounded-[32px]",
    md: "rounded-[48px]",
    lg: "rounded-[52px]",
    xl: "rounded-b-[6px] rounded-t-[30px]",
  },
  frontBackView: {
    sm: "rounded-[20px]",
    md: "rounded-[32px]",
    lg: "rounded-[42px]",
    xl: "rounded-[52px]", // Yahan bhi landscape frontback ke liye alag rounded hai
  },
};
 
// Front, Back aur Frontback (Open view) ke liye alag-alag screen position mappings
const screenPositionClasses = {
  frontBackView: {
    portrait: {
      sm: "left-[8%] right-[8%] top-[12%] bottom-[12%]",
      md: "left-[8.5%] right-[8.5%] top-[13%] bottom-[13%]",
      lg: "left-[9%] right-[9%] top-[14%] bottom-[14%]",
      xl: "left-[51%] right-[2%] top-[34.5%] bottom-[34.5%]",
    },
    landscape: {
      sm: "left-[12%] right-[12%] top-[8%] bottom-[8%]",
      md: "left-[10%] right-[10%] top-[8.5%] bottom-[8.5%]",
      lg: "left-[14%] right-[14%] top-[9%] bottom-[9%]",
      xl: "left-[40%] right-[14%] top-[9%] bottom-[9%]",
    },
  },
  standardView: {
    portrait: {
      sm: "left-[4%] right-[4%] top-[18%] bottom-[18%]",
      md: "left-[4.5%] right-[4.5%] top-[19%] bottom-[19%]",
      lg: "left-[5%] right-[5%] top-[20%] bottom-[20%]",
      xl: "left-[5%] right-[5%] top-[20%] bottom-[20%]",
    },
    landscape: {
      sm: "left-[18%] right-[18%] top-[4%] bottom-[4%]",
      md: "left-[19%] right-[19%] top-[4.5%] bottom-[4.5%]",
      lg: "left-[20%] right-[20%] top-[5%] bottom-[5%]",
      xl: "left-[20%] right-[20%] top-[5%] bottom-[5%]",
    },
  },
};

export function IPhoneDuo({
  children,
  className = "",
  size = "md",
  orientation = "portrait",
  side = "frontback",
  color = "night-sky",
  image,
  alt = "iPhone Duo",
}: IPhoneDuoProps) {
  const isLandscape = orientation === "landscape";
  const colorImages = phoneImages[color] || phoneImages["night-sky"];
 
  let frameImage = image;
  if (!frameImage) {
    if (side === "frontback") {
      frameImage = colorImages.frontback;
    } else {
      const sideImages = colorImages[side] as SideImageSet;
      frameImage = isLandscape ? sideImages.landscape : sideImages.portrait;
    }
  }

  const isFrontBack = side === "frontback";

  // Side ke mutabiq sahi position aur rounded classes choose karna
  const positionGroup = isFrontBack 
    ? screenPositionClasses.frontBackView 
    : screenPositionClasses.standardView;

  const currentPositionClass = isLandscape
    ? positionGroup.landscape[size]
    : positionGroup.portrait[size];

  const roundedGroup = isLandscape 
    ? (isFrontBack ? landscapeRoundedClasses.frontBackView : landscapeRoundedClasses.standardView)
    : (isFrontBack ? roundedClasses.frontBackView : roundedClasses.standardView);

  const currentRoundedClass = roundedGroup[size];

  return (
    <div
      className={`
        relative inline-block
        ${isLandscape ? landscapeSizeClasses[size] : sizeClasses[size]}
        ${isLandscape ? "aspect-[19.5/9]" : "aspect-[9/19.5]"}
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
            ${currentPositionClass}
            ${currentRoundedClass}
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