"use client";

import { FC } from "react";
import { FlexWrapper } from "@/src/components/wrapper/FlexWrapper";
import {
  Box,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import MainTitle from "@/src/components/title/MainTitle";
import { useSignupPage } from "./useSignupPage";
import { redirect } from "next/navigation";
import { ErrorMessage } from "@/src/components/message/ErrorMessage";
import Link from "next/link";
import { SignupForm } from "@/src/components/form/SignupForm";

export const SignupPage: FC = () => {
  const { usernameError, emailError, passwordError, isSuccess, handleSubmit } =
    useSignupPage();

  if (isSuccess) redirect("/login");

  return (
    <Box position="relative" sx={{ pt: "100px" }}>
      <FlexWrapper>
        <MainTitle title={"Sign up"} />
        <SignupForm />
        {/* <Box
          id="signupForm"
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 4, mx: "auto", maxWidth: "400px" }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Username"
            name="name"
            autoComplete="name"
            autoFocus
          />
          {usernameError && <ErrorMessage error={usernameError} />}
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
          {emailError && <ErrorMessage error={emailError} />}
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
          {passwordError && <ErrorMessage error={passwordError} />}
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
          <Box mt={6} textAlign="center">
            <Typography>
              Already TechMarche user?{" "}
              <Link href={"/login"} style={{ textDecoration: "none" }}>
                Login
              </Link>{" "}
              here!
            </Typography>
          </Box>
        </Box> */}
      </FlexWrapper>
    </Box>
  );
};
