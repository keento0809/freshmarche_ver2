"use client";

import Box from "@mui/material/Box";
import { copyright } from "@/src/constants/footer/footer";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        padding: "4rem 0",
        fontSize: "12px",
        letterSpacing: "0.5px",
        textAlign: "center",
      }}
    >
      <Box>{copyright.text}</Box>
    </Box>
  );
}
