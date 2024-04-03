"use client";

import { Button } from "@/src/components/common/button/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/common/form/form";
import { Input } from "@/src/components/common/input/input";
import { useLoginForm } from "@/src/components/form/useLoginForm";
import { Loader } from "@/src/components/loader/Loader";
import { DialogClose } from "../common/dialog/dialog";

export const LoginForm = () => {
  const { form, onSubmit, isLoading, emailError, passwordError } =
    useLoginForm();

  return (
    <>
      {isLoading && <Loader />}
      <Form {...form}>
        <form
          onSubmit={onSubmit}
          className="w-full flex flex-col gap-8 max-w-[450px] px-4 md:px-0"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="email" {...field} />
                </FormControl>
                <FormMessage>{emailError && emailError.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="password" {...field} />
                </FormControl>
                <FormMessage>
                  {passwordError && passwordError.message}
                </FormMessage>
              </FormItem>
            )}
          />
          <DialogClose className="w-full">
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </DialogClose>
        </form>
      </Form>
    </>
  );
};
