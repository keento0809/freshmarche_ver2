"use client";

import { useParams } from "next/navigation";

export const ProductPage = () => {
  const { id } = useParams();
  return <div>Product: {id}</div>;
};
