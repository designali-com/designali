 
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
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

const formSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters."),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export function ResetPasswordForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const token = searchParams.get("token");

  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!token) {
      toast.error("Invalid or missing reset token.");
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await authClient.resetPassword({
        newPassword: values.password,
        token,
      });

      if (error) {
        toast.error(error.message);
        return;
      }

      toast.success("Password reset successfully");
      router.push("/login");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  const passwordError = form.formState.errors.password;
  const confirmPasswordError =
    form.formState.errors.confirmPassword;

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">
            Reset Password
          </CardTitle>

          <CardDescription>
            Enter your new password
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form
            className="space-y-8"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="grid gap-6">
              {/* Password */}
              <Field data-invalid={!!passwordError}>
                <FieldLabel htmlFor="password">
                  Password
                </FieldLabel>

                <FieldContent>
                  <Input
                    id="password"
                    type="password"
                    placeholder="********"
                    aria-invalid={!!passwordError}
                    {...form.register("password")}
                  />

                  {passwordError && (
                    <FieldError>
                      {passwordError.message}
                    </FieldError>
                  )}
                </FieldContent>
              </Field>

              {/* Confirm Password */}
              <Field data-invalid={!!confirmPasswordError}>
                <FieldLabel htmlFor="confirmPassword">
                  Confirm Password
                </FieldLabel>

                <FieldContent>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="********"
                    aria-invalid={!!confirmPasswordError}
                    {...form.register("confirmPassword")}
                  />

                  {confirmPasswordError && (
                    <FieldError>
                      {confirmPasswordError.message}
                    </FieldError>
                  )}
                </FieldContent>
              </Field>

              {/* Submit */}
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