import Typography from "@mui/material/Typography";

interface Props {
  title: string;
  styles?: Array<string>;
}

export default function MainTitle({ title, styles }: Props) {
  return (
    <Typography
      variant="h2"
      fontSize="32px"
      letterSpacing="-1px"
      textAlign="center"
      {...styles}
    >
      {title}
    </Typography>
  );
}
