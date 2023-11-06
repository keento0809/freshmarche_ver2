import { Grid } from "@mui/material";
import type { Product } from "@/src/types/products";
import { ProductCard } from "../card/ProductCard";

type ProductListProps = {
  products: Array<Product>;
};

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <Grid
      component="ul"
      container
      spacing={4}
      columns={8}
      sx={{ listStyle: "none", padding: "4rem 1.5rem" }}
    >
      {products?.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </Grid>
  );
};
