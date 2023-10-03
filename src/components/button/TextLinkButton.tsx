"use client";

import { Button } from "@mui/material";
import Link from "next/link";
import { ComponentProps } from "react";

type TextButtonProps = ComponentProps<"button"> & {
  linkUrl: string;
  text: string;
};

export const TextLinkButton = ({ text, linkUrl }: TextButtonProps) => {
  return (
    <Button variant="outlined">
      <Link href={linkUrl} style={{ textDecoration: "none", color: "inherit" }}>
        {text}
      </Link>
    </Button>
  );
};
