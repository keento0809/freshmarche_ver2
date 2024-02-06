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
import { EMAIL_PATTERN } from "@/src/constants/regex/regex";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  username: z
    .string({ required_error: "Username is required." })
    .min(2, { message: "Username must be more than 2 words" }),
  email: z
    .string({ required_error: "Email is required." })
    .email({ message: "Please enter correct email address" })
    .regex(EMAIL_PATTERN, { message: "Please enter correct pattern" }),
  password: z
    .string({ required_error: "Password is required." })
    .min(2, { message: "Password must be more than 6 characters" }),
});

export const SignupForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>();
  const onSubmit = () => {};
  return (
    <Form {...form}>
      <form
        onSubmit={onSubmit}
        className="w-full max-w-[450px] space-y-6 px-4 md:px-0"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
  );
};
