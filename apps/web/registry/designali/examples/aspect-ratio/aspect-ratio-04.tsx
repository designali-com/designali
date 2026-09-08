"use client";

import * as React from "react";

import { AspectRatio } from "@workspace/ui/components/aspect-ratio";

export default function AspectRatioVideo() {
  return (
    <figure className="w-full max-w-sm">
      <AspectRatio ratio={16 / 9} className="rounded-lg bg-muted">
        <video
          src="/vid/colorful-spheres.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full rounded-lg object-cover"
        />
      </AspectRatio>
      <figcaption className="mt-2 text-center text-sm text-muted-foreground">
        Designali motion components showcase
      </figcaption>
    </figure>
  );
}