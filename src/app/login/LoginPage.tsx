"use client";

import MainTitle from "@/src/components/title/MainTitle";
import { FlexWrapper } from "@/src/components/wrapper/FlexWrapper";
import {
  Box,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { FC, useState } from "react";
import { ZodError, z } from "zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export const LoginPage: FC = () => {
  const [errors, setErrors] = useState<ZodError<{
    email: string;
    password: string;
  }> | null>(null);
  const router = useRouter();

  const UserSchema = z.object({
    email: z.string().email({ message: "Please enter correct email address" }),
    password: z
      .string()
      // TODO: Fix this validation later
      .min(1, { message: "Password should be more than 6 characters" }),
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const credentials = {
      email: data.get("email"),
      password: data.get("password"),
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
      // router.push("/home");
    } catch (err) {
      if (err instanceof Error) console.log(err.message);
      throw new Error("Failed to login...");
    }
  };

  const emailError = errors?.issues.find((e) => e.path[0] === "email");
  const passwordError = errors?.issues.find((e) => e.path[0] === "password");

  return (
    <Box position="relative" sx={{ pt: "100px" }}>
      <FlexWrapper>
        <MainTitle title={"Login"} />
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 4, mx: "auto", maxWidth: "400px" }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          {emailError && <Box sx={{ color: "red" }}>{emailError.message}</Box>}
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {passwordError && (
            <Box sx={{ color: "red" }}>{passwordError.message}</Box>
          )}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </FlexWrapper>
    </Box>
  );
};
