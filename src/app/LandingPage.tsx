"use client";

import Link from "next/link";
import { Box, Typography } from "@mui/material";
import { BgWrapper } from "@/src/app/components/wrapper/BgWrapper";
import { FlexWrapper } from "@/src/app/components/wrapper/FlexWrapper";
import { landingPageTexts } from "@/src/app/constants/landingPage/landingPage";

const styles = {
  minHeight: "100vh",
  minWidth: "100vw",
  gap: "2.5rem",
};

export const LandingPage: React.FC = () => {
  return (
    <FlexWrapper styles={styles}>
      <Box sx={{ zIndex: "10" }}>
        <Typography
          variant="h2"
          sx={{ letterSpacing: "-1px", fontSize: "32px", fontWeight: "400" }}
        >
          {landingPageTexts.title}
        </Typography>
        <Link href={"/home"}>Get started</Link>
      </Box>
    </FlexWrapper>
  );
};
