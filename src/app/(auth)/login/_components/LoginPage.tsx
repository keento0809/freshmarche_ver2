"use client";

import MainTitle from "@/src/components/title/MainTitle";
import { FC } from "react";
import { LoginForm } from "@/src/app/(auth)/login/_components/LoginForm";

export const LoginPage: FC = () => {
  return (
    <div className="min-h-[calc(100svh_-_80px)] flex flex-col justify-center items-center gap-8 pb-10 lg:pb-20">
      <MainTitle title={"Login"} />
      <LoginForm />
    </div>
  );
};
