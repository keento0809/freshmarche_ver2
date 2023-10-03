import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { externalUrls } from "../../constants/urls/externalUrls";

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
};

interface ResponseDataObj {
  limits: number;
  skip: number;
  total: number;
  products: Array<Product>;
}

export const useQueryProducts = () => {
  const queryFn = async (): Promise<Array<Product>> => {
    const response: AxiosResponse<ResponseDataObj> = await axios.get(
      externalUrls.ALL_PRODUCTS
    );
    return response.data.products;
  };
  return useQuery<Array<Product>, Error>({
    queryKey: ["products"],
    queryFn,
    keepPreviousData: true,
    staleTime: 60000,
  });
};
