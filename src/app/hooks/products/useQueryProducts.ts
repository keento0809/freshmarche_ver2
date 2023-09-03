import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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

export const useQueryProducts = () => {
  const queryFn = async (): Promise<Product[]> => {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data.products;
  };
  return useQuery<Array<Product>, Error>({
    queryKey: ["products"],
    queryFn,
    keepPreviousData: true,
    cacheTime: 6000,
  });
};
