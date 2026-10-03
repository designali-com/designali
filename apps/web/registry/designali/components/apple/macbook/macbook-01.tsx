import { Macbook } from "@/registry/designali/ui/apple/macbook" 

export default function IPhone01() {
  return (
    <div className="flex h-full w-full items-center justify-center">
       <Macbook>
       <iframe 
          src={"https://design-agency.designali.com/"} 
          className="block size-full border-0"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
        /> 
       </Macbook>
    </div>
  )
}
