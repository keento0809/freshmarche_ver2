import { useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useSession, signOut } from "next-auth/react";
import { getLocalStorage } from "@/src/lib/localStorage";
import { localStorageKeys } from "@/src/constants/localStorageKeys/localStorageKeys";
import { useLoggedIn } from "@/src/hooks/auth/useLoggedIn";
import { useQueryClient } from "@tanstack/react-query";
import { CartProduct } from "@/src/types/products";

export const useRenderMenus = () => {
  const { hasLoggedIn } = useLoggedIn();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const { data: session } = useSession();
  const queryClient = useQueryClient();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const userId = getLocalStorage(localStorageKeys.USER_ID);

  const cartInfo = queryClient.getQueryData<Array<CartProduct>>([
    "cart",
    userId,
  ]);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    router.replace(`${pathname}?${params.toString()}`);
  }, 500);

  const handleReplace = () => {
    if (!session) throw new Error("No session found...");
    const userId = session.user.id;
    if (!userId) throw new Error(`Something is wrong...`);

    router.push(`/cart/${userId}`);
  };

  return {
    anchorEl,
    mobileMoreAnchorEl,
    isMenuOpen,
    isMobileMenuOpen,
    searchParams,
    handleProfileMenuOpen,
    handleMobileMenuClose,
    handleMobileMenuOpen,
    handleMenuClose,
    handleSearch,
    handleReplace,
    session,
    signOut,
    cartInfo,
  };
};
