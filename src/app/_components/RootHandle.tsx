import { Navbar } from "@/src/components/layout/Navbar";
import { FC } from "react";

type RootHandleProps = {
  children: React.ReactNode;
};

export const RootHandle: FC<RootHandleProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      {/* TODO:Add Nav here */}
    </>
  );
};
