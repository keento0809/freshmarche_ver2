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

export const LoginPage: FC = () => {
  const [errors, setErrors] = useState<ZodError<{
    email: string;
    password: string;
  }> | null>(null);

  const UserSchema = z.object({
    email: z.string().email({ message: "Please enter correct email address" }),
    password: z
      .string()
      .min(6, { message: "Password should be more than 6 characters" }),
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
  };

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
          {errors?.issues[0] && (
            <Box sx={{ color: "red" }}>{errors.issues[0].message}</Box>
          )}
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {errors?.issues[1] && (
            <Box sx={{ color: "red" }}>{errors.issues[1].message}</Box>
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
