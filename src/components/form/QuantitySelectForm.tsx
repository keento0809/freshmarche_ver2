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
import { Product } from "@/src/types/products";
import { useCart } from "../../app/cart/useCart";

const FormSchema = z.object({
  quantity: z.string({
    required_error: "Please select a quantity.",
  }),
  title: z.string({ required_error: "Product title is empty." }),
});

export function QuantitySelectForm({ product }: { product: Product }) {
  const { mutation } = useCart();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: product.title,
      quantity: "1",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    mutation.mutate({ title: data.title, quantity: data.quantity });
    toast({
      title: "Item successfully added to your cart!",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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
