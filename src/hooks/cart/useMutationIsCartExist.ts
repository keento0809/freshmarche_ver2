import { externalUrls } from "@/src/constants/urls/externalUrls";
import { ResponseIsCartExist } from "@/src/types/api";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";

type Params = {
  userId: number;
};

export const useMutationIsCartExist = (
  option?: UseMutationOptions<
    AxiosResponse<ResponseIsCartExist>,
    AxiosError,
    Params,
    unknown
  >
) => {
  const mutationFn = async (params: Params) => {
    const response: AxiosResponse<ResponseIsCartExist> = await axios.get(
      `${externalUrls.GET_USER_CART}/5`
      //   ${params.userId}
      //   `
    );

    if (!response) throw new Error("Failed to get user's cart...");
    console.log("cart getしたデー！", response);

    return response;
  };

  return useMutation({
    mutationFn,
    ...option,
  });
};
