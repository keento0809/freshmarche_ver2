"use client";

import MainTitle from "../../../components/title/MainTitle";
import { useQuerySearchProducts } from "@/src/hooks/products/useQuerySearchProducts";
import { ProductList } from "../../../components/list/ProductList";
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
    <div className="lg:max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
      <MainTitle title={"Products"} />
      {(isFetching || isLoading) && (
        <div className="flex justify-center mt-4">
          <ProductListSkeleton />
        </div>
      )}
      {!isFetching && !isLoading && products && (
        <ProductList products={products} />
      )}
    </div>
  );
};
