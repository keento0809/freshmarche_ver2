"use client";

import MainTitle from "@/src/components/title/MainTitle";
import Link from "next/link";
import { LoginDialog } from "./LoginDialog";

export const HomeScreen = () => {
  return (
    <main className="min-h-svh flex flex-col gap-6 justify-center items-center lg:pb-10">
      <MainTitle title="Tech Marche" />
      <div>
        <LoginDialog triggerText="Start with Login" />
      </div>
      <div>
        <Link
          href={"/home"}
          className="block hover:bg-slate-100 transition-all py-3 px-5 rounded-2xl cursor-pointer text-xs"
        >
          Start as guest
        </Link>
      </div>
    </main>
  );
};
