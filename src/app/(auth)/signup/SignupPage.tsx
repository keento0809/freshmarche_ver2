"use client";

import { FC } from "react";
import MainTitle from "@/src/components/title/MainTitle";
import { useSignupPage } from "./_hooks/useSignupPage";
import { SignupForm } from "@/src/components/form/SignupForm";

type SignupPageProps = {
  searchParams: { message: string };
};

export const SignupPage: FC<SignupPageProps> = ({ searchParams }) => {
  const { onSubmit, form } = useSignupPage();

  return (
    <div className="min-h-[calc(100svh_-_80px)] flex flex-col justify-center items-center gap-8 pb-10 lg:pb-20">
      <MainTitle title={"Sign up"} />
      <SignupForm onSubmit={onSubmit} form={form} />
      <div className="py-4">
        {searchParams?.message && (
          <p className="bg-foreground/10 text-foreground text-center">
            {searchParams.message}
          </p>
        )}
      </div>
    </div>
  );
};
