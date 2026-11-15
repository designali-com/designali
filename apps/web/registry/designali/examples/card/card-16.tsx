import { NfcIcon, ShieldCheckIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

export default function PaymentMethodCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Payment method</CardTitle>
        <CardDescription>Charged on the 1st of every month.</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm">
            Replace
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="relative flex aspect-[1.6] max-w-64 flex-col justify-between overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-950 p-4 text-white">
          <div className="absolute -end-10 -top-10 size-32 rounded-full bg-white/10" />
          <div className="flex items-center justify-between">
            <NfcIcon className="size-5 opacity-80" />
            <span className="text-xs font-semibold tracking-widest">NOVA</span>
          </div>
          <div className="grid gap-2">
            <span className="font-mono text-sm tracking-widest">
              •••• •••• •••• 4821
            </span>
            <div className="flex justify-between text-[10px] uppercase opacity-80">
              <span>Daniel Kovac</span>
              <span>09/28</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <span className="flex items-center gap-1.5">
          <ShieldCheckIcon className="size-3.5 text-emerald-500" />
          Default · verified
        </span>
        <Button variant="link" size="sm" className="px-0">
          Billing history
        </Button>
      </CardFooter>
    </Card>
  )
}
