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
import { FC } from "react";
import { useLoginPage } from "./useLoginPage";
import { ErrorMessage } from "@/src/components/message/ErrorMessage";

export const LoginPage: FC = () => {
  const { emailError, passwordError, handleSubmit } = useLoginPage();

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
            Sign In
          </Button>
        </Box>
      </FlexWrapper>
    </Box>
  );
};
