"use client";

import { useLoggedIn } from "@/src/hooks/auth/useLoggedIn";

export const CartPage = () => {
  const { hasLoggedIn } = useLoggedIn();
  if (!hasLoggedIn)
    return (
      <div className="fixed top-32 left-0 right-0 z-20">
        <p className="text-lg font-semibold text-center">
          You need to log in first.
        </p>
      </div>
    );
  // const { cartQuery } = useCart();
  return (
    <div className="fixed top-32 left-0 right-0 z-20">
      <h2 className="text-2xl font-semibold text-center">Your Cart</h2>
      {/* {cartQuery.data?.map((p) => {
        return (
          <div className="flex items-center" key={p.title}>
            <h2 className="text-xl font-semibold">{p.title}</h2>
            <span>{p.quantity}</span>
          </div>
        );
      })} */}
    </div>
  );
};
