"use client";

import MainTitle from "@/src/components/title/MainTitle";
import { FC } from "react";
import { LoginForm } from "@/src/components/form/LoginForm";

export const LoginPage: FC = () => {
  return (
    <div className="min-h-svh flex flex-col justify-center items-center gap-8 pb-10">
      <MainTitle title={"Login"} />
      <LoginForm />
    </div>
  );
};
