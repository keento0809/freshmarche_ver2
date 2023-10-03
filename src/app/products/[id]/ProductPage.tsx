"use client";

import { useQueryProductDetail } from "@/src/hooks/products/useQueryProductDetail";
import { FlexWrapper } from "@/src/components/wrapper/FlexWrapper";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { ActionButton } from "@/src/components/button/ActionButton";

export const ProductPage = ({ id }: { id: string }) => {
  const { data: product, isFetching } = useQueryProductDetail({ id });
  console.log("p: ", product);
  if (isFetching || product === undefined)
    return <FlexWrapper>Loading...</FlexWrapper>;
  return (
    <FlexWrapper styles={{ flexDirection: "row", alignItems: "flex-start" }}>
      <Box flex={2}>
        <Box>
          <Image
            src={product.thumbnail}
            width={600}
            height={600}
            alt="product-image"
          />
        </Box>
        <Box component="ul">
          {product.images.map((i) => (
            <Image key={i} src={i} width={100} height={100} alt="p-image" />
          ))}
        </Box>
      </Box>
      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        gap={4}
      >
        <Typography variant="h4">{product.title}</Typography>
        <Typography variant="body1">{product.brand}</Typography>
        <Typography variant="h5">${product.price}</Typography>
        <Typography variant="body1">{product.description}</Typography>
        <Typography variant="body1">{product.stock} left</Typography>
        <ActionButton onClick={() => {}} />
      </Box>
    </FlexWrapper>
  );
};
