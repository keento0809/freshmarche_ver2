"use client";

import { BgWrapper } from "@/src/app/components/wrapper/BgWrapper";
import { ViewWrapper } from "@/src/app/components/wrapper/ViewWrapper";
import MainTitle from "../../components/title/MainTitle";
import { useQueryProducts } from "../../hooks/products/useQueryProducts";
import { ProductList } from "../../components/list/ProductList";
import { Box } from "@mui/material";

export const HomePage = () => {
  const { data: products, isFetching } = useQueryProducts();
  if (isFetching)
    return (
      <ViewWrapper>
        <div>Loading...</div>
      </ViewWrapper>
    );
  return (
    <ViewWrapper>
      <Box sx={{ position: "fixed", top: "100px", left: 0, right: 0 }}>
        <MainTitle title={"Products"} />
        {products && <ProductList products={products} />}
      </Box>
    </ViewWrapper>
  );
};
