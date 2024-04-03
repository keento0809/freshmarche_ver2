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

type LoginDialogProps = {
  triggerText: string;
};

export const LoginDialog = ({ triggerText }: LoginDialogProps) => {
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
      </DialogContent>
    </Dialog>
  );
};
