import { useState } from "react";
import { useQueryProductDetail } from "@/src/hooks/products/useQueryProductDetail";

export const useProductPage = ({ id }: { id: string }) => {
  const { data: product, isLoading, error } = useQueryProductDetail({ id });

  const [selectedImgUrl, setSelectedImgUrl] = useState(
    product?.thumbnail ?? ""
  );
  const handleClick = ({ imgUrl }: { imgUrl: string }) => {
    if (product && product.images) {
      const correspondingImgUrl = product.images.find((img) => img === imgUrl);
      correspondingImgUrl && setSelectedImgUrl(correspondingImgUrl);
    }
  };

  return {
    product,
    handleClick,
    isLoading,
    error,
    selectedImgUrl,
  };
};
