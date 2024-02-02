import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Product, ProductsInCart } from "@/src/types/products";
import { usePathname, useRouter } from "next/navigation";
import { useMutationIsCartExist } from "@/src/hooks/cart/useMutationIsCartExist";
import { getLocalStorage } from "@/src/lib/localStorage";
import { localStorageKeys } from "@/src/constants/localStorageKeys/localStorageKeys";

export const useCart = () => {
  const [isCartExist, setIsCartExist] = useState(false);
  const [cart, setCart] = useState<Array<Product>>([]);
  const cartId = getLocalStorage(localStorageKeys.CART_ID);
  const userId = getLocalStorage(localStorageKeys.USER_ID);
  const pathname = usePathname();
  const router = useRouter();
  const { mutate } = useMutationIsCartExist();

  useEffect(() => {
    if (userId) {
      mutate(
        { userId: Number(userId) },
        {
          onSuccess: (res) => {
            console.log(res.data.carts[0].products[0]);
            setCart([...res.data.carts[0].products]);
            setIsCartExist(true);
          },
          onError: () => console.log("failed..."),
        }
      );
    }
  }, [mutate, userId]);

  return {
    cart,
    isCartExist,
  };
};
