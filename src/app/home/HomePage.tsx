"use client";

import MainTitle from "../../components/title/MainTitle";
import { useQuerySearchProducts } from "@/src/hooks/products/useQuerySearchProducts";
import { ProductList } from "../../components/list/ProductList";
import { ProductListSkeleton } from "@/src/components/skelton/ProductListSkeleton";

export const HomePage = ({ query }: { query: string }) => {
  const {
    data: products,
    isFetching,
    isLoading,
  } = useQuerySearchProducts({
    query,
  });
  return (
    <>
      <MainTitle title={"Products"} />
      {(isFetching || isLoading) && (
        <div className="flex justify-center mt-4">
          <ProductListSkeleton />
        </div>
      )}
      {!isFetching && !isLoading && products && (
        <ProductList products={products} />
      )}
    </>
  );
};
