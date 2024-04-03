"use client";

import { Button } from "@/src/components/common/button/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/common/dialog/dialog";
import { LoginForm } from "@/src/components/form/LoginForm";

export const LoginDialog = () => {
  return (
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
  );
};
