import Box from "@mui/material/Box";
import MainTitle from "../title/MainTitle";
import Typography from "@mui/material/Typography";
import { heroDescription } from "@/constants/hero/hero";
import BaseButton from "../button/BaseButton";

export default function HeroContents() {
  // Click event for BaseButton
  const handleClick = () => {
    console.log(typeof heroDescription.description);
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <Box>
        <MainTitle title={"FreshMarche"} />
      </Box>
      <Box>
        <Typography variant="body1">
          {heroDescription["description"]}
        </Typography>
      </Box>
      <Box>
        <BaseButton onClick={handleClick} text="Explore" />
      </Box>
    </Box>
  );
}
