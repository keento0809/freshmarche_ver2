"use client";

import { Box } from "@mui/material";

export const ViewWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Box sx={{ maxWidth: "1280px", margin: "0 auto", padding: "64px 0" }}>
        {children}
      </Box>
    </Box>
  );
};
