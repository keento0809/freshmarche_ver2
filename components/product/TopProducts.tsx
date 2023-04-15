"use client";

import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TopProductMenu from "../menu/TopProductMenu";
import ProductCard from "../card/ProductCart";
import { DUMMY_PRODUCT } from "@/types/product/product";

export default function TopProducts() {
  return (
    // This style is temporary
    <Box sx={{ minHeight: "200px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* title */}
        <Typography variant="h5">Best sellers</Typography>

        {/* menubar */}
        <TopProductMenu />
      </Box>
      <Box>
        <ProductCard product={DUMMY_PRODUCT} />
      </Box>
    </Box>
  );
}
