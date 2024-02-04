"use client";

import MainTitle from "@/src/components/title/MainTitle";
import { FlexWrapper } from "@/src/components/wrapper/FlexWrapper";
import { Box } from "@mui/material";
import { FC } from "react";
import { LoginForm } from "@/src/components/form/LoginForm";

export const LoginPage: FC = () => {
  return (
    <Box position="relative" sx={{ pt: "100px" }}>
      <FlexWrapper>
        <MainTitle title={"Login"} />
        <LoginForm />
      </FlexWrapper>
    </Box>
  );
};
