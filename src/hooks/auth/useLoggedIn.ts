import { getLocalStorage } from "@/src/lib/localStorage";
import { useMemo } from "react";
import { localStorageKeys } from "@/src/constants/localStorageKeys/localStorageKeys";

export const useLoggedIn = () => {
  const accessToken = useMemo(
    () => getLocalStorage(localStorageKeys.USER_TOKEN),
    []
  );
  const hasLoggedIn = useMemo(() => !!accessToken, [accessToken]);

  return {
    accessToken,
    hasLoggedIn,
  };
};
