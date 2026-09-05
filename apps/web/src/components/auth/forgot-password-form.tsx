"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "@workspace/ui/components/field";
import { Input } from "@workspace/ui/components/input";

import { authClient } from "@/src/lib/auth/auth-client";
import { cn } from "@workspace/ui/lib/utils";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
});

export function ForgotPasswordForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    try {
      const { error } = await authClient.requestPasswordReset({
        email: values.email,
        redirectTo: "/reset-password",
      });

      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Password reset email sent");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  const emailError = form.formState.errors.email;

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Forgot Password</CardTitle>

          <CardDescription>
            Enter your email to reset your password
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form
            className="space-y-8"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="grid gap-6">
              <Field data-invalid={!!emailError}>
                <FieldLabel htmlFor="email">Email</FieldLabel>

                <FieldContent>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    aria-invalid={!!emailError}
                    {...form.register("email")}
                  />

                  {emailError && (
                    <FieldError>
                      {emailError.message}
                    </FieldError>
                  )}
                </FieldContent>
              </Field>

              <Button
                className="w-full"
                disabled={isLoading}
                type="submit"
              >
                {isLoading ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  "Reset Password"
                )}
              </Button>
            </div>

            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}

              <Link
                className="underline underline-offset-4"
                href="/signup"
              >
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="text-balance text-center text-muted-foreground text-xs *:[a]:underline *:[a]:underline-offset-4 *:[a]:hover:text-primary">
        By clicking continue, you agree to our{" "}

        <Link href="#">Terms of Service</Link>{" "}
        and{" "}

        <Link href="#">Privacy Policy</Link>.
      </div>
    </div>
  );
}