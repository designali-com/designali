import { AspectRatio } from "@workspace/ui/components/aspect-ratio";

export default function AspectRatioDemo() {
  return (
    <AspectRatio ratio={16 / 9} className="w-full max-w-sm rounded-lg bg-muted">
      <img
        src="/img/hero-1.jpg"
        alt="Designali showcase visual"
        className="absolute inset-0 h-full w-full rounded-lg object-cover"
      />
    </AspectRatio>
  );
}