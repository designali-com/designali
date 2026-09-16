
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Badge } from "@workspace/ui/components/badge";
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

import { signIn } from "@/src/server/users";
import { authClient } from "@/src/lib/auth/auth-client";
import { cn } from "@workspace/ui/lib/utils";
import { Github } from "@designali/logos";
import { Google } from "@workspace/ui/common/logos";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(8, "Password must be at least 8 characters."),
});

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const lastMethod = authClient.getLastUsedLoginMethod();

  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
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
      const { success, message } = await signIn(
        values.email,
        values.password
      );

      if (success) {
        toast.success(message as string);
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

  const emailError = form.formState.errors.email;
  const passwordError = form.formState.errors.password;

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">
            Welcome back
          </CardTitle>

          <CardDescription className="flex items-center justify-center gap-2">
            Login with your{" "}
            {lastMethod === "google" ? "Google" : "GitHub"}{" "}
            account 
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form
            className="space-y-8"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="grid gap-6">
              {/* Google Login */}
              <div className="flex flex-col gap-4">
                <Button
                  className="relative w-full"
                  onClick={signInWithGoogle}
                  type="button"
                  variant="outline"
                >

                  <Google />
                  Login with Google

                  {lastMethod === "google" && (
                    <Badge className="absolute right-2 text-[9px]">
                      last used
                    </Badge>
                  )}
                </Button>

                <Button
                  className="relative w-full"
                  onClick={signInWithGithub}
                  type="button"
                  variant="outline"
                >
                  <Github />

                  Login with Github

                  {lastMethod === "github" && (
                    <Badge className="absolute right-2 text-[9px]">
                      last used
                    </Badge>
                  )}
                </Button>
              </div>

              {/* Divider */}
              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-border after:border-t">
                <span className="relative z-10 bg-card px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>

              {/* Email & Password */}
              <div className="grid gap-6">
                {/* Email */}
                <Field data-invalid={!!emailError}>
                  <div className="flex items-center justify-between">
                    <FieldLabel htmlFor="email">
                      Email
                    </FieldLabel>

                    {lastMethod === "email" && (
                      <Badge className="text-[9px]">
                        last used
                      </Badge>
                    )}
                  </div>

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
                    "Login"
                  )}
                </Button>
              </div>

              {/* Signup */}
              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}

                <Link
                  className="underline underline-offset-4"
                  href="/signup"
                >
                  Sign up
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