"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/src/components/common/button/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/common/form/form";
import { Input } from "@/src/components/common/input/input";
import { toast } from "@/src/components/common/toast/use-toast";
import { useMutationLogin } from "@/src/hooks/auth/useMutatinLogin";
import { setLocalStorage } from "@/src/lib/localStorage";
import { localStorageKeys } from "@/src/constants/localStorageKeys/localStorageKeys";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  username: z.string({ required_error: "Username is required." }).min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z
    .string({ required_error: "Password is required." })
    .min(6, { message: "Password must be at least 6 characters." }),
});

export const LoginForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const router = useRouter();
  const { mutate } = useMutationLogin();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const postData = { username: data.username, password: data.password };
    mutate(postData, {
      onSuccess: (res) => {
        setLocalStorage(localStorageKeys.USER_TOKEN, res.data.token);
        setLocalStorage(localStorageKeys.USER_ID, res.data.id);
        router.push("/home");
      },
    });
    toast({
      title: "You successfully logged in!",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-red-500 p-4">
          <code className="text-slate-50">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
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
