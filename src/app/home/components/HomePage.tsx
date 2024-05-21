"use client";

import MainTitle from "../../../components/title/MainTitle";
import { useQuerySearchProducts } from "@/src/hooks/products/useQuerySearchProducts";
import { ProductList } from "../../../components/list/ProductList";
import { ProductListSkeleton } from "@/src/components/skelton/ProductListSkeleton";
import { SearchInput } from "./SearchInput";
import { useFilterProducts } from "@/src/hooks/products/useFilterProducts";

export const HomePage = ({ query }: { query: string }) => {
  const {
    data: products,
    isFetching,
    isLoading,
  } = useQuerySearchProducts({
    query,
  });
  const isProductsFetched = !isFetching && !isLoading && products;
  const { filteredProducts, handleSetText } = useFilterProducts({
    products: isProductsFetched ? products : [],
  });

  return (
    <div className="lg:max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
      <MainTitle title={"Products"} />
      <SearchInput onChange={(e) => handleSetText(e.target.value)} />
      {!isProductsFetched && (
        <div className="flex justify-center mt-4">
          <ProductListSkeleton />
        </div>
      )}
      {isProductsFetched && <ProductList products={filteredProducts} />}
    </div>
  );
};
