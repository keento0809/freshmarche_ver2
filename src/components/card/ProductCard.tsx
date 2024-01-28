import { Grid } from "@mui/material";
import Image from "next/image";
import { Product } from "@/src/types/products";
import { Button } from "../common/button/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../common/card/card";

type ProductCardProps = {
  product: Product;
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Grid component={"li"} item xs={2}>
      <Card className="max-h-[450px]">
        <CardHeader className="min-h-[134px]">
          <CardTitle>{product.title}</CardTitle>
          <CardDescription>{product.brand}</CardDescription>
        </CardHeader>
        <CardContent className="h-[250px]">
          <Image
            src={product.thumbnail}
            sizes="100vw"
            width={10}
            height={200}
            quality={100}
            style={{
              objectFit: "cover",
              width: "100%",
              maxHeight: "226px",
              minHeight: "130px",
            }}
            alt="productImage"
          />
        </CardContent>
        <CardFooter>
          <Button asChild variant={"outline"} className="border border-red-400">
            <Link href={`/products/${product.id}`}>Detail</Link>
          </Button>
        </CardFooter>
      </Card>
    </Grid>
  );
};
