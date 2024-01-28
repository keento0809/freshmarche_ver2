import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { FC } from "react";

export const ProductCardSkelton: FC = () => {
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
        <Skeleton
          variant="rectangular"
          width="100%"
          height={200}
          style={{ objectFit: "cover", width: "100%" }}
        />
        <Skeleton width="100%" />
        <Skeleton width="100%" height={16} />
        <Skeleton width="100%" height={16} />
      </Box>
    </Grid>
  );
};
