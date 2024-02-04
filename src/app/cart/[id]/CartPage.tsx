"use client";

import { Button } from "@/src/components/common/button/button";
import Link from "next/link";
import { useCart } from "./useCart";
import Image from "next/image";

export const CartPage = () => {
  const { cartData, session } = useCart();

  if (!session)
    return (
      <div className="fixed top-32 left-0 right-0 z-20">
        <p className="text-lg font-semibold text-center">
          You need to log in first.
        </p>
      </div>
    );
  return (
    <>
      <div className="flex flex-col gap-4 px-8">
        <div className=" text-left">
          <Button
            asChild
            variant={"outline"}
            className="bg-transparent border border-slate-600 rounded-lg py-2"
          >
            <Link href={"/home"}>Back</Link>
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-center">Your Cart</h2>
          <div className="flex gap-4">
            {cartData ? (
              cartData.map((cartProduct) => {
                return (
                  <div
                    key={cartProduct.id}
                    className="flex flex-col gap-1 text-left"
                  >
                    <h2 className="text-xl font-semibold tracking-tight">
                      {cartProduct.title}
                    </h2>
                    <p>{cartProduct.brand}</p>
                    <p>{cartProduct.quantity}</p>
                    <Image
                      src={cartProduct.thumbnail}
                      sizes="100vw"
                      width={10}
                      height={200}
                      quality={100}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        maxHeight: "200px",
                        minHeight: "100px",
                      }}
                      alt="productImage"
                    />
                  </div>
                );
              })
            ) : (
              <div className="pt-4 flex-grow">
                <h2 className="text-lg text-center">No Products found.</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
