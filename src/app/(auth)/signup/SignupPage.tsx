"use client";

import { FC } from "react";
import MainTitle from "@/src/components/title/MainTitle";
import { useSignupPage } from "./useSignupPage";
import { redirect } from "next/navigation";
import { SignupForm } from "@/src/components/form/SignupForm";

export const SignupPage: FC = () => {
  const { isSuccess } = useSignupPage();

  if (isSuccess) redirect("/login");

  return (
    <div className="min-h-svh flex flex-col justify-center items-center gap-8 pb-10">
      <MainTitle title={"Sign up"} />
      <SignupForm />
    </div>
  );
};
