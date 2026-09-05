"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@workspace/ui/components/button";
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "@workspace/ui/components/field";
import { Input } from "@workspace/ui/components/input";

import { authClient } from "@/src/lib/auth/auth-client";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50),
  slug: z.string().min(2, "Slug must be at least 2 characters").max(50),
});

export function CreateOrganizationForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      slug: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);

      await authClient.organization.create({
        name: values.name,
        slug: values.slug,
      });

      toast.success("Organization created successfully");

      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to create organization");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form
      className="space-y-4"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <Field data-invalid={!!form.formState.errors.name}>
        <FieldLabel htmlFor="organization-name">
          Name
        </FieldLabel>

        <FieldContent>
          <Input
            id="organization-name"
            placeholder="My Organization"
            aria-invalid={!!form.formState.errors.name}
            {...form.register("name")}
          />

          {form.formState.errors.name && (
            <FieldError>
              {form.formState.errors.name.message}
            </FieldError>
          )}
        </FieldContent>
      </Field>

      <Field data-invalid={!!form.formState.errors.slug}>
        <FieldLabel htmlFor="organization-slug">
          Slug
        </FieldLabel>

        <FieldContent>
          <Input
            id="organization-slug"
            placeholder="my-org"
            aria-invalid={!!form.formState.errors.slug}
            {...form.register("slug")}
          />

          {form.formState.errors.slug && (
            <FieldError>
              {form.formState.errors.slug.message}
            </FieldError>
          )}
        </FieldContent>
      </Field>

      <Button disabled={isLoading} type="submit">
        {isLoading ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          "Create Organization"
        )}
      </Button>
    </form>
  );
}