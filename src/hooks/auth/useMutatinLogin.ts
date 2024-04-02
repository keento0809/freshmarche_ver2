import { externalUrls } from "@/src/constants/urls/externalUrls";
import { ResponseUserLogin } from "@/src/types/api";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";

type Params = {
  username: string;
  password: string;
};

export const useMutationLogin = (
  option?: UseMutationOptions<
    AxiosResponse<ResponseUserLogin>,
    AxiosError,
    Params,
    unknown
  >
) => {
  const mutationFn = async (params: Params) => {
    const response: AxiosResponse<ResponseUserLogin> = await axios.post(
      externalUrls.USER_LOGIN,
      params
    );
    if (!response) throw new Error("Failed to log in...");
    console.log("login下でー", response);

    return response;
  };

  return useMutation({
    mutationFn,
    ...option,
  });
};
