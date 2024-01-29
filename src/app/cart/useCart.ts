import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { useState } from "react";

interface ProductsInCart {
  title: string;
  quantity: string;
}

export const useCart = () => {
  const [productsInCart, setProductsInCart] = useState<ProductsInCart[]>([]);

  const queryClient = useQueryClient();
  const mutateProducts = (p: ProductsInCart) => {
    return new Promise(() =>
      setTimeout(() => setProductsInCart((prev) => [...prev, p]), 100)
    );
  };
  const cartQuery = useQuery({
    queryKey: ["productsInCart"],
    queryFn: () => productsInCart,
  });
  const mutation = useMutation({
    mutationFn: mutateProducts,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["productsInCart"] }),
  });

  const totalNumberOfProducts = productsInCart.reduce((total, curr) => {
    return total + Number(curr.quantity);
  }, 0);

  return {
    cartQuery,
    totalNumberOfProducts,
    mutation,
    productsInCart,
  };
};
