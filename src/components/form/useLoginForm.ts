import { useState } from "react";
import { useForm } from "react-hook-form";
import { type ZodError, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { EMAIL_PATTERN } from "@/src/constants/regex/regex";
import { redirect } from "next/navigation";

const FormSchema = z.object({
  email: z
    .string({ required_error: "Email is required." })
    .email({ message: "Please enter correct email address" })
    .regex(EMAIL_PATTERN, { message: "Please enter correct pattern" }),
  password: z
    .string({ required_error: "Password is required." })
    // TODO: Fix this validation (1) later
    .min(2, { message: "Password must be more than 6 characters" }),
});

export const useLoginForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [errors, setErrors] = useState<ZodError<{
    email: string;
    password: string;
  }> | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const emailError = errors?.issues.find((e) => e.path[0] === "email");
  const passwordError = errors?.issues.find((e) => e.path[0] === "password");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const loginUserData = new FormData(event.currentTarget);
    const credentials = {
      email: loginUserData.get("email"),
      password: loginUserData.get("password"),
    };
    const parsedCredentials = FormSchema.safeParse(credentials);
    console.log(parsedCredentials.success);

    if (!parsedCredentials.success) {
      setErrors(parsedCredentials.error);
      return;
    }

    setIsLoading(true);

    try {
      const loginUser = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(parsedCredentials.data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (loginUser) redirect("/home");
    } catch (err) {
      if (err instanceof Error) console.log(err.message);
      throw new Error("Failed to login...");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    form,
    emailError,
    passwordError,
    onSubmit,
    isLoading,
  };
};
