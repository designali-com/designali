import { type Example } from "./_lib.mjs"

/** JSX for a run of slots: slots(0, 3) -> indexes 0,1,2. */
const slots = (from: number, to: number, attrs = "") =>
  Array.from({ length: to - from }, (_, i) => `<InputOTPSlot index={${from + i}}${attrs ? " " + attrs : ""} />`).join("\n")

const six = (attrs = "") => `<InputOTPGroup>\n${slots(0, 6, attrs)}\n</InputOTPGroup>`
const threeThree = (attrs = "") =>
  `<InputOTPGroup>\n${slots(0, 3, attrs)}\n</InputOTPGroup>\n<InputOTPSeparator />\n<InputOTPGroup>\n${slots(3, 6, attrs)}\n</InputOTPGroup>`

const DIGITS = { "input-otp": ["REGEXP_ONLY_DIGITS"] }

const examples: Example[] = [
  {
    name: "EmailVerificationCard",
    description: "Card asking the user to enter the six-digit code sent to their email, with a resend link.",
    imports: DIGITS,
    code: `
export default function EmailVerificationCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Check your inbox</CardTitle>
        <CardDescription>
          We sent a 6-digit code to <span className="font-medium text-foreground">maya.chen@lumen.app</span>.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS} autoFocus>
          ${six()}
        </InputOTP>
        <Button className="w-full">Verify email</Button>
      </CardContent>
      <CardFooter className="justify-center text-xs text-muted-foreground">
        Didn&apos;t get it?
        <Button variant="link" size="sm" className="px-1">Resend code</Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "TwoFactorLoginStep",
    description: "Two-factor sign-in step with a split 3+3 authenticator code and a trust-device checkbox.",
    imports: DIGITS,
    code: `
export default function TwoFactorLoginStep() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-5 border bg-background p-6">
      <div className="flex size-10 items-center justify-center bg-muted">
        <ShieldCheckIcon className="size-5" />
      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-semibold">Two-factor authentication</h3>
        <p className="text-xs text-muted-foreground">Open your authenticator app and enter the code for Lumen.</p>
      </div>
      <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
        ${threeThree()}
      </InputOTP>
      <div className="flex items-center gap-2">
        <Checkbox id="trust-device" />
        <Label htmlFor="trust-device">Trust this device for 30 days</Label>
      </div>
      <Button>Continue</Button>
    </div>
  )
}`,
  },
  {
    name: "ControlledOtpValueReadout",
    description: "Controlled OTP input that mirrors the typed value and remaining digits below it.",
    code: `
export default function ControlledOtpValueReadout() {
  const [value, setValue] = React.useState("")

  return (
    <div className="flex flex-col items-center gap-3">
      <InputOTP maxLength={6} value={value} onChange={setValue}>
        ${six()}
      </InputOTP>
      <p className="text-xs text-muted-foreground">
        {value.length === 0
          ? "Enter your one-time password."
          : value.length < 6
            ? "You entered " + value + " (" + (6 - value.length) + " left)"
            : "Code complete: " + value}
      </p>
    </div>
  )
}`,
  },
  {
    name: "AutoSubmitOnComplete",
    description: "OTP input that submits automatically on the last digit and shows verifying and verified states.",
    imports: DIGITS,
    code: `
export default function AutoSubmitOnComplete() {
  const [status, setStatus] = React.useState<"idle" | "verifying" | "done">("idle")

  function handleComplete() {
    setStatus("verifying")
    window.setTimeout(() => setStatus("done"), 1200)
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <InputOTP
        maxLength={6}
        pattern={REGEXP_ONLY_DIGITS}
        disabled={status !== "idle"}
        onComplete={handleComplete}
      >
        ${six()}
      </InputOTP>
      <div className="flex h-5 items-center gap-1.5 text-xs text-muted-foreground">
        {status === "idle" && "The code submits as soon as it's complete."}
        {status === "verifying" && (
          <>
            <Spinner /> Verifying code...
          </>
        )}
        {status === "done" && (
          <>
            <CircleCheckIcon className="size-4 text-emerald-600 dark:text-emerald-400" />
            Verified. Redirecting...
          </>
        )}
      </div>
      {status === "done" && (
        <Button variant="ghost" size="sm" onClick={() => setStatus("idle")}>
          Try again
        </Button>
      )}
    </div>
  )
}`,
  },
  {
    name: "InvalidCodeError",
    description: "OTP slots in an invalid state with a destructive error message underneath.",
    code: `
export default function InvalidCodeError() {
  return (
    <Field className="w-fit" data-invalid>
      <FieldLabel htmlFor="otp-invalid">Verification code</FieldLabel>
      <InputOTP id="otp-invalid" maxLength={6} defaultValue="482913">
        ${six("aria-invalid")}
      </InputOTP>
      <FieldError>That code is incorrect or has expired.</FieldError>
    </Field>
  )
}`,
  },
  {
    name: "LockedAfterAttempts",
    description: "Disabled OTP input after too many failed attempts, with an alert explaining the lockout.",
    code: `
export default function LockedAfterAttempts() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <InputOTP maxLength={6} disabled>
        ${six()}
      </InputOTP>
      <Alert variant="error">
        <LockIcon />
        <AlertTitle>Too many attempts</AlertTitle>
        <AlertDescription>For your security, code entry is paused for 15 minutes.</AlertDescription>
      </Alert>
    </div>
  )
}`,
  },
  {
    name: "ResendCountdownTimer",
    description: "OTP input with a live countdown that enables the resend button when it reaches zero.",
    imports: DIGITS,
    code: `
