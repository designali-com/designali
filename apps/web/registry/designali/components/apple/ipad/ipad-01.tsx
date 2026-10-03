import { IPad } from "@/registry/designali/ui/apple/ipad" 

export default function IPad01() {
  return (
    <div className="flex h-full w-full items-center justify-center">
       <IPad size="md" color="silver">
       <iframe 
          src={"https://design-agency.designali.com/"} 
          className="block size-full border-0"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
        /> 
       </IPad>
    </div>
  )
}
