import { useSession } from "next-auth/react";
export const useNavbar = () => {
  const { data: session } = useSession();
  return { session };
};
