import { useState } from "react";

export const useProductCard = () => {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const handleImageLoading = () => {
    setIsImageLoading(false);
  };
  return {
    isImageLoading,
    handleImageLoading,
  };
};
