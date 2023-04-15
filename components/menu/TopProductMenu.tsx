import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { topProductsMenuContents } from "@/constants/product/topProducts";

export default function TopProductMenu() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
      {topProductsMenuContents.contents.map((menu) => {
        return (
          <Typography variant="body1" sx={{ minWidth: 100 }}>
            {menu}
          </Typography>
        );
      })}
    </Box>
  );
}
