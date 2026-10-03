import { IMac } from "@/registry/designali/ui/apple/imac"

export function IMacDemo() {
  return (
    <div className="flex items-center justify-center p-8">
      <IMac size="xl" color="blue">
        <iframe 
          src={"https://design-agency.designali.com/"} 
          className="block size-full border-0"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
        /> 
      </IMac>
    </div>
  );
}