"use client";

import Link from "next/link";
import { Typography } from "@mui/material";
import { BgWrapper } from "@/src/app/components/wrapper/BgWrapper";
import { FlexWrapper } from "@/src/app/components/wrapper/FlexWrapper";
import { landingPageTexts } from "@/constants/landingPage/landingPage";

const styles = {
  minHeight: "100vh",
  gap: "2.5rem",
  paddingBottom: "120px",
};

export const LandingPage: React.FC = () => {
  return (
    <BgWrapper>
      <FlexWrapper styles={styles}>
        <Typography
          variant="h2"
          sx={{ letterSpacing: "-1px", fontSize: "32px", fontWeight: "400" }}
        >
          {landingPageTexts.title}
        </Typography>
        <Link href={"/home"}>Get started</Link>
      </FlexWrapper>
    </BgWrapper>
  );
};