export default function ResendCountdownTimer() {
  const [seconds, setSeconds] = React.useState(30)

  React.useEffect(() => {
    if (seconds === 0) return
    const id = window.setInterval(() => setSeconds((s) => Math.max(0, s - 1)), 1000)
    return () => window.clearInterval(id)
  }, [seconds])

  return (
    <div className="flex flex-col items-center gap-4">
      <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
        ${six()}
      </InputOTP>
      <Button variant="outline" size="sm" disabled={seconds > 0} onClick={() => setSeconds(30)}>
        <RotateCwIcon data-icon="inline-start" />
        {seconds > 0 ? "Resend in 0:" + String(seconds).padStart(2, "0") : "Resend code"}
      </Button>
    </div>
  )
}`,
  },
  {
    name: "LargeOtpSlots",
    description: "Oversized slots with larger type for touch-first mobile verification screens.",
    code: `
export default function LargeOtpSlots() {
  return (
    <InputOTP maxLength={4}>
      <InputOTPGroup>
        ${slots(0, 4, 'className="size-14 text-2xl font-semibold"')}
      </InputOTPGroup>
    </InputOTP>
  )
}`,
  },
  {
    name: "CompactInlineOtp",
    description: "Small OTP slots sitting inline inside a settings row to confirm a change.",
    code: `
