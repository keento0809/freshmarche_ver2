"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import { ProductDetailDescription } from "@/src/components/description/ProductDetailDescription";
import { Button } from "@/src/components/common/button/button";
import Link from "next/link";
import { useProductPage } from "../_hooks/useProductPage";
import { Loader } from "@/src/components/loader/Loader";
import { ChevronLeft } from "lucide-react";

export const ProductPage = ({ id }: { id: string }) => {
  const { product, isLoading, error } = useProductPage({ id });

  if (isLoading) return <Loader />;
  if (error) notFound();
  if (!product) return <div className="pt-8">No product found</div>;
  return (
    <div className="lg:max-w-7xl mx-auto lg:pt-4 px-4 md:px-6 lg:px-8">
      <div className="inline-block">
        <Link
          href={"/home"}
          className="mb-8 flex items-center gap-1 pr-2 rounded-xl mr-4 transition-all hover:bg-slate-200"
        >
          <ChevronLeft />
          <Button
            asChild
            variant={"outline"}
            className="bg-transparent border-none hover:bg-transparent px-1"
          >
            <span>Back</span>
          </Button>
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-32">
        <div className="flex-1">
          <div>
            <Image
              src="/assets/dummy-product-img.jpg"
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
          {/* <div>
            {product.images.map((image) => (
              <div
                className="cursor-pointer inline-block"
                key={image}
                onClick={() => handleClick({ imgUrl: image })}
              >
                <Image src={image} width={100} height={100} alt="p-image" />
              </div>
            ))}
          </div> */}
        </div>
        <div className="flex-1">
          <ProductDetailDescription product={product} />
        </div>
      </div>
    </div>
  );
};
