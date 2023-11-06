"use client";

import MainTitle from "../../components/title/MainTitle";
import { useQueryProducts } from "../../hooks/products/useQueryProducts";
import { ProductList } from "../../components/list/ProductList";
import { Box } from "@mui/material";
import { ProductListSkeleton } from "@/src/components/skelton/ProductListSkeleton";

export const HomePage = () => {
  const { data: products, isFetching } = useQueryProducts();
  return (
    <Box
      sx={{
        position: "fixed",
        top: "100px",
        left: 0,
        right: 0,
      }}
    >
      <MainTitle title={"Products"} />
      {isFetching && (
        <Box
          display="flex"
          justifyContent="center"
          sx={{ mt: 4, width: "100vw" }}
        >
          <ProductListSkeleton />
        </Box>
      )}
      {!isFetching && products && <ProductList products={products} />}
    </Box>
  );
};
