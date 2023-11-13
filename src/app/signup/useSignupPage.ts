import { useState } from "react";
import { type ZodError, z } from "zod";
import { redirect } from "next/navigation";

const UserSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Password should be more than 3 characters" }),
  email: z.string().email({ message: "Please enter correct email address" }),
  password: z
    .string()
    .min(6, { message: "Password should be more than 6 characters" }),
});

export const useSignupPage = () => {
  const [errors, setErrors] = useState<ZodError<{
    username: string;
    email: string;
    password: string;
  }> | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const signupUserData = new FormData(event.currentTarget);
    const credentials = {
      usename: signupUserData.get("username"),
      email: signupUserData.get("email"),
      password: signupUserData.get("password"),
    };
    const parsedCredentials = UserSchema.safeParse(credentials);

    if (!parsedCredentials.success) {
      setErrors(parsedCredentials.error);
      throw parsedCredentials.error;
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
      if (newUser) redirect("/login");
    } catch (err) {
      if (err instanceof Error) console.log(err.message);
      throw new Error("Failed to signup...");
    }
  };

  return {
    errors,
    handleSubmit,
  };
};
