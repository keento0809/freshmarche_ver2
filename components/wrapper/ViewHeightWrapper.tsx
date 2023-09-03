"use client";

import { Box } from "@mui/material";

type ViewHeightWrapperProps = {
  children: React.ReactNode;
};

export const ViewHeightWrapper: React.FC<ViewHeightWrapperProps> = ({
  children,
}) => {
  return <Box sx={{ minHeight: "100vh" }}>{children}</Box>;
};
