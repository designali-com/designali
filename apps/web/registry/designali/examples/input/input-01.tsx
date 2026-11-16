import {
    Field,
    FieldDescription,
    FieldLabel,
  } from "@workspace/ui/components/field"
  import { Input } from "@workspace/ui/components/input"
  
  export function InputDemo() {
    return (
      <Field>
        <FieldLabel htmlFor="input-demo-api-key">Designali API key</FieldLabel>
        <Input id="input-demo-api-key" type="password" placeholder="dsgn_live_..." />
        <FieldDescription>
          Used to pull blocks from designali.com into your Next.js project.
        </FieldDescription>
      </Field>
    )
  }