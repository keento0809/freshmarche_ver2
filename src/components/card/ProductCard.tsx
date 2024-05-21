"use client";

import { Product } from "@/src/types/products";
import { Button } from "../common/button/button";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../common/card/card";
import { Loader } from "lucide-react";
import { useProductCard } from "./hooks/useProductCard";

type ProductCardProps = {
  product: Product;
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { isImageLoading, handleImageLoading } = useProductCard();
  return (
    <Card className="max-h-[450px]" data-testid="productCard">
      <CardHeader className="min-h-[122px]">
        <CardTitle className="line-clamp-2 w-full leading-6">
          {product.title}
        </CardTitle>
        <CardDescription>{product.brand}</CardDescription>
      </CardHeader>
      <CardContent className="relative">
        {isImageLoading && (
          <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex justify-center items-center">
            <Loader className="" />
          </div>
        )}
        <Image
          src={"/assets/dummy-product-img.jpg"}
          sizes="100vw"
          width={10}
          height={200}
          quality={100}
          style={{
            objectFit: "cover",
            width: "100%",
            maxHeight: "226px",
            minHeight: "130px",
          }}
          alt="product"
          onLoad={() => handleImageLoading()}
        />
      </CardContent>
      <CardFooter>
        <Button asChild variant={"outline"} className="border border-red-400">
          <Link href={`/products/${product.id}`}>Detail</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
