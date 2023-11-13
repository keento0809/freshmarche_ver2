import { useState } from "react";
import { type ZodError, z } from "zod";
import { signIn } from "next-auth/react";

const UserSchema = z.object({
  email: z.string().email({ message: "Please enter correct email address" }),
  password: z
    .string()
    // TODO: Fix this validation (1) later
    .min(1, { message: "Password should be more than 6 characters" }),
});

export const useLoginPage = () => {
  const [errors, setErrors] = useState<ZodError<{
    email: string;
    password: string;
  }> | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const loginUserData = new FormData(event.currentTarget);
    const credentials = {
      email: loginUserData.get("email"),
      password: loginUserData.get("password"),
    };
    const parsedCredentials = UserSchema.safeParse(credentials);

    if (!parsedCredentials.success) {
      setErrors(parsedCredentials.error);
      throw parsedCredentials.error;
    }

    const { email, password } = credentials;

    try {
      await signIn("credentials", {
        email,
        password,
        callbackUrl: `http://localhost:3000/home`,
      });
    } catch (err) {
      if (err instanceof Error) console.log(err.message);
      throw new Error("Failed to login...");
    }
  };

  return {
    errors,
    handleSubmit,
  };
};
