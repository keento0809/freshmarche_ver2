"use client";

import MainTitle from "../../components/title/MainTitle";
import { useQuerySearchProducts } from "@/src/hooks/products/useQuerySearchProducts";
import { ProductList } from "../../components/list/ProductList";
import { Box } from "@mui/material";
import { ProductListSkeleton } from "@/src/components/skelton/ProductListSkeleton";

export const HomePage = ({ query }: { query: string }) => {
  const { data: products, isFetching } = useQuerySearchProducts({
    query,
  });
  return (
    <Box
      sx={{
        position: "fixed",
        top: "100px",
        left: 0,
        right: 0,
        maxHeight: "calc(100vh - 120px)",
        overflow: "scroll",
        zIndex: 20,
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
