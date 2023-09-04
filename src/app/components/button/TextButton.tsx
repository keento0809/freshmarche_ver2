"use client";

import Button from "@mui/material/Button";
import Link from "next/link";

type TextButtonProps = {
  linkUrl: string;
  text: string;
};

export const TextButton = ({ text, linkUrl }: TextButtonProps) => {
  return (
    <Link href={`/products/2`} style={{ textDecoration: "none" }}>
      {text}
    </Link>
    // <Button>
    // </Button>
  );
};
