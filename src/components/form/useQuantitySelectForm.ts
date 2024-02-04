import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { CartProduct, Product } from "@/src/types/products";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "@/src/components/common/toast/use-toast";

import { z } from "zod";

const FormSchema = z.object({
  id: z.string(),
  quantity: z.string({ required_error: "Product quantity is empty." }),
});

export const useQuantitySelectForm = ({ product }: { product: Product }) => {
  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      id: product.id.toString(),
      quantity: "1",
    },
  });

  const updateCart = (data: CartProduct, userId: string) => {
    queryClient.setQueryData(["cart", userId], (prevData: Array<CartProduct>) =>
      prevData ? [...prevData, data] : [data]
    );
  };

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (!session) throw new Error("You need to login in!");
    const userId = session.user.id;
    const cartProductData: CartProduct = {
      ...product,
      quantity: data.quantity,
    };
    updateCart(cartProductData, userId);

    router.push("/home");
    // toast({
    //   title: "Item successfully added to your cart!",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">test message</code>
    //     </pre>
    //   ),
    // });
  }

  return {
    onSubmit,
    form,
  };
};
