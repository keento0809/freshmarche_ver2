"use client";

import { Box } from "@mui/material";

export const PageContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Box sx={{ padding: "64px 0" }}>{children}</Box>;
};
