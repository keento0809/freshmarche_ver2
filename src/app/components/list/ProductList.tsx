"use client";

import { Box, Grid } from "@mui/material";
import { Product } from "../../hooks/products/useQueryProducts";
import Image from "next/image";
import { TextButton } from "../button/TextButton";
import Link from "next/link";
import { useRouter } from "next/navigation";

type ProductListProps = {
  products: Array<Product>;
};

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const router = useRouter();
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
                src={p.thumbnail}
                width={150}
                height={150}
                alt="productImage"
              />
              <h4>{p.title}</h4>
              <p>{p.brand}</p>
              <TextButton text={"Detail"} linkUrl={`/products/${p.id}`} />
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};
