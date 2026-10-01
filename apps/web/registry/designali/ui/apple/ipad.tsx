import * as React from "react";

interface IpadProps {
  children: React.ReactNode;
  className?: string;

  /** iPad variant/model */
  variant?: "ipad-pro" | "ipad-air";

  /** iPad size */
  size?: "sm" | "md" | "lg" | "xl";

  /** iPad orientation */
  orientation?: "portrait" | "landscape";

  /** Frame color based on the selected variant */
  color?: "black" | "silver" | "purple" | "space-grey" | "starlight" | "blue";

  /** Custom iPad frame image */
  image?: string;

  /** Image alt text */
  alt?: string;
}

type IpadVariant = IpadProps["variant"];
type IpadColor = IpadProps["color"];

interface IpadImageSet {
  portrait: string;
  landscape: string;
}

const ipadImages: Record<
  NonNullable<IpadVariant>,
  Record<string, IpadImageSet>
> = {
  "ipad-pro": {
    black: {
      portrait:
        "https://ik.imagekit.io/designali/images/apple/iPad%20Pro/iPad%20Pro%20(M5)%2013_%20-%20Space%20Black%20-%20Portrait.png?updatedAt=1790829708595",
      landscape:
        "https://ik.imagekit.io/designali/images/apple/iPad%20Pro/iPad%20Pro%20(M5)%2013_%20-%20Space%20Black%20-%20Landscape.png?updatedAt=1790829708551",
    },
    silver: {
      portrait:
        "https://ik.imagekit.io/designali/images/apple/iPad%20Pro/iPad%20Pro%20(M5)%2013_%20-%20Silver%20-%20Portrait.png?updatedAt=1790829708612",
      landscape:
        "https://ik.imagekit.io/designali/images/apple/iPad%20Pro/iPad%20Pro%20(M5)%2013_%20-%20Silver%20-%20Landscape.png?updatedAt=1790829708252",
    },
  },

  "ipad-air": {
    purple: {
      portrait:
        "https://ik.imagekit.io/designali/images/apple/iPar%20Air/iPad%20Air%2013_%20(M4)%20-%20Purple%20-%20Portrait.png?updatedAt=1790854444119",
      landscape:
        "https://ik.imagekit.io/designali/images/apple/iPar%20Air/iPad%20Air%2013_%20(M4)%20-%20Purple%20-%20Landscape.png?updatedAt=1790854443994",
    },
    "space-grey": {
      portrait:
        "https://ik.imagekit.io/designali/images/apple/iPar%20Air/iPad%20Air%2013_%20(M4)%20-%20Space%20Gray%20-%20Portrait.png?updatedAt=1790854444061",
      landscape:
        "https://ik.imagekit.io/designali/images/apple/iPar%20Air/iPad%20Air%2013_%20(M4)%20-%20Space%20Gray%20-%20Landscape.png?updatedAt=1790854443926",
    },
    starlight: {
      portrait:
        "https://ik.imagekit.io/designali/images/apple/iPar%20Air/iPad%20Air%2013_%20(M4)%20-%20Starlight%20-%20Portrait.png?updatedAt=1790854444039",
      landscape:
        "https://ik.imagekit.io/designali/images/apple/iPar%20Air/iPad%20Air%2013_%20(M4)%20-%20Starlight%20-%20Landscape.png?updatedAt=1790854444037",
    },
    blue: {
      portrait:
        "https://ik.imagekit.io/designali/images/apple/iPar%20Air/iPad%20Air%2013_%20(M4)%20-%20Blue%20-%20Portrait.png?updatedAt=1790854443937",
      landscape:
        "https://ik.imagekit.io/designali/images/apple/iPar%20Air/iPad%20Air%2013_%20(M4)%20-%20Blue%20-%20Landscape.png?updatedAt=1790854443892",
    },
  },
};

const sizeClasses = {
  sm: "h-[22rem]",
  md: "h-[30rem]",
  lg: "h-[38rem]",
  xl: "h-[48rem]",
};

const landscapeSizeClasses = {
  sm: "h-[16rem]",
  md: "h-[22rem]",
  lg: "h-[28rem]",
  xl: "h-[36rem]",
};

const roundedClasses = {
  sm: "rounded-[16px]",
  md: "rounded-[24px]",
  lg: "rounded-[32px]",
  xl: "rounded-[40px]",
};

const landscapeRoundedClasses = {
  sm: "rounded-[16px]",
  md: "rounded-[24px]",
  lg: "rounded-[32px]",
  xl: "rounded-[40px]",
};

export function IPad({
  children,
  className = "",
  variant = "ipad-pro",
  size = "md",
  orientation = "portrait",
  color = "silver",
  image,
  alt = "iPad",
}: IpadProps) {
  const isLandscape = orientation === "landscape";

  const variantImages = ipadImages[variant];
  const defaultImages = variantImages[color] || Object.values(variantImages)[0];

  const frameImage =
    image ??
    (isLandscape
      ? defaultImages?.landscape
      : defaultImages?.portrait);

  return (
    <div
      className={`
        relative inline-block
        ${isLandscape ? landscapeSizeClasses[size] : sizeClasses[size]}
        ${isLandscape ? "aspect-[4/3]" : "aspect-[3/4]"}
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
          absolute inset-[5%] overflow-hidden bg-background
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
    </div>
  );
}