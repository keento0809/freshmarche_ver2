import { useState } from "react";
import { ZodError, z } from "zod";
import { EMAIL_PATTERN } from "@/src/constants/regex/regex";
import { useForm } from "react-hook-form";

const FormSchema = z.object({
  username: z
    .string({ required_error: "Username is required." })
    .min(2, { message: "Username must be more than 2 words" }),
  email: z
    .string({ required_error: "Email is required." })
    .email({ message: "Please enter correct email address" })
    .regex(EMAIL_PATTERN, { message: "Please enter correct pattern" }),
  password: z
    .string({ required_error: "Password is required." })
    .min(2, { message: "Password must be more than 6 characters" }),
});

export const useSignupForm = () => {
  const [errors, setErrors] = useState<ZodError<{
    username: string;
    email: string;
    password: string;
  }> | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>();

  const usernameError = errors?.issues.find((e) => e.path[0] === "username");
  const emailError = errors?.issues.find((e) => e.path[0] === "email");
  const passwordError = errors?.issues.find((e) => e.path[0] === "password");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const signUpUserData = new FormData(event.currentTarget);
    const credentials = {
      username: signUpUserData.get("username"),
      email: signUpUserData.get("email"),
      password: signUpUserData.get("password"),
    };
    const parsedCredentials = FormSchema.safeParse(credentials);

    if (!parsedCredentials.success) {
      setErrors(parsedCredentials.error);
      return;
    }

    setIsLoading(true);

    try {
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  return {
    form,
    onSubmit,
    usernameError,
    emailError,
    passwordError,
  };
};
