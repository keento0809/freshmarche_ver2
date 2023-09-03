"use client";

import { Box } from "@mui/material";

export const PageContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Box sx={{ maxWidth: "1280px", margin: "0 auto" }}>{children}</Box>;
};
