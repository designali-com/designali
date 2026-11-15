"use client"

import * as React from "react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@workspace/ui/components/drawer"
import { Field, FieldGroup, FieldLabel } from "@workspace/ui/components/field"
import {
  NativeSelect,
  NativeSelectOption,
} from "@workspace/ui/components/native-select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const users = [
  {
    id: 1,
    name: "Amara Nwosu",
    email: "amara@helio.dev",
    role: "Owner",
    lastSeen: "Online now",
    mfa: true,
  },
  {
    id: 2,
    name: "Bastian Krüger",
    email: "bastian@helio.dev",
    role: "Admin",
    lastSeen: "2h ago",
    mfa: true,
  },
  {
    id: 3,
    name: "Chiara Romano",
    email: "chiara@helio.dev",
    role: "Member",
    lastSeen: "3d ago",
    mfa: false,
  },
]

type User = (typeof users)[number]

export default function UserRowDetailsDrawer() {
  const [user, setUser] = React.useState<User | null>(null)

  return (
    <div className="w-full max-w-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((row) => (
            <TableRow
              key={row.id}
              className="cursor-pointer"
              onClick={() => setUser(row)}
            >
              <TableCell>
                <p className="font-medium">{row.name}</p>
                <p className="text-muted-foreground">{row.email}</p>
              </TableCell>
              <TableCell>{row.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Drawer
        open={user !== null}
        onOpenChange={(open) => !open && setUser(null)}
        swipeDirection="right"
      >
        <DrawerContent>
          {user && (
            <>
              <DrawerHeader className="items-start">
                <Avatar size="lg">
                  <AvatarFallback>
                    {user.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <DrawerTitle className="mt-2 text-base">
                  {user.name}
                </DrawerTitle>
                <DrawerDescription>{user.email}</DrawerDescription>
              </DrawerHeader>
              <FieldGroup className="flex-1 p-4">
                <Field>
                  <FieldLabel htmlFor="u-role">Role</FieldLabel>
                  <NativeSelect
                    id="u-role"
                    key={user.id}
                    defaultValue={user.role}
                    className="w-full"
                    disabled={user.role === "Owner"}
                  >
                    <NativeSelectOption value="Owner">Owner</NativeSelectOption>
                    <NativeSelectOption value="Admin">Admin</NativeSelectOption>
                    <NativeSelectOption value="Member">
                      Member
                    </NativeSelectOption>
                  </NativeSelect>
                </Field>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Last seen</span>
                  <span>{user.lastSeen}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Two-factor</span>
                  <Badge variant={user.mfa ? "secondary" : "destructive"}>
                    {user.mfa ? "Enabled" : "Not set up"}
                  </Badge>
                </div>
              </FieldGroup>
              <DrawerFooter className="border-t pt-4">
                <Button variant="destructive" disabled={user.role === "Owner"}>
                  Remove from workspace
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  )
}
