import { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

type RateNumbers = 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;

interface Props {
  rate: RateNumbers;
}

export default function BasicRating({ rate }: Props) {
  return (
    <Rating
      name="read-only"
      size="small"
      value={rate}
      precision={0.5}
      readOnly
    />
  );
}
