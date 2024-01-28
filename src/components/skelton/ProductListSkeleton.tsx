import { Grid } from "@mui/material";
import { ProductCardSkelton } from "./ProductCardSkeleton";

export const ProductListSkeleton = () => {
  return (
    <Grid
      component="ul"
      container
      spacing={4}
      columns={8}
      sx={{ listStyle: "none", padding: "4rem 1.5rem" }}
    >
      <ProductCardSkelton />
      <ProductCardSkelton />
      <ProductCardSkelton />
      <ProductCardSkelton />
      <ProductCardSkelton />
      <ProductCardSkelton />
      <ProductCardSkelton />
      <ProductCardSkelton />
    </Grid>
  );
};
