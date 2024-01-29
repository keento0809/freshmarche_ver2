"use client";

import { FlexWrapper } from "@/src/components/wrapper/FlexWrapper";
import { Box } from "@mui/material";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ProductDetailDescription } from "@/src/components/description/ProductDetailDescription";
import { Button } from "@/src/components/common/button/button";
import Link from "next/link";
import { useProductPage } from "./useProductPage";

export const ProductPage = ({ id }: { id: string }) => {
  const { product, isLoading, error, handleClick, selectedImgUrl } =
    useProductPage({ id });

  if (isLoading)
    return (
      <FlexWrapper styles={{ position: "relative" }}>Loading...</FlexWrapper>
    );
  if (error) notFound();
  if (!product) return <div className="pt-8">No product found</div>;
  return (
    <>
      <FlexWrapper
        styles={{
          flexDirection: "column",
          alignItems: "flex-start",
          position: "relative",
          gap: 2,
          width: "100%",
        }}
      >
        <Box pt={2}>
          <Button
            asChild
            variant={"outline"}
            className="bg-transparent border-none"
          >
            <Link href={"/home"}>Back</Link>
          </Button>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"flex-start"}
          gap={2}
          sx={{ width: "100%" }}
        >
          <Box flex={3} display={"flex"} flexDirection={"column"} gap={2}>
            <Box>
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
            </Box>
            <Box
              component="ul"
              display={"flex"}
              flexDirection={"row"}
              gap={1}
              flexWrap={"wrap"}
            >
              {product.images.map((image) => (
                <div
                  className="cursor-pointer inline-block"
                  key={image}
                  onClick={() => handleClick({ imgUrl: image })}
                >
                  <Image src={image} width={100} height={100} alt="p-image" />
                </div>
              ))}
            </Box>
          </Box>
          <Box
            flex={2}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            gap={4}
          >
            <ProductDetailDescription product={product} />
          </Box>
        </Box>
      </FlexWrapper>
    </>
  );
};
