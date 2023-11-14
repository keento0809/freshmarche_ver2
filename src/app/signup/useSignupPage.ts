import { redirect } from "next/navigation";
import { useState } from "react";
import { type ZodError, z } from "zod";

const UserSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Password should be more than 3 characters" }),
  email: z.string().email({ message: "Please enter correct email address" }),
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
  const [isSuccess, setIsSuccess] = useState(false);

  const usernameError = errors?.issues.find((e) => e.path[0] === "name");
  const emailError = errors?.issues.find((e) => e.path[0] === "email");
  const passwordError = errors?.issues.find((e) => e.path[0] === "password");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const signupUserData = new FormData(event.currentTarget);
    const credentials = {
      name: signupUserData.get("name"),
      email: signupUserData.get("email"),
      password: signupUserData.get("password"),
    };
    const parsedCredentials = UserSchema.safeParse(credentials);

    if (!parsedCredentials.success) {
      setErrors(parsedCredentials.error);
      return;
    }

    const newUserData = { ...parsedCredentials.data, image_url: "" };

    try {
      const newUser = await fetch(`/api/auth/signup`, {
        method: "POST",
        body: JSON.stringify(newUserData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (newUser) {
        setIsSuccess(true);
      }
    } catch (err) {
      if (err instanceof Error) console.log(err.message);
      throw new Error("Failed to signup...");
    }
  };

  return {
    usernameError,
    emailError,
    passwordError,
    isSuccess,
    handleSubmit,
  };
};
