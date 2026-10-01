 
import * as React from "react";

interface IPhoneProps {
  children: React.ReactNode;
  className?: string;

  /** Phone variant/model */
  variant?: "18-pro" | "18-pro-max";

  /** Phone size */
  size?: "sm" | "md" | "lg" | "xl";

  /** Phone orientation */
  orientation?: "portrait" | "landscape";

  /** Frame color */
  color?: "black" | "glacier" | "silver" | "burgundy";

  /** Custom phone frame image */
  image?: string;

  /** Image alt text */
  alt?: string;
}

type PhoneVariant = IPhoneProps["variant"];
type PhoneColor = IPhoneProps["color"];

interface PhoneImageSet {
  portrait: string;
  landscape: string;
}

const phoneImages: Record<
  NonNullable<PhoneVariant>,
  Record<NonNullable<PhoneColor>, PhoneImageSet>
> = {
  "18-pro": {
    black: {
      portrait:
        "https://ik.imagekit.io/designali/images/apple/iPhone%2018%20Pro/iPhone%2018%20Pro%20-%20Black%20-%20Portrait.png?updatedAt=1790753757506",
      landscape:
        "https://ik.imagekit.io/designali/images/apple/iPhone%2018%20Pro/iPhone%2018%20Pro%20-%20Black%20-%20Landscape.png?updatedAt=1790753757599",
    },

    glacier: {
      portrait:
        "https://ik.imagekit.io/designali/images/apple/iPhone%2018%20Pro/iPhone%2018%20Pro%20-%20Glacier%20-%20Portrait.png?updatedAt=1790753757500",
      landscape:
        "https://ik.imagekit.io/designali/images/apple/iPhone%2018%20Pro/iPhone%2018%20Pro%20-%20Glacier%20-%20Landscape.png?updatedAt=1790753757584",
    },

    burgundy: {
      portrait:
        "https://ik.imagekit.io/designali/images/apple/iPhone%2018%20Pro/iPhone%2018%20Pro%20-%20Burgundy%20-%20Portrait.png?updatedAt=1790753757463",
      landscape:
        "https://ik.imagekit.io/designali/images/apple/iPhone%2018%20Pro/iPhone%2018%20Pro%20-%20Burgundy%20-%20Landscape.png?updatedAt=1790753757455",
    },

    silver: {
      portrait:
        "https://ik.imagekit.io/designali/images/apple/iPhone%2018%20Pro/iPhone%2018%20Pro%20-%20Silver%20-%20Portrait.png?updatedAt=1790753757463",
      landscape:
        "https://ik.imagekit.io/designali/images/apple/iPhone%2018%20Pro/iPhone%2018%20Pro%20-%20Silver%20-%20Landscape.png?updatedAt=1790753757401",
    },
  },

  "18-pro-max": {
    black: {
      portrait:
        "https://ik.imagekit.io/designali/images/apple/iPhone%2018%20Pro%20Max/iPhone%2018%20Pro%20Max%20-%20Black%20-%20Portrait.png?updatedAt=1790753782105",
      landscape:
        "https://ik.imagekit.io/designali/images/apple/iPhone%2018%20Pro%20Max/iPhone%2018%20Pro%20Max%20-%20Black%20-%20Landscape.png?updatedAt=1790753781681",
    },

    glacier: {
      portrait:
        "https://ik.imagekit.io/designali/images/apple/iPhone%2018%20Pro%20Max/iPhone%2018%20Pro%20Max%20-%20Glacier%20-%20Portrait.png?updatedAt=1790753782052",
      landscape:
        "https://ik.imagekit.io/designali/images/apple/iPhone%2018%20Pro%20Max/iPhone%2018%20Pro%20Max%20-%20Glacier%20-%20Landscape.png?updatedAt=1790753781936",
    },

    burgundy: {
      portrait:
        "https://ik.imagekit.io/designali/images/apple/iPhone%2018%20Pro%20Max/iPhone%2018%20Pro%20Max%20-%20Burgundy%20-%20Portrait.png?updatedAt=1790753781624",
      landscape:
        "https://ik.imagekit.io/designali/images/apple/iPhone%2018%20Pro%20Max/iPhone%2018%20Pro%20Max%20-%20Burgundy%20-%20Landscape.png?updatedAt=1790753782132",
    },

    silver: {
      portrait:
        "https://ik.imagekit.io/designali/images/apple/iPhone%2018%20Pro%20Max/iPhone%2018%20Pro%20Max%20-%20Silver%20-%20Portrait.png?updatedAt=1790753782050",
      landscape:
        "https://ik.imagekit.io/designali/images/apple/iPhone%2018%20Pro%20Max/iPhone%2018%20Pro%20Max%20-%20Silver%20-%20Landscape.png?updatedAt=1790753782050",
    },
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

export function IPhone({
  children,
  className = "",
  variant = "18-pro",
  size = "md",
  orientation = "portrait",
  color = "silver",
  image,
  alt = "iPhone",
}: IPhoneProps) {
  const isLandscape = orientation === "landscape";

  const defaultImages = phoneImages[variant][color];

  const frameImage =
    image ??
    (isLandscape
      ? defaultImages.landscape
      : defaultImages.portrait);

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
    </div>
  );
} 
