import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { topProductsMenu } from "@/constants/product/topProducts";

export default function TopProductMenu() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
      {topProductsMenu.map((menu) => {
        return (
          <Typography key={menu} variant="body1" sx={{ minWidth: 100 }}>
            {menu}
          </Typography>
        );
      })}
    </Box>
  );
}
