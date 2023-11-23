"use client";

import Box from "@mui/material/Box";
import { RenderCommonMenu, RenderMenu, RenderMobileMenu } from "./RenderMenus";

export const Nav = () => {
  return (
    <Box
      zIndex={10}
      sx={{
        flexGrow: 1,
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "transparent",
        color: "black",
        "& .MuiPaper-root": {
          backgroundColor: "transparent",
          color: "black",
          boxShadow: "none",
        },
      }}
    >
      <Box sx={{ maxWidth: "1280px", margin: "0 auto" }}>
        <RenderCommonMenu />
        <RenderMenu />
        <RenderMobileMenu />
      </Box>
    </Box>
  );
};
