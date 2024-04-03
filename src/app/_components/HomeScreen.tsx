"use client";

import { Button } from "@/src/components/common/button/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/common/dialog/dialog";
import MainTitle from "@/src/components/title/MainTitle";
import Link from "next/link";
import { LoginForm } from "@/src/components/form/LoginForm";

export const HomeScreen = () => {
  return (
    <main className="min-h-svh flex flex-col gap-6 justify-center items-center lg:pb-10">
      <MainTitle title="Tech Marche" />
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Start with login</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] p-8">
            <DialogHeader className="pb-2">
              <DialogTitle className="text-center">Login</DialogTitle>
            </DialogHeader>
            <LoginForm />
          </DialogContent>
        </Dialog>
      </div>
      <div>
        <Link
          href={"/home"}
          className="block hover:bg-slate-100 transition-all py-3 px-5 rounded-2xl cursor-pointer"
        >
          Start as guest
        </Link>
      </div>
    </main>
  );
};
