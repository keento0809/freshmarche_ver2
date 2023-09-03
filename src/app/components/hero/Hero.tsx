"use client";

import Box from "@mui/material/Box";
import HeroImgUrl from "../../public/t-hero-img.jpg";
import HeroContents from "./HeroContents";

export default function Hero() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${HeroImgUrl.src})`,
        minHeight: "100svh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          background: " rgba(255,255,255,0.2)",
          minHeight: "100svh",
        }}
      >
        <HeroContents />
      </Box>
    </Box>
  );
}
