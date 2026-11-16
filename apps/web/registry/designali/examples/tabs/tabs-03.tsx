import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

export default function AccountPasswordTabs() {
  return (
    <Tabs defaultValue="account" className="w-full max-w-sm">
      <TabsList className="w-full">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Update how your name appears to Designali teammates.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <div className="grid gap-1.5">
              <Label htmlFor="tabs-name">Display name</Label>
              <Input id="tabs-name" defaultValue="Ali Imam" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="tabs-handle">Handle</Label>
              <Input id="tabs-handle" defaultValue="@designali_com" />
            </div>
          </CardContent>
          <CardFooter>
            <Button size="sm">Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              You&apos;ll be signed out on other devices.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <div className="grid gap-1.5">
              <Label htmlFor="tabs-current">Current password</Label>
              <Input id="tabs-current" type="password" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="tabs-new">New password</Label>
              <Input id="tabs-new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button size="sm">Update password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
