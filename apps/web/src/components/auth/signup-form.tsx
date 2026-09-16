 
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
import { signUp } from "@/src/server/users";
import { cn } from "@workspace/ui/lib/utils";
import { Google } from "@workspace/ui/common/logos";
import { Github } from "@designali/logos";

const formSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters."),

  email: z
    .string()
    .email("Please enter a valid email address."),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters."),
});

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const signInWithGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/dashboard",
    });
  };

  const signInWithGithub = async () => {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/dashboard",
    });
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    try {
      const { success, message } = await signUp(
        values.email,
        values.password,
        values.username
      );

      if (success) {
        toast.success(
          `${message as string} Please check your email for verification.`
        );

        router.push("/dashboard");
      } else {
        toast.error(message as string);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  const usernameError = form.formState.errors.username;
  const emailError = form.formState.errors.email;
  const passwordError = form.formState.errors.password;

  return (
    <div
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">
            Create an account
          </CardTitle>

          <CardDescription>
            Signup with your Google account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form
            className="space-y-8"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="grid gap-6">
              {/* Google Signup */}
              <div className="flex flex-col gap-4">
                <Button
                  className="w-full"
                  onClick={signInWithGoogle}
                  type="button"
                  variant="outline"
                >
                  <Google />
                  Signup with Google
                </Button>

                <Button
                  className="w-full"
                  onClick={signInWithGithub}
                  type="button"
                  variant="outline"
                >
                  <Github />

                  Signup with Github
                </Button>
              </div>

              {/* Divider */}
              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-border after:border-t">
                <span className="relative z-10 bg-card px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>

              {/* Form Fields */}
              <div className="grid gap-6">
                {/* Username */}
                <Field data-invalid={!!usernameError}>
                  <FieldLabel htmlFor="username">
                    Username
                  </FieldLabel>

                  <FieldContent>
                    <Input
                      id="username"
                      type="text"
                      placeholder="aliimam"
                      aria-invalid={!!usernameError}
                      {...form.register("username")}
                    />

                    {usernameError && (
                      <FieldError>
                        {usernameError.message}
                      </FieldError>
                    )}
                  </FieldContent>
                </Field>

                {/* Email */}
                <Field data-invalid={!!emailError}>
                  <FieldLabel htmlFor="email">
                    Email
                  </FieldLabel>

                  <FieldContent>
                    <Input
                      id="email"
                      type="email"
                      placeholder="a@designali.com"
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

                {/* Password */}
                <Field data-invalid={!!passwordError}>
                  <div className="flex items-center justify-between">
                    <FieldLabel htmlFor="password">
                      Password
                    </FieldLabel>

                    <Link
                      className="text-sm underline-offset-4 hover:underline"
                      href="/forgot-password"
                    >
                      Forgot your password?
                    </Link>
                  </div>

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

                {/* Submit */}
                <Button
                  className="w-full"
                  disabled={isLoading}
                  type="submit"
                >
                  {isLoading ? (
                    <Loader2 className="size-4 animate-spin" />
                  ) : (
                    "Signup"
                  )}
                </Button>
              </div>

              {/* Login */}
              <div className="text-center text-sm">
                Already have an account?{" "}

                <Link
                  className="underline underline-offset-4"
                  href="/login"
                >
                  Login
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Terms */}
      <div className="text-balance text-center text-muted-foreground text-xs *:[a]:underline *:[a]:underline-offset-4 *:[a]:hover:text-primary">
        By clicking continue, you agree to our{" "}

        <Link href="#">Terms of Service</Link>{" "}
        and{" "}

        <Link href="#">Privacy Policy</Link>.
      </div>
    </div>
  );
} 