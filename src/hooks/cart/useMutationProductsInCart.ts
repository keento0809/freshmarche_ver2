import { externalUrls } from "@/src/constants/urls/externalUrls";
import { setLocalStorage } from "@/src/lib/localStorage";
import { ResponseAddingCart } from "@/src/types/api";
import { CartProduct } from "@/src/types/products";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";

type Params = {
  userId: number;
  products: Array<CartProduct>;
};

export const useMutationProductsInCart = ({
  option,
}: {
  option?: UseMutationOptions<
    AxiosResponse<ResponseAddingCart>,
    AxiosError,
    Params,
    unknown
  >;
}) => {
  const mutationFn = async ({ userId, products }: Params) => {
    // TODO: add this later
    // if(!hasLoggedIn) throw new Error('You need to login in!')
    const response: AxiosResponse<ResponseAddingCart> = await axios.post(
      externalUrls.ADD_PRODUCTS_TO_CART,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          products,
        }),
      }
    );

    if (!response) throw new Error("Failed to add products to cart...");
    console.log("追加したデー！", response);

    return response;
  };

  return useMutation({
    mutationFn,
    ...option,
  });
};
