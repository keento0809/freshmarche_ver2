"use client";

import { FC } from "react";
import { FlexWrapper } from "@/src/components/wrapper/FlexWrapper";
import {
  Box,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import MainTitle from "@/src/components/title/MainTitle";
import { ZodError } from "zod";

type SignupErrors = ZodError<{
  username: string;
  email: string;
  password: string;
}> | null;

// type LoginErrors = Omit<SignupErrors, ZodError<> | null;

type AuthenticationFormProps = {
  title: string;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  errors: ZodError<{
    email: string;
    password: string;
  }> | null;
  formType: "LOGIN" | "SIGN_UP";
};

export const AuthenticationForm: FC<AuthenticationFormProps> = ({
  title,
  // TODO: fix it later
  handleSubmit,
  formType,
}) => {
  return (
    <Box>
      <FlexWrapper>
        <MainTitle title={title} />
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 4, mx: "auto", maxWidth: "400px" }}
        >
          {formType === "SIGN_UP" && (
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
          )}
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
          {/* {emailError && <Box sx={{ color: "red" }}>{emailError.message}</Box>} */}
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
          {/* {passwordError && (
            <Box sx={{ color: "red" }}>{passwordError.message}</Box>
          )} */}
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
            Sign up
          </Button>
        </Box>
      </FlexWrapper>
    </Box>
  );
};
