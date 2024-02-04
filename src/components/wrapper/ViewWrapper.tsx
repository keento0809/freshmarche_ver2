"use client";

import { Box } from "@mui/material";

export const ViewWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Box sx={{ maxWidth: "1280px", margin: "0 auto", padding: "64px 24px" }}>
        <Box
          mx={"auto"}
          sx={{
            position: "fixed",
            top: "100px",
            left: 0,
            right: 0,
            maxHeight: "calc(100vh - 120px)",
            maxWidth: "1280px",
            overflow: "scroll",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};