export default function CompactInlineOtp() {
  return (
    <div className="flex w-full max-w-md flex-wrap items-center justify-between gap-3 border p-3">
      <div>
        <p className="text-xs font-medium">Confirm new recovery phone</p>
        <p className="text-xs text-muted-foreground">Code sent to (555) 014-2290</p>
      </div>
      <div className="flex items-center gap-2">
        <InputOTP maxLength={4}>
          <InputOTPGroup>
            ${slots(0, 4, 'className="size-7"')}
          </InputOTPGroup>
        </InputOTP>
        <Button size="sm">Confirm</Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "AlphanumericRecoveryCode",
    description: "Eight-character alphanumeric recovery code that is uppercased as you type.",
    imports: { "input-otp": ["REGEXP_ONLY_DIGITS_AND_CHARS"] },
    code: `
export default function AlphanumericRecoveryCode() {
  const [value, setValue] = React.useState("")

  return (
    <Field className="w-fit">
      <FieldLabel htmlFor="recovery-code">Recovery code</FieldLabel>
      <InputOTP
        id="recovery-code"
        maxLength={8}
        pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
        value={value}
        onChange={(next) => setValue(next.toUpperCase())}
      >
        <InputOTPGroup>
          ${slots(0, 4, 'className="font-mono"')}
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          ${slots(4, 8, 'className="font-mono"')}
        </InputOTPGroup>
      </InputOTP>
      <FieldDescription>Use one of the codes you saved when enabling 2FA.</FieldDescription>
    </Field>
  )
}`,
  },
  {
    name: "LettersOnlyRoomCode",
    description: "Letters-only code input for joining a live quiz room.",
    imports: { "input-otp": ["REGEXP_ONLY_CHARS"] },
    code: `
export default function LettersOnlyRoomCode() {
  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-4 text-center">
      <div className="space-y-1">
        <h3 className="text-sm font-semibold">Join a quiz</h3>
        <p className="text-xs text-muted-foreground">Enter the 5-letter room code on the host&apos;s screen.</p>
      </div>
      <InputOTP maxLength={5} pattern={REGEXP_ONLY_CHARS} inputMode="text">
        <InputOTPGroup>
          ${slots(0, 5, 'className="size-10 text-base uppercase"')}
        </InputOTPGroup>
      </InputOTP>
      <Button className="w-full">
        Join room
        <ArrowRightIcon data-icon="inline-end" />
      </Button>
    </div>
  )
}`,
  },
  {
    name: "PhoneSmsVerification",
    description: "SMS verification step with a masked phone number and an option to change it.",
    imports: DIGITS,
    code: `
export default function PhoneSmsVerification() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex items-start gap-3">
        <div className="flex size-9 shrink-0 items-center justify-center bg-muted">
          <SmartphoneIcon className="size-4" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium">Enter the code we texted you</p>
          <p className="text-xs text-muted-foreground">
            Sent to +1 ••• ••• 4821.{" "}
            <a href="#" className="text-foreground underline underline-offset-4">Change number</a>
          </p>
        </div>
      </div>
      <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS} autoComplete="one-time-code">
        <InputOTPGroup>
          ${slots(0, 4, 'className="size-11 text-lg"')}
        </InputOTPGroup>
      </InputOTP>
      <Button>Verify phone</Button>
    </div>
  )
}`,
  },
  {
    name: "SpacedSlotBoxes",
    description: "Each digit in its own separated box instead of a joined group.",
    code: `
export default function SpacedSlotBoxes() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup className="gap-2">
        ${slots(0, 6, 'className="size-10 border text-sm"')}
      </InputOTPGroup>
    </InputOTP>
  )
}`,
  },
  {
    name: "UnderlineSlots",
    description: "Minimal underline-only slots for a clean, borderless verification look.",
    code: `
export default function UnderlineSlots() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup className="gap-3">
        ${slots(0, 6, 'className="size-9 border-0 border-b-2 bg-transparent text-lg first:border-s-0 data-[active=true]:ring-0 dark:bg-transparent"')}
      </InputOTPGroup>
    </InputOTP>
  )
}`,
  },
  {
    name: "MaskedPinSlots",
    description: "Custom slots built on OTPInputContext that mask each PIN digit as a dot.",
    imports: { "input-otp": ["OTPInputContext"] },
    code: `
function MaskedSlot({ index }: { index: number }) {
  const context = React.useContext(OTPInputContext)
  const slot = context.slots[index]

  return (
    <div
      data-active={slot?.isActive}
      className="relative flex size-10 items-center justify-center border-y border-e border-input first:border-s data-[active=true]:z-10 data-[active=true]:border-ring data-[active=true]:ring-1 data-[active=true]:ring-ring/50"
    >
      {slot?.char ? <span className="size-2.5 rounded-full bg-foreground" /> : null}
      {slot?.hasFakeCaret && <span className="h-4 w-px animate-caret-blink bg-foreground" />}
    </div>
  )
}

export default function MaskedPinSlots() {
  return (
    <Field className="w-fit">
      <FieldLabel htmlFor="card-pin">Card PIN</FieldLabel>
      <InputOTP id="card-pin" maxLength={4} inputMode="numeric">
        <InputOTPGroup>
          {[0, 1, 2, 3].map((index) => (
            <MaskedSlot key={index} index={index} />
          ))}
        </InputOTPGroup>
      </InputOTP>
      <FieldDescription>Digits are hidden as you type.</FieldDescription>
    </Field>
  )
}`,
  },
  {
    name: "BankTransferConfirmation",
    description: "Transfer summary that requires a one-time code before sending money.",
    imports: DIGITS,
    code: `
const rows = [
  { label: "To", value: "Harbor Lane Studio" },
  { label: "Account", value: "•••• 7730" },
  { label: "Amount", value: "$2,450.00" },
]

export default function BankTransferConfirmation() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Confirm transfer</CardTitle>
        <CardDescription>Enter the code sent to your banking app.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <dl className="divide-y border text-xs">
          {rows.map((row) => (
            <div key={row.label} className="flex justify-between px-3 py-2">
              <dt className="text-muted-foreground">{row.label}</dt>
              <dd className="font-medium">{row.value}</dd>
            </div>
          ))}
        </dl>
        <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS} containerClassName="justify-center">
          ${threeThree()}
        </InputOTP>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline" className="flex-1">Cancel</Button>
        <Button className="flex-1">Send $2,450</Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "CardPaymentChallenge",
    description: "Checkout card-verification challenge with the issuer, merchant, and amount above the code.",
    imports: DIGITS,
    code: `
export default function CardPaymentChallenge() {
  return (
    <div className="w-full max-w-sm border bg-background">
      <div className="flex items-center justify-between border-b bg-muted/50 px-4 py-3">
        <div className="flex items-center gap-2 text-xs font-medium">
          <CreditCardIcon className="size-4" />
          Northwind Bank
        </div>
        <Badge variant="outline">Secure check</Badge>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <p className="text-xs text-muted-foreground">
          You&apos;re paying <span className="font-medium text-foreground">$84.20</span> to Fernwood Outfitters with the card ending in 1094.
        </p>
        <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
          ${six('className="size-9"')}
        </InputOTP>
        <Button className="w-full">Authorize payment</Button>
        <Button variant="ghost" size="sm" className="self-center">Cancel and return to store</Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "TvPairingCode",
    description: "Pair a TV app by entering the eight-character code displayed on the screen.",
    imports: { "input-otp": ["REGEXP_ONLY_DIGITS_AND_CHARS"] },
    code: `
export default function TvPairingCode() {
  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-4 text-center">
      <div className="flex h-20 w-32 items-center justify-center border-4 border-foreground/80 bg-gradient-to-br from-muted to-background">
        <TvIcon className="size-6 text-muted-foreground" />
      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-semibold">Connect your TV</h3>
        <p className="text-xs text-muted-foreground">Enter the code shown on your TV to sign in to Reelhouse.</p>
      </div>
      <InputOTP maxLength={8} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
        <InputOTPGroup>
          ${slots(0, 4, 'className="uppercase"')}
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          ${slots(4, 8, 'className="uppercase"')}
        </InputOTPGroup>
      </InputOTP>
      <Button className="w-full">Pair device</Button>
    </div>
  )
}`,
  },
  {
    name: "DoorLockKeypad",
    description: "Controlled PIN input paired with an on-screen numeric keypad for a smart lock.",
    code: `
const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

export default function DoorLockKeypad() {
  const [value, setValue] = React.useState("")
  const press = (digit: string) => setValue((v) => (v.length < 4 ? v + digit : v))

  return (
    <div className="flex w-full max-w-[16rem] flex-col items-center gap-4 border p-4">
      <div className="flex items-center gap-2 text-xs font-medium">
        <LockKeyholeIcon className="size-4" />
        Front door
      </div>
      <InputOTP maxLength={4} value={value} onChange={setValue}>
        <InputOTPGroup>
          ${slots(0, 4, 'className="size-10 text-base"')}
        </InputOTPGroup>
      </InputOTP>
      <div className="grid w-full grid-cols-3 gap-2">
        {keys.map((key) => (
          <Button key={key} variant="outline" onClick={() => press(key)}>
            {key}
          </Button>
        ))}
        <Button variant="ghost" aria-label="Clear" onClick={() => setValue("")}>
          <XIcon />
        </Button>
        <Button variant="outline" onClick={() => press("0")}>0</Button>
        <Button variant="ghost" aria-label="Delete" onClick={() => setValue((v) => v.slice(0, -1))}>
          <DeleteIcon />
        </Button>
      </div>
      <Button className="w-full" disabled={value.length < 4}>Unlock</Button>
    </div>
  )
}`,
  },
  {
    name: "DeleteAccountConfirmation",
    description: "Destructive account deletion gated behind a confirmation code.",
    code: `
export default function DeleteAccountConfirmation() {
  const [value, setValue] = React.useState("")

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border border-destructive/40 p-5">
      <div className="flex items-center gap-2 text-sm font-semibold text-destructive">
        <TriangleAlertIcon className="size-4" />
        Delete workspace
      </div>
      <p className="text-xs text-muted-foreground">
        This permanently removes 14 projects and 2.3 GB of files. Enter the code we emailed to the owner to continue.
      </p>
      <InputOTP maxLength={6} value={value} onChange={setValue}>
        ${six()}
      </InputOTP>
      <Button variant="destructive" disabled={value.length < 6}>
        <Trash2Icon data-icon="inline-start" />
        Delete forever
      </Button>
    </div>
  )
}`,
  },
  {
    name: "EnableTwoFactorDialog",
    description: "Dialog that asks for an authenticator code to finish enabling two-factor authentication.",
    imports: DIGITS,
    code: `
export default function EnableTwoFactorDialog() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        <ShieldIcon data-icon="inline-start" />
        Enable 2FA
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Confirm your authenticator</DialogTitle>
          <DialogDescription>Enter the 6-digit code from your app to finish setup.</DialogDescription>
        </DialogHeader>
        <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS} containerClassName="justify-center py-2">
          ${threeThree()}
        </InputOTP>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
          <Button>Enable</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    name: "AuthenticatorSetup",
    description: "Authenticator app setup with a QR placeholder, manual key, and a code to confirm.",
    imports: DIGITS,
    code: `
export default function AuthenticatorSetup() {
  return (
    <div className="flex w-full max-w-md flex-col gap-5 border p-5 sm:flex-row">
      <svg viewBox="0 0 21 21" className="size-28 shrink-0 self-center bg-white p-2 text-black" aria-label="QR code">
        <path fill="currentColor" d="M0 0h7v7H0zM1 1v5h5V1zM2 2h3v3H2zM14 0h7v7h-7zM15 1v5h5V1zM16 2h3v3h-3zM0 14h7v7H0zM1 15v5h5v-5zM2 16h3v3H2zM9 0h2v2H9zM9 3h1v3H9zM11 4h2v2h-2zM8 8h3v2H8zM12 8h2v1h-2zM15 9h3v2h-3zM9 11h2v3H9zM12 12h3v2h-3zM16 13h2v3h-2zM9 16h3v2H9zM13 16h2v5h-2zM18 18h3v3h-3zM0 9h2v2H0zM3 10h3v2H3z" />
      </svg>
      <div className="flex flex-1 flex-col gap-3">
        <div className="space-y-1">
          <p className="text-sm font-medium">Scan with your authenticator</p>
          <p className="text-xs text-muted-foreground">
            Or enter key <code className="bg-muted px-1 font-mono">JBSW Y3DP EHPK 3PXP</code>
          </p>
        </div>
        <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
          ${six()}
        </InputOTP>
        <Button size="sm" className="self-start">Verify and activate</Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "BackupCodeToggle",
    description: "Switch between an authenticator code and a longer backup code, changing the slot count.",
    imports: { "input-otp": ["REGEXP_ONLY_DIGITS", "REGEXP_ONLY_DIGITS_AND_CHARS"] },
    code: `
export default function BackupCodeToggle() {
  const [mode, setMode] = React.useState<"app" | "backup">("app")
  const length = mode === "app" ? 6 : 10

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="space-y-1">
        <p className="text-sm font-medium">{mode === "app" ? "Authenticator code" : "Backup code"}</p>
        <p className="text-xs text-muted-foreground">
          {mode === "app" ? "Enter the 6-digit code from your app." : "Enter one of your 10-character backup codes."}
        </p>
      </div>
      <InputOTP
        key={mode}
        maxLength={length}
        pattern={mode === "app" ? REGEXP_ONLY_DIGITS : REGEXP_ONLY_DIGITS_AND_CHARS}
      >
        {mode === "app" ? (
          <InputOTPGroup>
            ${slots(0, 6)}
          </InputOTPGroup>
        ) : (
          <>
            <InputOTPGroup>
              ${slots(0, 5, 'className="w-7 font-mono uppercase"')}
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              ${slots(5, 10, 'className="w-7 font-mono uppercase"')}
            </InputOTPGroup>
          </>
        )}
      </InputOTP>
      <Button
        variant="link"
        size="sm"
        className="self-start px-0"
        onClick={() => setMode(mode === "app" ? "backup" : "app")}
      >
        {mode === "app" ? "Use a backup code instead" : "Use authenticator app"}
      </Button>
    </div>
  )
}`,
  },
  {
    name: "PasteFromClipboard",
    description: "Controlled OTP with a button that pastes a numeric code straight from the clipboard.",
    code: `
export default function PasteFromClipboard() {
  const [value, setValue] = React.useState("")

  async function handlePaste() {
    try {
      const text = await navigator.clipboard.readText()
      setValue(text.replace(/\\D/g, "").slice(0, 6))
    } catch {
      // Clipboard access denied; the user can still type or paste manually.
    }
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <InputOTP maxLength={6} value={value} onChange={setValue}>
        ${six()}
      </InputOTP>
      <Button variant="outline" size="sm" onClick={handlePaste}>
        <ClipboardPasteIcon data-icon="inline-start" />
        Paste code
      </Button>
    </div>
  )
}`,
  },
  {
    name: "StripDashesOnPaste",
    description: "Uses pasteTransformer so codes pasted as 123-456 are cleaned before filling the slots.",
    imports: DIGITS,
    code: `
export default function StripDashesOnPaste() {
  return (
    <Field className="w-fit">
      <FieldLabel htmlFor="otp-paste">Paste your code</FieldLabel>
      <InputOTP
        id="otp-paste"
        maxLength={6}
        pattern={REGEXP_ONLY_DIGITS}
        pasteTransformer={(pasted) => pasted.replace(/[^0-9]/g, "")}
      >
        ${threeThree()}
      </InputOTP>
      <FieldDescription>Dashes and spaces are removed automatically, e.g. 482-913.</FieldDescription>
    </Field>
  )
}`,
  },
  {
    name: "VerifiedSuccessState",
    description: "Completed OTP rendered with success-colored slots and a verified confirmation.",
    code: `
export default function VerifiedSuccessState() {
  return (
    <div className="flex flex-col items-center gap-3">
      <InputOTP maxLength={6} value="305918" disabled containerClassName="has-disabled:opacity-100">
        ${six('className="border-emerald-500/60 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"')}
      </InputOTP>
      <p className="flex items-center gap-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-400">
        <BadgeCheckIcon className="size-4" />
        Email verified
      </p>
    </div>
  )
}`,
  },
  {
    name: "AttemptsRemaining",
    description: "Wrong-code flow that counts down remaining attempts and flags the slots invalid.",
    code: `
const CORRECT = "246810"

export default function AttemptsRemaining() {
  const [value, setValue] = React.useState("")
  const [attempts, setAttempts] = React.useState(3)
  const [invalid, setInvalid] = React.useState(false)

  function handleComplete(code: string) {
    if (code === CORRECT) return
    setInvalid(true)
    setAttempts((a) => Math.max(0, a - 1))
  }

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium">Security code</span>
        <Badge variant={attempts <= 1 ? "destructive" : "secondary"}>{attempts} attempts left</Badge>
      </div>
      <InputOTP
        maxLength={6}
        value={value}
        disabled={attempts === 0}
        onChange={(next) => {
          setValue(next)
          setInvalid(false)
        }}
        onComplete={handleComplete}
      >
        <InputOTPGroup>
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <InputOTPSlot key={index} index={index} aria-invalid={invalid || undefined} />
          ))}
        </InputOTPGroup>
      </InputOTP>
      <p className="text-xs text-muted-foreground">
        {invalid ? "Incorrect code. Hint: try 246810." : "Enter the code from your email."}
      </p>
    </div>
  )
}`,
  },
  {
    name: "GiftCardPin",
    description: "Gift card redemption with a card number field and a four-digit scratch-off PIN.",
    imports: DIGITS,
    code: `
export default function GiftCardPin() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-5">
      <div className="flex h-24 flex-col justify-between bg-gradient-to-br from-violet-500 to-fuchsia-500 p-3 text-white">
        <GiftIcon className="size-5" />
        <span className="font-mono text-xs tracking-widest">6011 •••• •••• 3307</span>
      </div>
      <Field>
        <FieldLabel htmlFor="gift-pin">Scratch-off PIN</FieldLabel>
        <InputOTP id="gift-pin" maxLength={4} pattern={REGEXP_ONLY_DIGITS}>
          <InputOTPGroup>
            ${slots(0, 4)}
          </InputOTPGroup>
        </InputOTP>
      </Field>
      <Button>Redeem $50.00</Button>
    </div>
  )
}`,
  },
  {
    name: "LicenseKeyActivation",
    description: "Twelve-character software license key split into three groups of four.",
    imports: { "input-otp": ["REGEXP_ONLY_DIGITS_AND_CHARS"] },
    code: `
export default function LicenseKeyActivation() {
  return (
    <Field className="w-fit">
      <FieldLabel htmlFor="license-key">License key</FieldLabel>
      <InputOTP id="license-key" maxLength={12} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
        <InputOTPGroup>
          ${slots(0, 4, 'className="size-6 font-mono uppercase"')}
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          ${slots(4, 8, 'className="size-6 font-mono uppercase"')}
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          ${slots(8, 12, 'className="size-6 font-mono uppercase"')}
        </InputOTPGroup>
      </InputOTP>
      <FieldDescription>Find it in your purchase receipt from Quillstack Pro.</FieldDescription>
    </Field>
  )
}`,
  },
  {
    name: "ChangeEmailConfirmation",
    description: "Confirm an email change by showing old and new addresses above the code input.",
    imports: DIGITS,
    code: `
export default function ChangeEmailConfirmation() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex items-center gap-2 border bg-muted/40 p-3 text-xs">
        <span className="truncate text-muted-foreground line-through">jonah@oldmail.dev</span>
        <ArrowRightIcon className="size-3.5 shrink-0" />
        <span className="truncate font-medium">jonah.reyes@fieldnotes.io</span>
      </div>
      <Field>
        <FieldLabel htmlFor="change-email-otp">Code sent to your new address</FieldLabel>
        <InputOTP id="change-email-otp" maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
          ${six()}
        </InputOTP>
      </Field>
      <div className="flex gap-2">
        <Button variant="outline" size="sm">Cancel change</Button>
        <Button size="sm">Confirm email</Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "OnboardingVerifyStep",
    description: "Onboarding wizard step with progress and step counter around the OTP input.",
    imports: DIGITS,
    code: `
export default function OnboardingVerifyStep() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-5">
      <div className="space-y-2">
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Step 2 of 3</span>
          <span>Verify email</span>
        </div>
        <Progress value={66} />
      </div>
      <div className="space-y-1">
        <h3 className="text-base font-semibold">Confirm it&apos;s you</h3>
        <p className="text-xs text-muted-foreground">Enter the code we sent to priya@orbitlabs.co</p>
      </div>
      <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
        ${six('className="size-10 text-sm"')}
      </InputOTP>
      <div className="flex justify-between">
        <Button variant="ghost">
          <ArrowLeftIcon data-icon="inline-start" />
          Back
        </Button>
        <Button>Next</Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "FormSubmitWithValidation",
    description: "OTP inside a form that validates length on submit and supports pressing Enter.",
    code: `
export default function FormSubmitWithValidation() {
  const [value, setValue] = React.useState("")
  const [error, setError] = React.useState("")
  const [sent, setSent] = React.useState(false)

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    if (value.length < 6) {
      setError("Enter all 6 digits.")
      return
    }
    setError("")
    setSent(true)
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-xs flex-col gap-3">
      <Field data-invalid={!!error || undefined}>
        <FieldLabel htmlFor="otp-form">One-time code</FieldLabel>
        <InputOTP
          id="otp-form"
          maxLength={6}
          value={value}
          onChange={(next) => {
            setValue(next)
            setSent(false)
          }}
        >
          <InputOTPGroup>
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <InputOTPSlot key={index} index={index} aria-invalid={!!error || undefined} />
            ))}
          </InputOTPGroup>
        </InputOTP>
        {error ? <FieldError>{error}</FieldError> : null}
      </Field>
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1 text-xs text-muted-foreground">
          Press <Kbd>Enter</Kbd> to submit
        </span>
        <Button type="submit" size="sm">{sent ? "Submitted" : "Submit"}</Button>
      </div>
    </form>
  )
}`,
  },
  {
    name: "JoinPrivateChatRoom",
    description: "Private chat room join screen with participant avatars and a six-character invite code.",
    imports: { "input-otp": ["REGEXP_ONLY_DIGITS_AND_CHARS"] },
    code: `
const members = ["Ava Lindqvist", "Ben Okafor", "Chloe Marsh"]

export default function JoinPrivateChatRoom() {
  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-4 border p-5 text-center">
      <AvatarGroup>
        {members.map((member) => (
          <Avatar key={member}>
            <AvatarFallback>{member.split(" ").map((p) => p[0]).join("")}</AvatarFallback>
          </Avatar>
        ))}
        <AvatarGroupCount>+9</AvatarGroupCount>
      </AvatarGroup>
      <div className="space-y-1">
        <h3 className="text-sm font-semibold">#design-crit is private</h3>
        <p className="text-xs text-muted-foreground">Ask a member for the invite code to join.</p>
      </div>
      <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
        ${six('className="uppercase"')}
      </InputOTP>
      <Button className="w-full">
        <MessageSquareIcon data-icon="inline-start" />
        Join channel
      </Button>
    </div>
  )
}`,
  },
  {
    name: "EventCheckInDesk",
    description: "Staff check-in desk that looks up an attendee by a five-digit ticket code.",
    imports: DIGITS,
    code: `
export default function EventCheckInDesk() {
  const [value, setValue] = React.useState("")
  const found = value === "40217"

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm font-medium">
          <TicketIcon className="size-4" />
          Check-in
        </span>
        <Badge variant="secondary">Hall B · 212 / 480</Badge>
      </div>
      <InputOTP maxLength={5} pattern={REGEXP_ONLY_DIGITS} value={value} onChange={setValue}>
        <InputOTPGroup>
          ${slots(0, 5, 'className="size-11 text-lg"')}
        </InputOTPGroup>
      </InputOTP>
      <div className="flex min-h-12 items-center gap-3 border border-dashed p-2 text-xs">
        {found ? (
          <>
            <Avatar size="sm">
              <AvatarFallback>LM</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="font-medium">Lena Moreau</p>
              <p className="text-muted-foreground">Speaker pass</p>
            </div>
            <Button size="sm">Check in</Button>
          </>
        ) : (
          <span className="text-muted-foreground">Try ticket code 40217</span>
        )}
      </div>
    </div>
  )
}`,
  },
  {
    name: "ParentalControlsPin",
    description: "Settings panel where a switch reveals a four-digit PIN for parental controls.",
    imports: DIGITS,
    code: `
export default function ParentalControlsPin() {
  const [enabled, setEnabled] = React.useState(true)

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <Label htmlFor="parental">Parental controls</Label>
          <p className="mt-1 text-xs text-muted-foreground">Require a PIN for mature titles.</p>
        </div>
        <Switch id="parental" checked={enabled} onCheckedChange={setEnabled} />
      </div>
      <Separator />
      <Field className="w-fit">
        <FieldLabel htmlFor="parental-pin">Profile PIN</FieldLabel>
        <InputOTP id="parental-pin" maxLength={4} pattern={REGEXP_ONLY_DIGITS} disabled={!enabled}>
          <InputOTPGroup>
            ${slots(0, 4)}
          </InputOTPGroup>
        </InputOTP>
        <FieldDescription>{enabled ? "Choose 4 digits you'll remember." : "Turn on controls to set a PIN."}</FieldDescription>
      </Field>
    </div>
  )
}`,
  },
  {
    name: "RevealApiSecret",
    description: "Re-authentication prompt that reveals an API secret once the code is complete.",
    code: `
export default function RevealApiSecret() {
  const [revealed, setRevealed] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium">Production secret key</span>
        <Badge variant="outline">Live</Badge>
      </div>
      <div className="flex items-center gap-2 bg-muted px-3 py-2 font-mono text-xs">
        <KeyRoundIcon className="size-3.5 shrink-0" />
        <span className="truncate">{revealed ? "key_demo_aZr4" : "key_demo_••••••••••••••••••"}</span>
      </div>
      {!revealed && (
        <>
          <p className="text-xs text-muted-foreground">Enter your 2FA code to reveal this key.</p>
          <InputOTP maxLength={6} onComplete={() => setRevealed(true)}>
            ${six('className="size-7"')}
          </InputOTP>
        </>
      )}
      {revealed && (
        <Button variant="outline" size="sm" onClick={() => setRevealed(false)}>
          <EyeOffIcon data-icon="inline-start" />
          Hide key
        </Button>
      )}
    </div>
  )
}`,
  },
  {
    name: "PayoutSecurityCode",
    description: "Payout confirmation that shows the amount and destination before the security code.",
    imports: DIGITS,
    code: `
export default function PayoutSecurityCode() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-5">
      <div className="text-center">
        <p className="text-xs text-muted-foreground">Withdraw to Checking •• 2201</p>
        <p className="text-3xl font-semibold tabular-nums">$12,800.00</p>
      </div>
      <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS} containerClassName="justify-center">
        ${threeThree('className="size-10"')}
      </InputOTP>
      <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
        <ClockIcon className="size-3.5" />
        Funds arrive in 1-2 business days
      </p>
      <Button>Confirm payout</Button>
    </div>
  )
}`,
  },
  {
    name: "DotSeparatorGroups",
    description: "Pairs of slots separated by a custom dot divider instead of the default dash.",
    code: `
function Dot() {
  return <div role="separator" className="mx-1 size-1.5 rounded-full bg-muted-foreground/50" />
}

export default function DotSeparatorGroups() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        ${slots(0, 2)}
      </InputOTPGroup>
      <Dot />
      <InputOTPGroup>
        ${slots(2, 4)}
      </InputOTPGroup>
      <Dot />
      <InputOTPGroup>
        ${slots(4, 6)}
      </InputOTPGroup>
    </InputOTP>
  )
}`,
  },
  {
    name: "CircularSlots",
    description: "Round slots with spacing for a softer, friendlier verification style.",
    code: `
export default function CircularSlots() {
  return (
    <InputOTP maxLength={4}>
      <InputOTPGroup className="gap-3">
        ${slots(0, 4, 'className="size-12 rounded-full border text-lg first:rounded-full last:rounded-full"')}
      </InputOTPGroup>
    </InputOTP>
  )
}`,
  },
  {
    name: "FilledSlotHighlight",
    description: "Controlled OTP that tints each slot once it has a digit.",
    code: `
export default function FilledSlotHighlight() {
  const [value, setValue] = React.useState("38")

  return (
    <InputOTP maxLength={6} value={value} onChange={setValue}>
      <InputOTPGroup className="gap-1.5">
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <InputOTPSlot
            key={index}
            index={index}
            className={cn("size-10 border text-base", value[index] && "border-primary/40 bg-primary/10 dark:bg-primary/15")}
          />
        ))}
      </InputOTPGroup>
    </InputOTP>
  )
}`,
  },
  {
    name: "EntryProgressBar",
    description: "OTP input with a progress bar that fills as digits are entered.",
    code: `
export default function EntryProgressBar() {
  const [value, setValue] = React.useState("")

  return (
    <div className="flex w-fit flex-col gap-3">
      <InputOTP maxLength={6} value={value} onChange={setValue}>
        ${six()}
      </InputOTP>
      <Progress value={(value.length / 6) * 100} />
      <p className="text-center text-xs text-muted-foreground tabular-nums">{value.length} of 6 digits</p>
    </div>
  )
}`,
  },
  {
    name: "MagicCodeTwoStep",
    description: "Two-step passwordless sign-in: enter email, then the code, with an edit-email link.",
    imports: DIGITS,
    code: `
export default function MagicCodeTwoStep() {
  const [email, setEmail] = React.useState("sam@parcelpost.dev")
  const [step, setStep] = React.useState<"email" | "code">("code")

  return (
    <div className="flex w-full max-w-xs flex-col gap-4">
      {step === "email" ? (
        <>
          <Field>
            <FieldLabel htmlFor="magic-email">Email</FieldLabel>
            <Input id="magic-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Field>
          <Button onClick={() => setStep("code")}>Send sign-in code</Button>
        </>
      ) : (
        <>
          <div className="flex items-center justify-between gap-2 text-xs">
            <span className="truncate text-muted-foreground">{email}</span>
            <Button variant="link" size="sm" className="px-0" onClick={() => setStep("email")}>
              <PencilIcon data-icon="inline-start" />
              Edit
            </Button>
          </div>
          <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS} autoFocus>
            ${six()}
          </InputOTP>
          <Button>Sign in</Button>
        </>
      )}
    </div>
  )
}`,
  },
  {
    name: "DeliveryMethodChooser",
    description: "Choose SMS, voice call, or email delivery for the code with a radio group above the input.",
    imports: DIGITS,
    code: `
const methods = [
  { value: "sms", label: "Text message", icon: MessageSquareIcon },
  { value: "call", label: "Voice call", icon: PhoneIcon },
  { value: "email", label: "Email", icon: MailIcon },
]

export default function DeliveryMethodChooser() {
  const [method, setMethod] = React.useState("sms")

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <RadioGroup value={method} onValueChange={(v) => setMethod(String(v))} className="grid grid-cols-3 gap-2">
        {methods.map((m) => (
          <Label
            key={m.value}
            htmlFor={"method-" + m.value}
            className="flex-col gap-2 border p-3 has-data-checked:border-primary has-data-checked:bg-muted"
          >
            <RadioGroupItem id={"method-" + m.value} value={m.value} className="sr-only" />
            <m.icon className="size-4" />
            {m.label}
          </Label>
        ))}
      </RadioGroup>
      <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
        ${six()}
      </InputOTP>
      <Button variant="outline" size="sm" className="self-start">Send new code</Button>
    </div>
  )
}`,
  },
  {
    name: "WorkspaceInviteCode",
    description: "Join a team workspace with an invite code, showing the workspace preview card.",
    imports: { "input-otp": ["REGEXP_ONLY_DIGITS_AND_CHARS"] },
    code: `
export default function WorkspaceInviteCode() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <BuildingIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Tidewater Studio</ItemTitle>
          <ItemDescription>38 members · Design team</ItemDescription>
        </ItemContent>
      </Item>
      <Field>
        <FieldLabel htmlFor="invite-code">Invite code</FieldLabel>
        <InputOTP id="invite-code" maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
          <InputOTPGroup>
            ${slots(0, 3, 'className="uppercase"')}
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            ${slots(3, 6, 'className="uppercase"')}
          </InputOTPGroup>
        </InputOTP>
      </Field>
      <Button>Join workspace</Button>
    </div>
  )
}`,
  },
  {
    name: "ReadOnlyPairingCodeDisplay",
    description: "Read-only OTP used to display a generated code for another device, with a copy button.",
    code: `
export default function ReadOnlyPairingCodeDisplay() {
  const [copied, setCopied] = React.useState(false)
  const code = "829304"

  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-3 border p-4 text-center">
      <p className="text-xs text-muted-foreground">Enter this code on your other device</p>
      <InputOTP maxLength={6} value={code} disabled containerClassName="has-disabled:opacity-100">
        ${threeThree('className="size-10 bg-muted text-base font-semibold"')}
      </InputOTP>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => {
          void navigator.clipboard?.writeText(code)
          setCopied(true)
        }}
      >
        {copied ? <CheckIcon data-icon="inline-start" /> : <CopyIcon data-icon="inline-start" />}
        {copied ? "Copied" : "Copy code"}
      </Button>
    </div>
  )
}`,
  },
  {
    name: "VerificationWithTooltipHelp",
    description: "OTP field label with a tooltip explaining where to find the code.",
    imports: DIGITS,
    code: `
export default function VerificationWithTooltipHelp() {
  return (
    <Field className="w-fit">
      <div className="flex items-center gap-1.5">
        <FieldLabel htmlFor="otp-help">Device code</FieldLabel>
        <Tooltip>
          <TooltipTrigger render={<Button variant="ghost" size="icon-xs" aria-label="Where is my code?" />}>
            <CircleHelpIcon />
          </TooltipTrigger>
          <TooltipContent>Open Settings → Devices on your phone to see the code.</TooltipContent>
        </Tooltip>
      </div>
      <InputOTP id="otp-help" maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
        ${threeThree()}
      </InputOTP>
    </Field>
  )
}`,
  },
  {
    name: "SecurityKeyFallback",
    description: "Sign-in screen offering a passkey first and an OTP code as a fallback under a divider.",
    imports: DIGITS,
    code: `
export default function SecurityKeyFallback() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-4">
      <Button variant="outline">
        <FingerprintIcon data-icon="inline-start" />
        Use passkey
      </Button>
      <div className="flex items-center gap-3 text-xs text-muted-foreground">
        <Separator className="flex-1" />
        or enter a code
        <Separator className="flex-1" />
      </div>
      <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS} containerClassName="justify-center">
        ${six()}
      </InputOTP>
      <Button>Sign in</Button>
    </div>
  )
}`,
  },
]

export default examples
