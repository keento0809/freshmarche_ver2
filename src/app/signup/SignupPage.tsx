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
import { useSignupPage } from "./useSignupPage";

export const SignupPage: FC = () => {
  const { usernameError, emailError, passwordError, handleSubmit } =
    useSignupPage();

  return (
    <Box position="relative" sx={{ pt: "100px" }}>
      <FlexWrapper>
        <MainTitle title={"Sign up"} />
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
            id="name"
            label="Username"
            name="name"
            autoComplete="name"
            autoFocus
          />
          {usernameError && (
            <Box sx={{ color: "red" }}>{usernameError.message}</Box>
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
            Sign up
          </Button>
        </Box>
      </FlexWrapper>
    </Box>
  );
};
