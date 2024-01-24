import { Box, Grid } from "@mui/material";
import Image from "next/image";
import { Product } from "@/src/types/products";
import { Button } from "../ui/button";
import Link from "next/link";

type ProductCardProps = {
  product: Product;
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Grid component="li" item xs={2}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 0.5rem",
          textAlign: "center",
        }}
      >
        <Image
          src={product.thumbnail}
          sizes="100vw"
          width={10}
          height={200}
          quality={100}
          style={{ objectFit: "cover", width: "100%" }}
          alt="productImage"
        />
        <h4>{product.title}</h4>
        <p>{product.brand}</p>
        <Button asChild className="border border-red-400">
          <Link href={`/products/${product.id}`}>Detail</Link>
        </Button>
      </Box>
    </Grid>
  );
};
