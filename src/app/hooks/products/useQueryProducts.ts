import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useQueryProducts = () => {
  const queryFn = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data;
  };
  return useQuery({
    queryKey: ["products"],
    queryFn,
    keepPreviousData: true,
    cacheTime: 6000,
  });
};
