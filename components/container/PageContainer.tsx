"use client";

import { Box } from "@mui/material";

type PageContainerProps = {
  children: React.ReactNode;
};

export const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return <Box sx={{ maxWidth: "1280px", margin: "0 auto" }}>{children}</Box>;
};
