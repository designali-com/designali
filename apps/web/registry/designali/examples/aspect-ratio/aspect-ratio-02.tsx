import { AspectRatio } from "@workspace/ui/components/aspect-ratio";

export default function AspectRatioSquare() {
  return (
    <AspectRatio
      ratio={1 / 1}
      className="w-full max-w-[12rem] rounded-lg bg-muted"
    >
      <img
        src="/img/dashboard-1-light.jpg"
        alt="Designali UI preview"
        className="absolute inset-0 h-full w-full rounded-lg object-cover"
      />
    </AspectRatio>
  );
}