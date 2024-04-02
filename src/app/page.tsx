"use client";

import Link from "next/link";
import { Box, Typography } from "@mui/material";
import { FlexWrapper } from "@/src/components/wrapper/FlexWrapper";
import { landingPageTexts } from "@/src/constants/landingPage/landingPage";
import { Button } from "../components/common/button/button";

const styles = {
  height: "100vh",
  gap: "2.5rem",
  zIndex: "10",
};

export default function Home() {
  return (
    <main>
      <Button
        asChild
        variant={"outline"}
        size={"sm"}
        className="border border-red-400"
      >
        <Link href={"/home"}>Get started</Link>
      </Button>
    </main>
  );
}
