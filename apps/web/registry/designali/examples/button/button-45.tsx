import { Button } from "@workspace/ui/components/button"

export default function InlineLinkButtons() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2 text-xs text-muted-foreground">
      <div className="flex items-center justify-between">
        <span>Password</span>
        <Button variant="link" size="xs" className="h-auto p-0">
          Forgot password?
        </Button>
      </div>
      <p>
        Didn&apos;t get the verification email?{" "}
        <Button variant="link" size="xs" className="h-auto p-0">
          Resend it
        </Button>
      </p>
    </div>
  )
}
