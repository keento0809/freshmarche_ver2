import { FC } from "react";

type RootHandleProps = {
  children: React.ReactNode;
};

export const RootHandle: FC<RootHandleProps> = ({ children }) => {
  return (
    <>
      {/* TODO:Add Nav here */}
      {children}
      {/* TODO:Add Nav here */}
    </>
  );
};
