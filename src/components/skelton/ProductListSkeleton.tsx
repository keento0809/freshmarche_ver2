import { ProductCardSkelton } from "./ProductCardSkeleton";

export const ProductListSkeleton = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 xl:grid-cols-4">
      <ProductCardSkelton />
      <ProductCardSkelton />
      <ProductCardSkelton />
      <ProductCardSkelton />
      <ProductCardSkelton />
      <ProductCardSkelton />
      <ProductCardSkelton />
      <ProductCardSkelton />
    </div>
  );
};
