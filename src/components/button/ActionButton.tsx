"use client";

import { Button } from "@mui/material";
import { ComponentProps } from "react";

type ActionButtonProps = ComponentProps<"button"> & {
  onClick: () => void;
};

export const ActionButton = ({ onClick }: ActionButtonProps) => {
  return (
    <Button variant="outlined" onClick={onClick}>
      ADD
    </Button>
  );
};
