"use client";

import { BgWrapper } from "../../../components/wrapper/BgWrapper";
import { ViewWrapper } from "../../../components/wrapper/ViewWrapper";
import { useParams } from "next/navigation";

export const ProductPage = () => {
  const { id } = useParams();
  return (
    <BgWrapper>
      <ViewWrapper>
        <div>Product: {id}</div>
      </ViewWrapper>
    </BgWrapper>
  );
};
