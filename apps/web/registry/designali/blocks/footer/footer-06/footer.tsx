import { Instagram, LinkedIn, X } from "@designali/logos"
import { Logo } from "@/src/components/logo"

export default function Footer() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className=" flex h-auto flex-col items-stretch justify-between self-stretch md:flex-row">
        <div className="flex h-auto flex-col items-start justify-start gap-8 p-4 md:p-8">
          <div className="flex items-center justify-start gap-3 self-stretch">
            <div className="text-center text-xl leading-4 font-semibold">
              <Logo className="h-8 w-auto" />
            </div>
          </div>
          <div className="text-sm font-medium">
            <h1 className="text-lg font-medium">designali — design se code tak</h1>
            <p className="max-w-md text-muted-foreground">
              I design and build digital experiences that look great, feel
              intuitive, and work beautifully. Brands, websites and products, end-to-end.
            </p>
          </div>

          <div className="flex items-start justify-start gap-6">
            <a href="https://www.linkedin.com/company/designali-com/" aria-label="Designali on LinkedIn">
              <LinkedIn className="w-6" />
            </a>
            <a href="https://x.com/designali_com" aria-label="Designali on X">
              <X className="w-6" />
            </a>
            <a href="https://www.instagram.com/designali.code/" aria-label="Designali on Instagram">
              <Instagram className="w-6" />
            </a>
          </div>
        </div>

        <div className="flex flex-col flex-wrap items-start justify-start gap-6 self-stretch p-4 sm:flex-row sm:justify-between md:gap-8 md:p-8">
          <div className="flex min-w-40 flex-1 flex-col items-start justify-start gap-3">
            <div className="self-stretch text-sm leading-5 font-medium">
              Product
            </div>
            <div className="flex flex-col items-start justify-end gap-2">
              <div className="cursor-pointer text-sm leading-5 font-normal text-muted-foreground transition-colors hover:text-primary">
                Templates
              </div>
              <div className="cursor-pointer text-sm leading-5 font-normal text-muted-foreground transition-colors hover:text-primary">
                Blocks
              </div>
              <div className="cursor-pointer text-sm leading-5 font-normal text-muted-foreground transition-colors hover:text-primary">
                UI Designs
              </div>
              <div className="cursor-pointer text-sm leading-5 font-normal text-muted-foreground transition-colors hover:text-primary">
                Icons
              </div>
              <div className="cursor-pointer text-sm leading-5 font-normal text-muted-foreground transition-colors hover:text-primary">
                Pricing
              </div>
            </div>
          </div>

          <div className="flex min-w-40 flex-1 flex-col items-start justify-start gap-3">
            <div className="text-sm leading-5 font-medium">Company</div>
            <div className="flex flex-col items-start justify-center gap-2">
              <div className="cursor-pointer text-sm leading-5 font-normal text-muted-foreground transition-colors hover:text-primary">
                Work
              </div>
              <div className="cursor-pointer text-sm leading-5 font-normal text-muted-foreground transition-colors hover:text-primary">
                Ali Imam
              </div>
              <div className="cursor-pointer text-sm leading-5 font-normal text-muted-foreground transition-colors hover:text-primary">
                Services
              </div>
              <div className="cursor-pointer text-sm leading-5 font-normal text-muted-foreground transition-colors hover:text-primary">
                Blogs
              </div>
              <div className="cursor-pointer text-sm leading-5 font-normal text-muted-foreground transition-colors hover:text-primary">
                Contact
              </div>
            </div>
          </div>

          <div className="flex min-w-40 flex-1 flex-col items-start justify-start gap-3">
            <div className="text-sm leading-5 font-medium">Resources</div>
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="cursor-pointer self-stretch text-sm leading-5 font-normal text-muted-foreground transition-colors hover:text-primary">
                Terms of use
              </div>
              <div className="cursor-pointer self-stretch text-sm leading-5 font-normal text-muted-foreground transition-colors hover:text-primary">
                Logos
              </div>
              <div className="cursor-pointer self-stretch text-sm leading-5 font-normal text-muted-foreground transition-colors hover:text-primary">
                Docs
              </div>
              <div className="cursor-pointer self-stretch text-sm leading-5 font-normal text-muted-foreground transition-colors hover:text-primary">
                Illustration
              </div>
              <div className="cursor-pointer self-stretch text-sm leading-5 font-normal text-muted-foreground transition-colors hover:text-primary">
                Support
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-12 self-stretch overflow-hidden border-t border-b">
        <div className="absolute inset-0 h-full w-full overflow-hidden">
          <div className="relative h-full w-full">
            {Array.from({ length: 300 }).map((_, i) => (
              <div
                key={i}
                className="absolute h-4 w-full origin-top-left -rotate-45 outline-[0.5px] outline-offset-[-0.25px] outline-primary/40"
                style={{
                  top: `${i * 16 - 120}px`,
                  left: "-100%",
                  width: "300%",
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
