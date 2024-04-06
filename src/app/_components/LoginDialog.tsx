"use client";

import { Button } from "@/src/components/common/button/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/common/dialog/dialog";
import { LoginForm } from "@/src/components/form/LoginForm";
import { useRouter } from "next/navigation";

type LoginDialogProps = {
  triggerText: string;
};

export const LoginDialog = ({ triggerText }: LoginDialogProps) => {
  const router = useRouter();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="text-sm">
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-8">
        <DialogHeader className="pb-2">
          <DialogTitle className="text-center">Login</DialogTitle>
        </DialogHeader>
        <LoginForm />
        <div className="py-2 text-xs w-full flex justify-center items-center">
          New to TechMarche?{" "}
          <DialogClose
            className="text-blue-400 inline-block px-1 underline"
            onClick={() => router.push("/signup")}
          >
            Signup
          </DialogClose>{" "}
          here
        </div>
      </DialogContent>
    </Dialog>
  );
};
