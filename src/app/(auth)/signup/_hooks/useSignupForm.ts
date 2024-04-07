import { useState } from "react";
import { ZodError, z } from "zod";
import { EMAIL_PATTERN } from "@/src/constants/regex/regex";
import { useForm } from "react-hook-form";
import { redirect } from "next/navigation";
import { useToast } from "@/src/components/common/toast/use-toast";

const UserSchema = z.object({
  username: z
    .string({ required_error: "Username is required." })
    .min(2, { message: "Username must be more than 2 words" }),
  email: z
    .string({ required_error: "Email is required." })
    .email({ message: "Please enter correct email address" })
    .regex(EMAIL_PATTERN, { message: "Please enter correct pattern" }),
  password: z
    .string({ required_error: "Password is required." })
    .min(6, { message: "Password must be more than 6 characters" }),
});

export const useSignupForm = () => {
  const [errors, setErrors] = useState<ZodError<{
    username: string;
    email: string;
    password: string;
  }> | null>(null);
  const form = useForm<z.infer<typeof UserSchema>>();
  const { toast } = useToast();

  const usernameError = errors?.issues.find((e) => e.path[0] === "username");
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
      toast({
        description: "Signup completed!",
      });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      toast({
        variant: "destructive",
        description: "Failed to signup. Please try it again",
      });
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
