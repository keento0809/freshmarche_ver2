import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import BasicRating from "../rating/Rating";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Product } from "@/src/app/types/product/product";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Card
      sx={{
        maxWidth: 250,
        textAlign: "center",
        boxShadow: "none",
        border: "1px solid rgba(0,0,0,0.2)",
      }}
    >
      <CardMedia
        sx={{ textAlign: "center" }}
        component="img"
        // TODO:Add reasonable height
        //
        // TODO:Update this dummy image data later
        image={product.imageUrl}
        alt="product"
      />
      <CardHeader sx={{ padding: 0 }} subheader={product.name} />
      <CardContent sx={{ padding: 0 }}>
        <BasicRating rate={4} />
        <Box sx={{ padding: "1rem 0" }}>
          <Typography variant="h6">{product.price}</Typography>
        </Box>
      </CardContent>
      <CardActions disableSpacing></CardActions>
    </Card>
  );
}
