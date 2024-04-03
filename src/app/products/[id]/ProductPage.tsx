"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import { ProductDetailDescription } from "@/src/components/description/ProductDetailDescription";
import { Button } from "@/src/components/common/button/button";
import Link from "next/link";
import { useProductPage } from "./useProductPage";
import { Loader } from "@/src/components/loader/Loader";

export const ProductPage = ({ id }: { id: string }) => {
  const { product, isLoading, error, handleClick, selectedImgUrl } =
    useProductPage({ id });

  if (isLoading)
    return (
      <>
        <Loader />
      </>
    );
  if (error) notFound();
  if (!product) return <div className="pt-8">No product found</div>;
  return (
    <>
      <div>
        <Button
          asChild
          variant={"outline"}
          className="bg-transparent border-none"
        >
          <Link href={"/home"}>Back</Link>
        </Button>
      </div>
      <div>
        <div>
          <div>
            <Image
              src={selectedImgUrl ? selectedImgUrl : product.thumbnail}
              sizes="100vw"
              width={10}
              height={200}
              quality={100}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                maxHeight: "450px",
                maxWidth: "600px",
              }}
              alt="product-image"
            />
          </div>
          <div>
            {product.images.map((image) => (
              <div
                className="cursor-pointer inline-block"
                key={image}
                onClick={() => handleClick({ imgUrl: image })}
              >
                <Image src={image} width={100} height={100} alt="p-image" />
              </div>
            ))}
          </div>
        </div>
        <div>
          <ProductDetailDescription product={product} />
        </div>
      </div>
    </>
  );
};
