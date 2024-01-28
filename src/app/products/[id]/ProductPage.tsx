"use client";

import { useQueryProductDetail } from "@/src/hooks/products/useQueryProductDetail";
import { FlexWrapper } from "@/src/components/wrapper/FlexWrapper";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/src/components/common/resizable/resizable";
import { ProductCard } from "@/src/components/card/ProductCard";
import { ProductDetailDescription } from "@/src/components/description/ProductDetailDescription";
import { Button } from "@/src/components/common/button/button";
import Link from "next/link";

export const ProductPage = ({ id }: { id: string }) => {
  const { data: product, isLoading, error } = useQueryProductDetail({ id });
  if (isLoading)
    return (
      <FlexWrapper styles={{ position: "relative" }}>Loading...</FlexWrapper>
    );
  if (error) notFound();
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
                src={product.thumbnail}
                sizes="100vw"
                width={10}
                height={200}
                quality={100}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  maxHeight: "600px",
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
              {product.images.map((i) => (
                <Image key={i} src={i} width={100} height={100} alt="p-image" />
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
