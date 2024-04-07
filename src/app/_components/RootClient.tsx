"use client";

import { FC } from "react";
import { RootHandle } from "./RootHandle";
import { ReactQueryProvider } from "@/src/providers/ReactQueryProvider";

type RootClientProps = {
  children: React.ReactNode;
};

export const RootClient: FC<RootClientProps> = ({ children }) => {
  return (
    <>
      <ReactQueryProvider>
        <RootHandle>{children}</RootHandle>
      </ReactQueryProvider>
    </>
  );
};
