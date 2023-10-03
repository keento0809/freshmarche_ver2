"use client";

import { Button } from "@mui/material";
import Link from "next/link";
import { ComponentProps } from "react";

type TextButtonProps = ComponentProps<"button"> & {
  linkUrl: string;
  text: string;
};

export const TextButton = ({ text, linkUrl }: TextButtonProps) => {
  return (
    <Button>
      <Link href={linkUrl} style={{ textDecoration: "none" }}>
        {text}
      </Link>
    </Button>
  );
};
