"use client";

import { FC } from "react";
import { FlexWrapper } from "@/src/components/wrapper/FlexWrapper";
import { Box } from "@mui/material";
import MainTitle from "@/src/components/title/MainTitle";
import { useSignupPage } from "./useSignupPage";
import { redirect } from "next/navigation";
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
      </FlexWrapper>
    </Box>
  );
};
