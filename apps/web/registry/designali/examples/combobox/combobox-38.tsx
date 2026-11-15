"use client"

import * as React from "react"
import { SendIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  ComboboxValue,
  useComboboxAnchor,
} from "@workspace/ui/components/combobox"

const people = [
  "Amara Obi",
  "Ben Carter",
  "Chen Wei",
  "Dara Flynn",
  "Eva Novak",
  "Felix Grün",
]
const roles = ["Can view", "Can comment", "Can edit"]

export default function ShareDialogInvite() {
  const anchor = useComboboxAnchor()
  const [invitees, setInvitees] = React.useState<string[]>([])
  return (
    <Card className="w-full max-w-md" size="sm">
      <CardHeader>
        <CardTitle>Share &quot;Q4 launch plan&quot;</CardTitle>
        <CardDescription>
          Invite people to collaborate on this doc.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 sm:flex-row">
        <Combobox
          multiple
          items={people}
          value={invitees}
          onValueChange={setInvitees}
        >
          <ComboboxChips ref={anchor} className="flex-1">
            <ComboboxValue>
              {(values: string[]) => (
                <React.Fragment>
                  {values.map((person) => (
                    <ComboboxChip key={person}>{person}</ComboboxChip>
                  ))}
                  <ComboboxChipsInput
                    placeholder={values.length ? "" : "Add people"}
                  />
                </React.Fragment>
              )}
            </ComboboxValue>
          </ComboboxChips>
          <ComboboxContent anchor={anchor}>
            <ComboboxEmpty>No people found.</ComboboxEmpty>
            <ComboboxList>
              {(item: string) => (
                <ComboboxItem key={item} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
        <Combobox items={roles} defaultValue="Can edit">
          <ComboboxTrigger
            render={
              <Button
                variant="outline"
                className="justify-between font-normal sm:w-32"
              />
            }
          >
            <ComboboxValue />
          </ComboboxTrigger>
          <ComboboxContent className="w-36" align="end">
            <ComboboxList>
              {(item: string) => (
                <ComboboxItem key={item} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </CardContent>
      <CardFooter className="justify-end">
        <Button disabled={invitees.length === 0}>
          <SendIcon data-icon="inline-start" />
          Invite {invitees.length > 0 && invitees.length}
        </Button>
      </CardFooter>
    </Card>
  )
}
