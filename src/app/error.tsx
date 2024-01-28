"use client";

import { useEffect } from "react";
import { Button, Typography } from "@mui/material";
import { FlexWrapper } from "../components/wrapper/FlexWrapper";

const styles = {
  position: "relative",
  height: "100vh",
  letterSpacing: "-1",
};

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <FlexWrapper styles={styles}>
      <Typography variant="h4" py={4}>
        Something went wrong!
      </Typography>
      <Button onClick={() => reset()}>Try again</Button>
    </FlexWrapper>
  );
}
