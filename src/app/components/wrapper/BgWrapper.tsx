import { Box } from "@mui/material";
import ImageUrl from "@/public/images/top-bg-image.jpg";

export const BgWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${ImageUrl.src})`,
        backgroundSize: "cover",
        backgroundPosition: "50%",
      }}
    >
      <Box sx={{ paddingTop: "64px" }}>{children}</Box>
    </Box>
  );
};
