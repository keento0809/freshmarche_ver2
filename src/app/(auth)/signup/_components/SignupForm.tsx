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
import { useSignupForm } from "../_hooks/useSignupForm";
import { cn } from "@/src/lib/utils";

export const SignupForm = () => {
  const { form, onSubmit, usernameError, emailError, passwordError } =
    useSignupForm();
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
                <Input
                  placeholder="username"
                  {...field}
                  className={cn(usernameError && "border-red-500")}
                />
              </FormControl>
              <FormMessage>
                {usernameError && usernameError.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="email"
                  {...field}
                  className={cn(emailError && "border-red-500")}
                />
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
                <Input
                  type="password"
                  placeholder="password"
                  {...field}
                  className={cn(passwordError && "border-red-500")}
                />
              </FormControl>
              <FormMessage>
                {passwordError && passwordError.message}
              </FormMessage>
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
