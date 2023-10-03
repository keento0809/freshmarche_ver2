import { externalUrls } from "@/src/constants/urls/externalUrls";
import type { Product } from "@/src/types/products";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

export const useQueryProductDetail = ({ id }: { id: string }) => {
  const queryFn = async (): Promise<Product> => {
    const response: AxiosResponse<Product> = await axios.get(
      `${externalUrls.GET_PRODUCTS}/${id}`
    );
    return response.data;
  };
  return useQuery<Product, Error>({
    queryKey: ["product", id],
    queryFn,
    cacheTime: 6000,
  });
};
