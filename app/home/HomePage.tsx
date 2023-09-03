"use client";

import { PageContainer } from "@/components/container/PageContainer";
import { BgWrapper } from "@/components/wrapper/BgWrapper";
import { ViewHeightWrapper } from "@/components/wrapper/ViewHeightWrapper";

export const HomePage = () => {
  return (
    <BgWrapper>
      <ViewHeightWrapper>
        <PageContainer>HomePage</PageContainer>
      </ViewHeightWrapper>
    </BgWrapper>
  );
};
