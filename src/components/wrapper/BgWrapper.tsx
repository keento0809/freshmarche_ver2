"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import ImageUrl from "@/src/public/images/top-bg-image.jpg";

export const BgWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Box position="relative">
      <Image
        alt="bg-image"
        src={ImageUrl}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{ objectFit: "cover", minHeight: "100vh" }}
      />
      {children}
    </Box>
  );
};
