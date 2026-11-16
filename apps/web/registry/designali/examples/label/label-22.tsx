import { Checkbox } from "@workspace/ui/components/checkbox"
import { Label } from "@workspace/ui/components/label"

export default function TermsConsentLabel() {
  return (
    <div className="flex w-full max-w-sm items-start gap-2">
      <Checkbox id="consent" className="mt-0.5" />
      <Label htmlFor="consent" className="block leading-relaxed">
        I agree to the{" "}
        <a href="/docs/legal/terms" className="underline underline-offset-4">
          Designali Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="underline underline-offset-4">
          Privacy Policy
        </a>
        , and I&apos;m at least 16 years old.
      </Label>
    </div>
  )
}
