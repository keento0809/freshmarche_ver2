"use client";

import { PageContainer } from "@/src/app/components/container/PageContainer";
import { BgWrapper } from "@/src/app/components/wrapper/BgWrapper";
import { ViewWrapper } from "@/src/app/components/wrapper/ViewWrapper";
import MainTitle from "../components/title/MainTitle";

export const HomePage = () => {
  return (
    <BgWrapper>
      <ViewWrapper>
        <MainTitle title={"Products"} />
      </ViewWrapper>
    </BgWrapper>
  );
};
