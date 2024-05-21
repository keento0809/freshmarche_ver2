"use client";

import { FC } from "react";
import MainTitle from "@/src/components/title/MainTitle";
import { SignupForm } from "@/src/app/(auth)/signup/components/SignupForm";

type SignupPageProps = {
  searchParams: { message: string };
};

export const SignupPage: FC<SignupPageProps> = ({ searchParams }) => {
  return (
    <div className="min-h-[calc(100svh_-_80px)] flex flex-col justify-center items-center gap-8 pb-10 lg:pb-20">
      <MainTitle title={"Sign up"} />
      <SignupForm />
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
