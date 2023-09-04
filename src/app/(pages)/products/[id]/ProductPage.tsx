"use client";

import { BgWrapper } from "../../../components/wrapper/BgWrapper";
import { ViewWrapper } from "../../../components/wrapper/ViewWrapper";
import { useRouter } from "next/navigation";

export const ProductPage = () => {
  return (
    <BgWrapper>
      <ViewWrapper>
        <div>Product: </div>
      </ViewWrapper>
    </BgWrapper>
  );
};
