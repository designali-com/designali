import { ArrowUpIcon, SparklesIcon } from "lucide-react"

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "@workspace/ui/components/input-group"

export default function AiPromptTextareaField() {
  return (
    <Field className="w-full max-w-md">
      <FieldLabel htmlFor="ai-prompt">
        Describe the email you want to write
      </FieldLabel>
      <InputGroup>
        <InputGroupTextarea
          id="ai-prompt"
          rows={3}
          placeholder="Follow up with Dana about the Q3 proposal and ask for a call next week..."
        />
        <InputGroupAddon align="block-end" className="justify-between border-t">
          <InputGroupText>
            <SparklesIcon />
            Tone: Friendly
          </InputGroupText>
          <InputGroupButton
            variant="default"
            size="icon-xs"
            aria-label="Generate"
          >
            <ArrowUpIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>
        Drafts are private until you send them.
      </FieldDescription>
    </Field>
  )
}
