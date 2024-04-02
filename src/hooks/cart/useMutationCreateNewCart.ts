import { externalUrls } from "@/src/constants/urls/externalUrls";
import { ResponseAddingCart } from "@/src/types/api";
import { CartProduct } from "@/src/types/products";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";

type Params = {
  userId: number;
  products: Array<CartProduct>;
};

export const useMutationCreateNewCart = (
  option?: UseMutationOptions<
    AxiosResponse<ResponseAddingCart>,
    AxiosError,
    Params,
    unknown
  >
) => {
  const mutationFn = async (params: Params) => {
    const response: AxiosResponse<ResponseAddingCart> = await axios.post(
      externalUrls.ADD_PRODUCTS_TO_CART,
      params
    );

    if (!response) throw new Error("Failed to add products to cart...");

    return response;
  };

  return useMutation({
    mutationFn,
    ...option,
  });
};
