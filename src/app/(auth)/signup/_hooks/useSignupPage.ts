"use client";

import { EMAIL_PATTERN } from "@/src/constants/regex/regex";
import { redirect } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { type ZodError, z } from "zod";

const UserSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Password should be more than 3 characters" }),
  email: z
    .string()
    .email({ message: "Please enter correct email address" })
    .regex(EMAIL_PATTERN, { message: "Please enter correct pattern" }),
  password: z
    .string()
    .min(6, { message: "Password should be more than 6 characters" }),
});

export const useSignupPage = () => {
  const [errors, setErrors] = useState<ZodError<{
    name: string;
    email: string;
    password: string;
  }> | null>(null);
  const form = useForm<z.infer<typeof UserSchema>>();

  const usernameError = errors?.issues.find((e) => e.path[0] === "name");
  const emailError = errors?.issues.find((e) => e.path[0] === "email");
  const passwordError = errors?.issues.find((e) => e.path[0] === "password");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const signUpUserData = new FormData(event.currentTarget);
    const credentials = {
      username: signUpUserData.get("username"),
      email: signUpUserData.get("email"),
      password: signUpUserData.get("password"),
    };
    const parsedCredentials = UserSchema.safeParse(credentials);

    if (!parsedCredentials.success) {
      setErrors(parsedCredentials.error);
      return;
    }

    try {
      const newUser = await fetch("/api/signup", {
        method: "POST",
        body: JSON.stringify(parsedCredentials.data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (newUser) redirect("/home");
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      throw new Error("Failed to signup...");
    } finally {
    }
  };

  return {
    form,
    usernameError,
    emailError,
    passwordError,
    onSubmit,
  };
};
