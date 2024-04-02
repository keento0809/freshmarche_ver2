"use client";

import { FC } from "react";
import Link from "next/link";
import { Typography } from "@mui/material";
import { FlexWrapper } from "../components/wrapper/FlexWrapper";

const styles = {
  position: "relative",
  height: "100vh",
  paddingBottom: "2rem",
};

export const NotFoundPage: FC = () => {
  return (
    <FlexWrapper styles={styles}>
      <Typography variant="body1" sx={{ py: 4 }}>
        Page Not Found
      </Typography>
      <Link href={"/home"}>Go Back</Link>
    </FlexWrapper>
  );
};
