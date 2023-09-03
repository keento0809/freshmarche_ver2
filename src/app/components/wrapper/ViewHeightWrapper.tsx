"use client";

import { Box } from "@mui/material";

export const ViewHeightWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Box sx={{ minHeight: "100vh" }}>{children}</Box>;
};
