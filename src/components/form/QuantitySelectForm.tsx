import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { z } from "zod";

import { Button } from "@/src/components/common/button/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/src/components/common/form/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/common/select/select";
import { toast } from "@/src/components/common/toast/use-toast";
import { productQuantityArray } from "@/src/constants/product/productQuantity";
import { CartProduct, Product } from "@/src/types/products";
import { useLoggedIn } from "@/src/hooks/auth/useLoggedIn";
import { useMutationCreateNewCart } from "@/src/hooks/cart/useMutationCreateNewCart";
import { getLocalStorage, setLocalStorage } from "@/src/lib/localStorage";
import { localStorageKeys } from "@/src/constants/localStorageKeys/localStorageKeys";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";

const FormSchema = z.object({
  id: z.string(),
  quantity: z.string({ required_error: "Product quantity is empty." }),
});

// type PostData = {
//   userId: number;
//   products: Array<CartProduct>;
// };

export function QuantitySelectForm({ product }: { product: Product }) {
  const { id } = product;
  const { hasLoggedIn } = useLoggedIn();
  // const { mutate } = useMutationCreateNewCart();
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      id: id.toString(),
      quantity: "1",
    },
  });
  const queryClient = useQueryClient();

  const updateCart = (data: CartProduct, userId: string) => {
    queryClient.setQueryData(["cart", userId], (prevData: Array<CartProduct>) =>
      prevData ? [...prevData, data] : [data]
    );
    console.log("update complete!!");
  };

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (!hasLoggedIn) throw new Error("You need to login in!");
    const userId = getLocalStorage(localStorageKeys.USER_ID) as string;
    // const { id, quantity } = data;
    const cartProductData: CartProduct = {
      ...product,
      quantity: data.quantity,
    };
    updateCart(cartProductData, userId);

    // const postData: PostData = {
    //   userId: Number(userId),
    //   products: [{ id: Number(id), quantity: Number(quantity) }],
    // };
    // mutate(postData, {
    //   onSuccess: (res) => {
    //     // TODO: Need to refactor this code
    //     setLocalStorage(localStorageKeys.CART_ID, res.data.id);
    //     queryClient.setQueriesData(['cart'])
    //   },
    //   onError: () => console.log("failed..."),
    // });
    router.push("/home");
    toast({
      title: "Item successfully added to your cart!",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">test message</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value.toString()}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Quantity:" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {productQuantityArray.map((num) => (
                    <SelectItem value={num.toString()} key={num}>
                      {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-1/2">
          Add Cart
        </Button>
      </form>
    </Form>
  );
}
