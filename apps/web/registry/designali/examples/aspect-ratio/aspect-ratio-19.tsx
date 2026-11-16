import { AspectRatio } from "@workspace/ui/components/aspect-ratio"

import { Macbook } from "@/registry/designali/ui/apple/macbook"

export default function BrowserWindowPreview() {
  return (
    <Macbook variant="macbook-air" size="sm" color="midnight">
      <AspectRatio ratio={16 / 10} className="bg-background">
        <img
          src="/img/dashboard-1-light.jpg"
          alt="Designali dashboard on designali.com"
          className="size-full object-cover dark:hidden"
        />
        <img
          src="/img/dashboard-1-dark.jpg"
          alt="Designali dashboard on designali.com"
          className="hidden size-full object-cover dark:block"
        />
      </AspectRatio>
    </Macbook>
  )
}
