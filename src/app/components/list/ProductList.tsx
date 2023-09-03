import { Box, Grid } from "@mui/material";
import { Product } from "../../hooks/products/useQueryProducts";
import Image from "next/image";

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
      {products?.map((p) => {
        return (
          <Grid component="li" item xs={2} key={p.id}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
                padding: "0 0.5rem",
                textAlign: "center",
              }}
            >
              <Image
                src={p.images[0]}
                width={150}
                height={150}
                alt="productImage"
              />
              <h4>{p.title}</h4>
              <p>{p.description}</p>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};
