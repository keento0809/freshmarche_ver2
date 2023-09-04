"use client";

import { BgWrapper } from "@/src/app/components/wrapper/BgWrapper";
import { ViewWrapper } from "@/src/app/components/wrapper/ViewWrapper";
import MainTitle from "../../components/title/MainTitle";
import { useQueryProducts } from "../../hooks/products/useQueryProducts";
import { ProductList } from "../../components/list/ProductList";
import Link from "next/link";

export const HomePage = () => {
  const { data: products, isFetching } = useQueryProducts();
  if (isFetching)
    return (
      <BgWrapper>
        <ViewWrapper>
          <div>Loading...</div>
        </ViewWrapper>
      </BgWrapper>
    );
  return (
    <BgWrapper>
      <ViewWrapper>
        <MainTitle title={"Products"} />
        {products && <ProductList products={products} />}
      </ViewWrapper>
    </BgWrapper>
  );
};
