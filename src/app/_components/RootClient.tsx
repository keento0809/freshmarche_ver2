"use client";

import { FC } from "react";
import { RootHandle } from "./RootHandle";
import { ReactQueryProvider } from "@/src/providers/ReactQueryProvider";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

type RootClientProps = {
  children: React.ReactNode;
  session: Session | null;
};

export const RootClient: FC<RootClientProps> = ({ children, session }) => {
  return (
    <>
      <SessionProvider session={session}>
        <ReactQueryProvider>
          <RootHandle>{children}</RootHandle>
        </ReactQueryProvider>
      </SessionProvider>
    </>
  );
};
