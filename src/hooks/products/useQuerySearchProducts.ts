import { useQuery } from "@tanstack/react-query";
import type { Product } from "@/src/types/products";
import axios, { AxiosResponse } from "axios";
import { externalUrls } from "@/src/constants/urls/externalUrls";

interface ResponseDataObj {
  limits: number;
  skip: number;
  total: number;
  products: Array<Product>;
}

export const useQuerySearchProducts = ({ query }: { query: string }) => {
  const queryFn = async (): Promise<Product[]> => {
    const response: AxiosResponse<ResponseDataObj> = await axios.get(
      query === ""
        ? `${externalUrls.GET_PRODUCTS}`
        : `${externalUrls.GET_PRODUCTS}/search?q=${query}`
    );
    return response.data.products;
  };
  return useQuery({
    queryKey: ["searchProducts"],
    queryFn,
  });
};
