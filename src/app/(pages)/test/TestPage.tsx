"use client";

import { BgWrapper } from "../../components/wrapper/BgWrapper";
import { ViewWrapper } from "../../components/wrapper/ViewWrapper";
import Link from "next/link";

export const TestPage = () => {
  return (
    <BgWrapper>
      <ViewWrapper>
        <Link href={`/products/2`}>LINK</Link>
      </ViewWrapper>
    </BgWrapper>
  );
};
