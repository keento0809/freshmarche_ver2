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
// import { toast } from "@/src/components/common/toast/use-toast";

export const LoginForm = () => {
  const { form, onSubmit, isLoading } = useLoginForm();

  return (
    <>
      {isLoading && <Loader />}
      <Form {...form}>
        <form
          onSubmit={onSubmit}
          className="w-full max-w-[450px] space-y-6 px-4 md:px-0"
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
                <FormMessage />
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
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
};
