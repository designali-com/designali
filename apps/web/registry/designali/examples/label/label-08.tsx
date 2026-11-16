import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

export default function LabelWithForgotLink() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="login-password">Password</Label>
        <a
          href="#"
          className="text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          Forgot password?
        </a>
      </div>
      <Input id="login-password" type="password" defaultValue="designali-2-code" />
    </div>
  )
}
