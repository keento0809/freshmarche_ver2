"use client";

import { Button } from "@/src/components/common/button/button";
import { useLoggedIn } from "@/src/hooks/auth/useLoggedIn";
import Link from "next/link";
import { useCart } from "./useCart";

export const CartPage = () => {
  const { hasLoggedIn } = useLoggedIn();
  const { cartData } = useCart();

  if (!hasLoggedIn)
    return (
      <div className="fixed top-32 left-0 right-0 z-20">
        <p className="text-lg font-semibold text-center">
          You need to log in first.
        </p>
      </div>
    );
  return (
    <>
      <div className="fixed top-32 left-0 right-0 z-20 text-center px-16">
        <div className="flex flex-col gap-4">
          <div className="px-12 text-left">
            <Button
              asChild
              variant={"outline"}
              className="bg-transparent border border-slate-600 rounded-lg py-2 px-6"
            >
              <Link href={"/home"}>Back</Link>
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-center">Your Cart</h2>
            <div className="flex flex-col gap-4">
              {cartData?.map((cartProduct) => {
                return (
                  <div key={cartProduct.id} className="flex flex-col gap-1">
                    <h2 className="text-xl font-semibold tracking-tight">
                      {cartProduct.title}
                    </h2>
                    <p className="font-normal">{cartProduct.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
