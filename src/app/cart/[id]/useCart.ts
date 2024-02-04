import { useQueryClient } from "@tanstack/react-query";
import { CartProduct } from "@/src/types/products";
import { useSession } from "next-auth/react";

export const useCart = () => {
  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const userId = session?.user.id;

  const cartData = queryClient.getQueryData<Array<CartProduct>>([
    "cart",
    userId,
  ]);

  return {
    cartData,
    session,
  };
};
