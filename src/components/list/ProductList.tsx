"use client";

import type { Product } from "@/src/types/products";
import { ProductCard } from "../card/ProductCard";

type ProductListProps = {
  products: Array<Product>;
};

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  if (products.length === 0)
    return <div className="text-xl text-center pt-8">No products found</div>;
  return (
    <ul className="pt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 xl:grid-cols-4">
      {products?.map((product) => {
        return (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        );
      })}
    </ul>
  );
};
