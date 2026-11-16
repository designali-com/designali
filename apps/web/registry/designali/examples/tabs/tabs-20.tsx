import {
  CreditCard as CreditCardIcon,
  Landmark as LandmarkIcon,
  Wallet as WalletIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

export default function PaymentMethodTabs() {
  return (
    <Tabs defaultValue="card" className="w-full max-w-sm border p-4">
      <p className="text-sm font-medium">Payment method</p>
      <TabsList className="w-full">
        <TabsTrigger value="card">
          <CreditCardIcon data-icon="inline-start" />
          Card
        </TabsTrigger>
        <TabsTrigger value="bank">
          <LandmarkIcon data-icon="inline-start" />
          Bank
        </TabsTrigger>
        <TabsTrigger value="wallet">
          <WalletIcon data-icon="inline-start" />
          Wallet
        </TabsTrigger>
      </TabsList>
      <TabsContent value="card" className="flex flex-col gap-2">
        <Input
          placeholder="Card number"
          inputMode="numeric"
          aria-label="Card number"
        />
        <div className="grid grid-cols-2 gap-2">
          <Input placeholder="MM / YY" aria-label="Expiry" />
          <Input placeholder="CVC" aria-label="CVC" />
        </div>
      </TabsContent>
      <TabsContent value="bank" className="text-muted-foreground">
        Transfer to IBAN DE00 1234 5678 9000 using reference{" "}
        <span className="font-mono text-foreground">DA-5531</span>.
      </TabsContent>
      <TabsContent value="wallet" className="text-muted-foreground">
        You&apos;ll be redirected to confirm the payment in your wallet app.
      </TabsContent>
      <Button className="w-full">Pay $64.00</Button>
    </Tabs>
  )
}
