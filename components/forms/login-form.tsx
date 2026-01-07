"use client";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { loginSchema } from "@/zod/auth-schema";
import z from "zod";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { loginUser } from "@/server/user";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof loginSchema>) {
    startTransition(async () => {
      try {
        const response = await loginUser(data.email, data.password);
        if (response.success) {
          router.push("/dashboard");
          toast.success(response.message);
          form.reset();
        } else {
          toast.error(response.message);
        }
      } catch (error) {
        console.log(error);
      }
    });
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="flex flex-col items-center gap-1 text-center">
        <h1 className="text-2xl font-bold">Welcome back!</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Login to your Better Notes account.
        </p>
      </div>
      <FieldGroup className="space-y-px">
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel>Email</FieldLabel>
              <Input
                type="email"
                placeholder="johndoe@mail.com"
                aria-invalid={fieldState.invalid}
                {...field}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel>Password</FieldLabel>
              <Input
                type="password"
                {...field}
                aria-invalid={fieldState.invalid}
                placeholder="********"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Button type="submit" disabled={isPending}>
          {isPending ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              logging in
            </>
          ) : (
            <span>Login</span>
          )}
        </Button>
        <FieldDescription className="px-6 text-center">
          Already have an account? <Link href="/auth/signup">Sign up</Link>
        </FieldDescription>
      </FieldGroup>
    </form>
  );
}
