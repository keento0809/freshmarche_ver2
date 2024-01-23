"use client";

import Link from "next/link";
import { Box, Typography } from "@mui/material";
import { FlexWrapper } from "@/src/components/wrapper/FlexWrapper";
import { landingPageTexts } from "@/src/constants/landingPage/landingPage";

const styles = {
  height: "100vh",
  gap: "2.5rem",
  zIndex: "10",
};

export default function Home() {
  return (
    <main>
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
    </main>
  );
}
