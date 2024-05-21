import { Product } from "@/src/types/products";
import { useMemo, useState } from "react";

type useFilterProductsProps = {
  products: Product[];
};

export const useFilterProducts = ({ products }: useFilterProductsProps) => {
  const [text, setText] = useState("");
  const filteredProducts: Product[] = useMemo(
    () => products?.filter((p) => p.title.toLowerCase().includes(text)),
    [products, text]
  );
  const handleSetText = (txt: string) => {
    setText(txt.toLowerCase());
  };

  return {
    filteredProducts,
    handleSetText,
  };
};
