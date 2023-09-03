"use client";

import { PageContainer } from "@/src/app/components/container/PageContainer";
import { BgWrapper } from "@/src/app/components/wrapper/BgWrapper";
import { ViewHeightWrapper } from "@/src/app/components/wrapper/ViewHeightWrapper";

export const HomePage = () => {
  return (
    <BgWrapper>
      <ViewHeightWrapper>
        <PageContainer>HomePage</PageContainer>
      </ViewHeightWrapper>
    </BgWrapper>
  );
};
