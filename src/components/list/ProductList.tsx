import { Grid } from "@mui/material";
import type { Product } from "@/src/types/products";
import { ProductCard } from "../card/ProductCard";

type ProductListProps = {
  products: Array<Product>;
};

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  if (products.length === 0)
    return <div className="text-xl text-center pt-8">No products found</div>;
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
